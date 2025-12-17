import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShoppingCart,
  BookOpen,
  User,
  Star,
  Package
} from 'lucide-react';

const BookQuickView = ({ book, isOpen, onClose }) => {
  if (!book) return null;

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  const handleBuyNow = () => {
    if (book.amazonLink) {
      window.open(book.amazonLink, '_blank', 'noopener,noreferrer');
    }
  };

  const getAvailabilityBadge = () => {
    if (book.availability === 'In Stock')
      return { bg: 'bg-green-100', text: 'text-green-700', label: 'In Stock' };
    if (book.availability === 'Limited Stock')
      return { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Limited Stock' };
    if (book.availability === 'Pre-order')
      return { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Pre-order' };
    if (book.availability === 'Out of Stock')
      return { bg: 'bg-red-100', text: 'text-red-700', label: 'Out of Stock' };
    return { bg: 'bg-green-100', text: 'text-green-700', label: 'In Stock' };
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          {/* Modal Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[9999] md:flex md:items-center md:justify-center p-0 md:p-4"
          >
            {/* Modal Box */}
            <div className="relative w-full max-w-6xl h-full md:max-h-[90vh] bg-white md:rounded-2xl shadow-2xl overflow-hidden flex flex-col">

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-4 md:right-4 z-20 p-2.5 bg-primary text-white rounded-full shadow-2xl
                           hover:bg-primary/90 transition-colors"
              >
                <X className="w-6 h-6 md:w-6 md:h-6" />
              </button>

              {/* Drag Handle - Removed for full screen */}

              {/* Content */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="flex flex-col md:grid md:grid-cols-5 md:gap-6 p-4 pt-16 md:pt-8 md:p-8 pb-6">

                  {/* Book Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-2 flex justify-center items-start mb-6 md:mb-0"
                  >
                    <div className="w-48 sm:w-56 md:w-full md:max-w-sm bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-3 md:p-4 shadow-xl">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-auto object-cover rounded-xl shadow-md"
                      />
                    </div>
                  </motion.div>

                  {/* Book Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-3 flex flex-col space-y-3 md:space-y-4"
                  >
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-primary text-xs font-semibold rounded-full">
                        <BookOpen className="w-3.5 h-3.5" />
                        {book.genre || 'Fiction'}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${availabilityBadge.bg} ${availabilityBadge.text} text-xs font-semibold rounded-full`}>
                        <Package className="w-3.5 h-3.5" />
                        {availabilityBadge.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      {book.title}
                    </h2>

                    {/* Author */}
                    <div className="flex items-center gap-2 text-gray-600">
                      <User className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm md:text-base">by {book.author}</span>
                    </div>

                    {/* Price & Language */}
                    <div className="flex items-center gap-4 py-2">
                      <div className="text-3xl md:text-4xl font-bold text-primary">
                        ₹{book.price}
                      </div>
                      <div className="px-3 py-1 bg-gray-100 text-gray-700 text-xs md:text-sm uppercase font-semibold rounded-full">
                        {book.language}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Description</h3>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {book.fullDescription || book.description}
                      </p>
                    </div>

                    {/* Book Details */}
                    {book.details && (
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                        <h3 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                          Book Details
                        </h3>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          {book.details.publisher && (
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Publisher</p>
                              <p className="font-semibold text-gray-900 truncate">{book.details.publisher}</p>
                            </div>
                          )}
                          {book.details.publishDate && (
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Published</p>
                              <p className="font-semibold text-gray-900">{book.details.publishDate}</p>
                            </div>
                          )}
                          {book.details.pages && (
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Pages</p>
                              <p className="font-semibold text-gray-900">{book.details.pages}</p>
                            </div>
                          )}
                          {book.details.rating && (
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Rating</p>
                              <div className="flex items-center gap-1.5">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="font-semibold text-gray-900">{book.details.rating}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Buy Button */}
                    <div className="pt-4 pb-6 md:pb-0">
                      <button
                        onClick={handleBuyNow}
                        className="w-full bg-primary text-white py-3.5 md:py-3 rounded-xl font-semibold text-base
                                   flex items-center justify-center gap-2 hover:bg-blue-700
                                   transition-colors shadow-lg"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Buy Now
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookQuickView;
