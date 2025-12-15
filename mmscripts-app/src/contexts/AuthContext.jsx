import { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithPopup, 
  signOut as firebaseSignOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '../firebase/config';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is in whitelist
  const checkUserAccess = async (email) => {
    try {
      const userDoc = await getDoc(doc(db, 'allowed_users', email));
      if (userDoc.exists()) {
        return userDoc.data();
      }
      return null;
    } catch (err) {
      console.error('Error checking user access:', err);
      return null;
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      setError(null);
      const result = await signInWithPopup(auth, googleProvider);
      const email = result.user.email;

      // Check if user is whitelisted
      const userData = await checkUserAccess(email);
      
      if (!userData) {
        // User not in whitelist - sign them out
        await firebaseSignOut(auth);
        throw new Error('Access denied. Your email is not authorized to access the admin portal.');
      }

      setUserRole(userData.role);
      return { success: true, user: result.user };
    } catch (err) {
      const errorMessage = err.message || 'Failed to sign in';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
      setUserRole(null);
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Check if user is still in whitelist
        const userData = await checkUserAccess(currentUser.email);
        
        if (userData) {
          setUser(currentUser);
          setUserRole(userData.role);
        } else {
          // User removed from whitelist - sign them out
          await firebaseSignOut(auth);
          setUser(null);
          setUserRole(null);
        }
      } else {
        setUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    userRole,
    loading,
    error,
    signInWithGoogle,
    signOut,
    isSuperAdmin: userRole === 'super_admin',
    isStaff: userRole === 'staff'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
