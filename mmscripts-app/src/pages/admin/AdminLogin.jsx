import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const AdminLogin = () => {
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const recaptchaRef = useRef(null);
  const recaptchaWidgetId = useRef(null);
  const { signInWithGoogle, user, error: authError } = useAuth();
  const navigate = useNavigate();

  const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user, navigate]);

  // Load and initialize reCAPTCHA v2
  useEffect(() => {
    // Debug logging
    console.log('Environment variables:', {
      hasRecaptchaKey: !!RECAPTCHA_SITE_KEY,
      recaptchaKey: RECAPTCHA_SITE_KEY,
      allEnv: import.meta.env
    });

    if (!RECAPTCHA_SITE_KEY) {
      console.error('reCAPTCHA site key not found');
      setErrorMessage('reCAPTCHA configuration error. Please add VITE_RECAPTCHA_SITE_KEY to your .env file.');
      return;
    }

    // Check if script already loaded
    if (window.grecaptcha) {
      renderRecaptcha();
      return;
    }

    // Load reCAPTCHA v2 script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
    script.async = true;
    script.defer = true;

    // Global callback for when reCAPTCHA loads
    window.onRecaptchaLoad = () => {
      console.log('reCAPTCHA loaded successfully');
      renderRecaptcha();
    };

    script.onerror = () => {
      console.error('Failed to load reCAPTCHA script');
      setErrorMessage('Failed to load security verification. Please check your internet connection.');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (window.grecaptcha && recaptchaWidgetId.current !== null) {
        try {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        } catch (e) {
          console.log('Cleanup error:', e);
        }
      }
      recaptchaWidgetId.current = null;
      delete window.onRecaptchaLoad;
    };
  }, [RECAPTCHA_SITE_KEY]);

  const renderRecaptcha = () => {
    if (!window.grecaptcha || !recaptchaRef.current) {
      console.log('grecaptcha or ref not ready');
      return;
    }

    // Check if already rendered
    if (recaptchaWidgetId.current !== null) {
      console.log('reCAPTCHA already rendered');
      setIsRecaptchaLoaded(true);
      return;
    }

    // Check if element already has reCAPTCHA child
    if (recaptchaRef.current.hasChildNodes()) {
      console.log('reCAPTCHA element already has content');
      setIsRecaptchaLoaded(true);
      return;
    }

    try {
      recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        theme: 'light',
        size: 'normal',
      });
      setIsRecaptchaLoaded(true);
      console.log('reCAPTCHA widget rendered successfully');
    } catch (error) {
      console.error('Error rendering reCAPTCHA:', error);
      setErrorMessage('Failed to initialize security verification.');
    }
  };

  const handleLoginClick = async () => {
    try {
      setErrorMessage('');
      setLoading(true);

      // Verify reCAPTCHA response
      if (!window.grecaptcha) {
        setErrorMessage('Security verification not loaded. Please refresh the page.');
        setLoading(false);
        return;
      }

      const recaptchaResponse = window.grecaptcha.getResponse(recaptchaWidgetId.current);
      
      if (!recaptchaResponse) {
        setErrorMessage('Please complete the reCAPTCHA verification.');
        setLoading(false);
        return;
      }

      console.log('reCAPTCHA verified, attempting sign in...');

      // Proceed with Google sign in
      const result = await signInWithGoogle();
      
      if (result.success) {
        console.log('Sign in successful, redirecting...');
        navigate('/admin');
      } else {
        setErrorMessage(result.error || 'Failed to sign in');
        // Reset reCAPTCHA on error
        if (window.grecaptcha && recaptchaWidgetId.current !== null) {
          window.grecaptcha.reset(recaptchaWidgetId.current);
        }
      }
    } catch (err) {
      console.error('Login error:', err);
      setErrorMessage(err.message || 'An error occurred during sign in');
      // Reset reCAPTCHA on error
      if (window.grecaptcha && recaptchaWidgetId.current !== null) {
        window.grecaptcha.reset(recaptchaWidgetId.current);
      }
    } finally {
      setLoading(false);
    }
  };

  // Display auth error if exists
  useEffect(() => {
    if (authError) {
      setErrorMessage(authError);
      setLoading(false);
    }
  }, [authError]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Portal</h1>
          <p className="text-gray-600">Sign in to access the dashboard</p>
        </div>

        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-lg mb-6 p-4 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{errorMessage}</p>
          </motion.div>
        )}

        {!isRecaptchaLoaded && RECAPTCHA_SITE_KEY && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg mb-6 p-4">
            <p className="text-sm text-blue-800 text-center">Loading security verification...</p>
          </div>
        )}

        {/* reCAPTCHA Container */}
        <div className="mb-6 flex justify-center">
          <div ref={recaptchaRef} />
        </div>

        <button
          onClick={handleLoginClick}
          disabled={loading || !isRecaptchaLoaded}
          className={`w-full bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg 
                     flex items-center justify-center gap-3 transition-all duration-300 
                     ${loading || !isRecaptchaLoaded 
                       ? 'opacity-50 cursor-not-allowed' 
                       : 'hover:bg-gray-50 hover:border-primary hover:text-primary'}`}
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
              <span>Signing in...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Sign in with Google</span>
            </>
          )}
        </button>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Access restricted to authorized staff only</p>
          <p className="mt-2 text-xs">
            Protected by reCAPTCHA and Google{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
