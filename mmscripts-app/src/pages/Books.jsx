import { motion } from 'framer-motion';
import { Filter, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import BookQuickView from '../components/BookQuickView';
import { getBooksFromFirebase } from '../services/dataService';

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAllBooks, setShowAllBooks] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Fetch books from Firebase
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const booksData = await getBooksFromFirebase();
        setBooks(booksData);
        setError(null);
      } catch (err) {
        console.error('Error fetching books:', err);
        setError('Failed to load books. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Get unique values for filters
  const categories = ['All', ...new Set(books.map(book => book.genre))];
  const authors = ['All', ...new Set(books.map(book => book.author))];
  const languages = ['All', ...new Set(books.map(book => book.language))];

  // Filter books based on search and filters
  const filteredBooks = books.filter(book => {
    const matchesSearch = searchQuery === '' || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || book.genre === selectedCategory;
    const matchesAuthor = selectedAuthor === 'All' || book.author === selectedAuthor;
    const matchesLanguage = selectedLanguage === 'All' || book.language === selectedLanguage;

    return matchesSearch && matchesCategory && matchesAuthor && matchesLanguage;
  });

  const featuredBooks = filteredBooks.filter(book => book.featured).slice(0, 3);
  
  // Limit displayed books to 6 initially, show all when "View More" is clicked
  const displayedBooks = showAllBooks ? filteredBooks : filteredBooks.slice(0, 8);

  // Check if any filters are active
  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || 
    selectedAuthor !== 'All' || selectedLanguage !== 'All';

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedAuthor('All');
    setSelectedLanguage('All');
    setShowAllBooks(false);
  };

  const handleQuickView = (book) => {
    setSelectedBook(book);
    setIsQuickViewOpen(true);
  };

  const handleBuyNow = (book) => {
    window.open(book.amazonLink, '_blank');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-700 text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/BooksBackground.jpg')",
            opacity: 0.75
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-700/80"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Books</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Discover stories that inspire, educate, and entertain. Browse our collection of published works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by title, author, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 items-stretch md:items-center justify-center">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Filter size={18} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-auto px-3 md:px-4 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Author Filter */}
              <select
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
                className="w-full md:w-auto px-3 md:px-4 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-sm"
              >
                {authors.map(author => (
                  <option key={author} value={author}>
                    {author === 'All' ? 'All Authors' : author}
                  </option>
                ))}
              </select>

              {/* Language Filter */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full md:w-auto px-3 md:px-4 py-2.5 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-sm"
              >
                {languages.map(language => (
                  <option key={language} value={language}>
                    {language === 'All' ? 'All Languages' : language}
                  </option>
                ))}
              </select>

              {/* Clear Filters Button */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full md:w-auto px-3 md:px-4 py-2.5 md:py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
                >
                  <X size={16} />
                  Clear Filters
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-primary">{filteredBooks.length}</span> of <span className="font-semibold">{books.length}</span> books
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-600">Loading books...</p>
            </div>
          </div>
        </section>
      )}

      {/* Error State */}
      {error && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-md mx-auto text-center">
              <div className="mb-6">
                <X size={64} className="mx-auto text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Error Loading Books</h3>
              <p className="text-gray-600 mb-6">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Reload Page
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Featured Books */}
      {!loading && !error && featuredBooks.length > 0 && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              {...fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Featured Books
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Highlighted selections from our diverse catalog of published works.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      Featured
                    </div>
                    {/* Genre Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1.5 rounded-md text-xs font-semibold">
                        {book.genre}
                      </span>
                    </div>
                    {/* Quick View Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => handleQuickView(book)}
                        className="bg-white text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors transform scale-90 group-hover:scale-100 duration-300"
                      >
                        Quick View
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2 min-h-[3.5rem]">{book.title}</h3>
                    <p className="text-sm text-gray-700 mb-3">by {book.author}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {book.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-primary">₹{book.price}</div>
                      <div className="text-xs text-gray-600 uppercase font-semibold">{book.language}</div>
                    </div>
                    <button
                      onClick={() => handleBuyNow(book)}
                      className="w-full bg-primary text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300"
                    >
                      Buy Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Books */}
      {!loading && !error && (
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Complete Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore all the books published through MMSCRIPTS.
            </p>
          </motion.div>

          {filteredBooks.length > 0 ? (
            <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {displayedBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Genre Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-white px-3 py-1.5 rounded-md text-xs font-semibold">
                      {book.genre}
                    </span>
                  </div>
                  {/* Quick View Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handleQuickView(book)}
                      className="bg-white text-primary px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors transform scale-90 group-hover:scale-100 duration-300"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary mb-1.5 line-clamp-2 min-h-[3.5rem]">{book.title}</h3>
                  <p className="text-sm text-gray-700 mb-3">by {book.author}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {book.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-primary">₹{book.price}</div>
                    <div className="text-xs text-gray-600 uppercase font-semibold">{book.language}</div>
                  </div>
                  <button
                    onClick={() => handleBuyNow(book)}
                    className="w-full bg-primary text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View More Button */}
          {filteredBooks.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllBooks(!showAllBooks)}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {showAllBooks ? 'Show Less' : `View More `}
              </button>
            </div>
          )}
          </>
          ) : (
            <motion.div
              {...fadeInUp}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <Search size={64} className="mx-auto text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">No Books Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any books matching your search criteria. Try adjusting your filters or search query.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      )}

      {/* CTA Section */}
      {!loading && !error && (
      <section className="relative py-16 lg:py-24 bg-primary text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/BooksBackground.jpg')",
            opacity: 0.75
          }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Publish Your Book?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join our community of published authors and share your story with the world.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
      )}

      {/* Quick View Modal */}
      <BookQuickView 
        book={selectedBook}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </div>
  );
};

export default Books;
