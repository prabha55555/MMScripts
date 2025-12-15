import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Books', path: '/books' },
    { name: 'Articles', path: '/articles' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-elegant sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Logo Container */}
              <div className="flex items-center space-x-3">
                {/* Logo Image */}
                <div className="relative w-12 h-12 flex items-center justify-center rounded-lg shadow-elegant group-hover:shadow-elegant-lg transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <img 
                    src="/MMSCRIPTS_LOGO.png" 
                    alt="MMSCRIPTS Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Brand Name */}
                <div className="flex flex-col">
                  <h1 className="text-2xl lg:text-3xl font-serif font-bold text-primary group-hover:text-primary-600 transition-colors duration-300">
                    MMSCRIPTS
                  </h1>
                  <p className="text-xs text-gray-500 font-sans hidden sm:block">Publishing Emotions</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-white'
                  }`}
                >
                  {/* Active background */}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-primary rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {/* Hover background */}
                  <span className="absolute inset-0 bg-primary/80 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                  {/* Text */}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden text-primary focus:outline-none p-2 hover:bg-blue-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden pb-4 overflow-hidden"
            >
              <div className="space-y-1 pt-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? 'bg-gradient-primary text-white shadow-md'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-primary hover:translate-x-1'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
