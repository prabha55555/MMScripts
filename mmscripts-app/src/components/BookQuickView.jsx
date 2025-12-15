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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            {/* Modal Box */}
            <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 bg-white/90 rounded-full shadow-lg
                           hover:bg-primary hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Content */}
              <div className="h-full overflow-y-auto pb-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 md:p-8">

                  {/* LEFT — Book Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-2 flex justify-center items-start"
                  >
                    <div className="w-full max-w-sm bg-white rounded-2xl p-4 shadow-xl overflow-hidden self-start">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-auto object-cover rounded-xl"
                      />
                    </div>
                  </motion.div>

                  {/* RIGHT — Book Details */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-3 flex flex-col pb-6 md:pb-8"
                  >
                    {/* Badges */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-full">
                        <BookOpen className="w-3 h-3" />
                        {book.genre || 'Fiction'}
                      </span>
                      <span className={`inline-flex items-center gap-2 px-3 py-1 ${availabilityBadge.bg} ${availabilityBadge.text} text-xs font-semibold rounded-full`}>
                        <Package className="w-3 h-3" />
                        {availabilityBadge.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {book.title}
                    </h2>

                    {/* Author */}
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <User className="w-4 h-4" />
                      <span>by {book.author}</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl font-bold text-primary">
                        ₹{book.price}
                      </div>
                      <div className="text-sm uppercase text-gray-500 font-semibold">
                        {book.language}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {book.fullDescription || book.description}
                    </p>

                    {/* Book Details */}
                    {book.details && (
                      <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <h3 className="text-xs font-semibold text-gray-700 mb-3 uppercase">
                          Book Details
                        </h3>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-xs text-gray-500">Publisher</p>
                            <p className="font-semibold">{book.details.publisher}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Published</p>
                            <p className="font-semibold">{book.details.publishDate}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Rating</p>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                              <span className="font-semibold">{book.details.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Buy Button */}
                    <motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={handleBuyNow}
  className="w-full bg-primary text-white py-3 rounded-lg font-semibold
             flex items-center justify-center gap-2 hover:bg-blue-700
             transition-all shadow-lg mb-6"
>
  <ShoppingCart className="w-5 h-5" />
  Buy Now
</motion.button>


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
