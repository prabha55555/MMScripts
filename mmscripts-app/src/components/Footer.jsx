import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Mail, Phone, Instagram, MessageCircle, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-white border-t-2 border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="w-12 h-12  rounded-lg shadow-elegant flex items-center justify-center group-hover:shadow-elegant-lg group-hover:scale-105 transition-all duration-300">
                 <img 
                    src="/MMSCRIPTS_Transparent.png" 
                    alt="MMSCRIPTS Logo" 
                    className="w-full h-full object-contain"
                  />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary">MMSCRIPTS</h3>
                <p className="text-xs text-primary font-medium">Publishing Emotions</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed font-body">
              Building a community of passionate writers and storytellers. We don't just publish pages—we publish emotions, dreams, and legacies.
            </p>
            <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
              <Award className="w-4 h-4 text-primary" />
              <span className="font-medium">MSME Registered</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-serif font-semibold text-gray-800 mb-4 flex items-center">
              Quick Links
              <span className="ml-2 h-0.5 flex-1 bg-gradient-to-r from-primary/50 to-transparent"></span>
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/books', label: 'Books' },
                { to: '/articles', label: 'Articles' },
                { to: '/achievements', label: 'Achievements' },
                { to: '/team', label: 'Our Team' },
                { to: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-600 hover:text-primary font-sans text-sm transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-serif font-semibold text-gray-800 mb-4 flex items-center">
              Connect With Us
              <span className="ml-2 h-0.5 flex-1 bg-gradient-to-r from-primary/50 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:mmscriptspublishinghouse@gmail.com"
                  className="text-gray-600 hover:text-primary transition-colors text-sm flex items-center space-x-3 group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-sans">mmscriptspublishinghouse@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+9384935435"
                  className="text-gray-600 hover:text-primary transition-colors text-sm flex items-center space-x-3 group"
                >
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-sans">+91 9384935435</span>
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 font-sans mb-3">Follow Our Journey</p>
              <div className="flex space-x-3">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/mmscripts?igsh=OGhuczhibTFueWNy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg shadow-md hover:shadow-elegant flex items-center justify-center text-gray-600 hover:text-primary transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://chat.whatsapp.com/D1baHxfuVOY8x5Ab0savze "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-lg shadow-md hover:shadow-elegant flex items-center justify-center text-gray-600 hover:text-primary transition-all duration-300 group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-primary/20 mt-10 pt-6 text-center"
        >
          <p className="text-gray-600 text-sm font-sans">
            © {currentYear} <span className="font-semibold text-primary">MMSCRIPTS</span>. All rights reserved. Crafted with ❤️ for storytellers.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
