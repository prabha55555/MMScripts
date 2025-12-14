import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, ExternalLink, BookOpen, User, Star, Package } from 'lucide-react';

const BookQuickView = ({ book, isOpen, onClose }) => {
  if (!book) return null;

  const handleBuyNow = () => {
    window.open(book.amazonLink, '_blank', 'noopener,noreferrer');
  };

  // Function to get availability badge styling
  const getAvailabilityBadge = () => {
    if (book.availability === 'In Stock' && book.stockCount > 10) {
      return {
        bg: 'bg-green-100',
        text: 'text-green-700',
        label: 'In Stock'
      };
    } else if (book.availability === 'In Stock' && book.stockCount <= 10) {
      return {
        bg: 'bg-yellow-100',
        text: 'text-yellow-700',
        label: `Only ${book.stockCount} left`
      };
    } else if (book.availability === 'Limited Stock') {
      return {
        bg: 'bg-orange-100',
        text: 'text-orange-700',
        label: 'Limited Stock'
      };
    } else {
      return {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        label: 'Pre-order'
      };
    }
  };

  const availabilityBadge = getAvailabilityBadge();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       md:w-full md:max-w-4xl md:max-h-[90vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg 
                         hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Content */}
            <div className="overflow-y-auto max-h-full">
              <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
                {/* Left: Book Cover */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="relative w-full max-w-sm h-auto object-cover rounded-xl shadow-2xl 
                                 transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Rating/Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full"
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">Featured Book</span>
                  </motion.div>
                </motion.div>

                {/* Right: Book Details */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col"
                >
                  {/* Category Badge */}
                  <span className="inline-flex items-center gap-1 w-fit px-3 py-1 bg-blue-50 text-primary 
                                   text-xs font-semibold rounded-full mb-4">
                    <BookOpen className="w-3 h-3" />
                    {book.genre || 'Fiction'}
                  </span>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                    {book.title}
                  </h2>

                  {/* Author */}
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <User className="w-4 h-4" />
                    <span className="text-lg">by {book.author}</span>
                  </div>

                  {/* Availability Badge */}
                  <div className={`inline-flex items-center gap-2 w-fit px-4 py-2 ${availabilityBadge.bg} ${availabilityBadge.text} 
                                   text-sm font-semibold rounded-lg mb-6`}>
                    <Package className="w-4 h-4" />
                    {availabilityBadge.label}
                  </div>

                  {/* Divider */}
                  <div className="w-20 h-1 bg-primary rounded-full mb-6" />

                  {/* Full Description */}
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-gray-700 leading-relaxed text-base mb-6 whitespace-pre-line">
                      {book.fullDescription || book.description}
                    </p>

                    {/* Book Details Grid */}
                    {book.details && (
                      <div className="bg-gray-50 rounded-xl p-5 mb-6">
                        <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">Book Details</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Pages</p>
                            <p className="text-sm font-semibold text-gray-800">{book.details.pages}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Publisher</p>
                            <p className="text-sm font-semibold text-gray-800">{book.details.publisher}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Published</p>
                            <p className="text-sm font-semibold text-gray-800">{book.details.publishDate}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">ISBN</p>
                            <p className="text-sm font-semibold text-gray-800">{book.details.isbn}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Language</p>
                            <p className="text-sm font-semibold text-gray-800">{book.language}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Rating</p>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <p className="text-sm font-semibold text-gray-800">{book.details.rating}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBuyNow}
                    className="mt-6 w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg
                               flex items-center justify-center gap-3 hover:bg-blue-700 
                               transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Buy Now on Amazon
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <p className="text-center text-xs text-gray-500 mt-3">
                    Secure purchase through Amazon.in
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #014aad;
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #013a8a;
              }
            `}</style>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookQuickView;
