import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ExternalLink, Search, Filter, X } from 'lucide-react';
import Button from '../components/Button';
import BookQuickView from '../components/BookQuickView';

const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Sample books data - Replace with Firebase data in production
  const [books] = useState([
    {
      id: 1,
      title: 'The Journey Within',
      author: 'Sarah Mitchell',
      cover: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop',
      description: 'A profound exploration of self-discovery and personal transformation through the eyes of a young traveler.',
      fullDescription: 'The Journey Within takes readers on an unforgettable voyage of self-discovery. Through the eyes of Maya, a young traveler who embarks on a year-long journey across five continents, we explore the depths of human experience and the transformative power of stepping outside our comfort zones. Sarah Mitchell masterfully weaves together themes of identity, belonging, and purpose, creating a narrative that resonates with anyone who has ever questioned their place in the world. Rich with vivid descriptions and profound insights, this novel serves as both an adventure story and a meditation on what it means to truly know oneself.',
      amazonLink: 'https://amazon.com/sample-book-1',
      featured: true,
      genre: 'Fiction',
      language: 'English',
      availability: 'In Stock',
      stockCount: 45,
      price: 349,
      details: {
        pages: 368,
        publisher: 'MMSCRIPTS Publishing',
        publishDate: '2024',
        isbn: '978-1-234567-01-0',
        rating: 4.7
      }
    },
    {
      id: 2,
      title: 'Whispers of Tomorrow',
      author: 'Rajesh Kumar',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
      description: 'A collection of thought-provoking short stories that challenge our perception of reality and time.',
      fullDescription: 'Whispers of Tomorrow is a stunning collection of interconnected short stories that blur the boundaries between past, present, and future. Rajesh Kumar demonstrates exceptional range as he explores themes of memory, technology, and human connection across different timelines and realities. Each story stands alone as a complete narrative while contributing to a larger tapestry that questions the nature of time itself. With prose that is both lyrical and precise, Kumar invites readers to consider how our choices echo through time and how the whispers of tomorrow might already be shaping our present.',
      amazonLink: 'https://amazon.com/sample-book-2',
      featured: true,
      genre: 'Short Stories',
      language: 'English',
      availability: 'In Stock',
      stockCount: 28,
      price: 299,
      details: {
        pages: 312,
        publisher: 'MMSCRIPTS Publishing',
        publishDate: '2023',
        isbn: '978-1-234567-02-7',
        rating: 4.8
      }
    },
    {
      id: 3,
      title: 'Echoes of Silence',
      author: 'Priya Sharma',
      cover: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=600&fit=crop',
      description: 'A powerful anthology of poetry exploring themes of love, loss, and resilience.',
      fullDescription: 'Echoes of Silence is a haunting collection of poetry that speaks to the universal human experiences of love, loss, and the resilience that emerges from heartbreak. Priya Sharma\'s verses are raw and honest, capturing moments of profound emotion with economy and grace. From the quiet devastation of goodbye to the tentative hope of new beginnings, these poems chart an emotional landscape that will resonate with anyone who has loved and lost. Sharma\'s unique voice combines classical Indian poetic traditions with contemporary sensibilities, creating works that feel both timeless and urgently modern.',
      amazonLink: 'https://amazon.com/sample-book-3',
      featured: false,
      genre: 'Poetry',
      language: 'English',
      availability: 'Limited Stock',
      stockCount: 8,
      price: 249,
      details: {
        pages: 156,
        publisher: 'MMSCRIPTS Publishing',
        publishDate: '2024',
        isbn: '978-1-234567-03-4',
        rating: 4.6
      }
    },
    {
      id: 4,
      title: 'The Entrepreneur\'s Mindset',
      author: 'Amit Desai',
      cover: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=600&fit=crop',
      description: 'Practical insights and strategies for building a successful business in the modern world.',
      fullDescription: 'The Entrepreneur\'s Mindset distills decades of business wisdom into an accessible and actionable guide for aspiring entrepreneurs. Amit Desai, a serial entrepreneur who has built and sold multiple successful companies, shares the mental frameworks and practical strategies that separate successful ventures from failures. Beyond just tactics, this book explores the psychological resilience, creative thinking, and adaptive leadership required to navigate the uncertain waters of entrepreneurship. Filled with real-world examples, case studies, and exercises, it serves as both a roadmap and a source of inspiration for anyone looking to build something meaningful.',
      amazonLink: 'https://amazon.com/sample-book-4',
      featured: false,
      genre: 'Business',
      language: 'English',
      availability: 'In Stock',
      stockCount: 52,
      price: 499,
      details: {
        pages: 284,
        publisher: 'MMSCRIPTS Publishing',
        publishDate: '2023',
        isbn: '978-1-234567-04-1',
        rating: 4.9
      }
    },
    {
      id: 5,
      title: 'Moonlit Chronicles',
      author: 'Aisha Khan',
      cover: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop',
      description: 'A fantasy adventure filled with magic, mystery, and unforgettable characters.',
      fullDescription: 'Moonlit Chronicles transports readers to Aethermoor, a realm where magic flows like water and ancient prophecies shape the fate of kingdoms. Aisha Khan creates a richly detailed fantasy world populated with complex characters, intricate political machinations, and a magic system that feels both wondrous and grounded in its own internal logic. At the heart of the story is Lyra, a young mage who discovers she may be the key to preventing an ancient darkness from consuming the realm. With masterful world-building, compelling characters, and a plot that balances epic stakes with intimate character moments, this is fantasy storytelling at its finest.',
      amazonLink: 'https://amazon.com/sample-book-5',
      featured: true,
      genre: 'Fantasy',
      language: 'English',
      availability: 'In Stock',
      stockCount: 34,
      price: 599,
      details: {
        pages: 542,
        publisher: 'MMSCRIPTS Publishing',
        publishDate: '2024',
        isbn: '978-1-234567-05-8',
        rating: 4.8
      }
    },
    {
      id: 6,
      title: 'Healing Through Words',
      author: 'Dr. Meera Patel',
      cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop',
      description: 'A guide to using writing as a therapeutic tool for mental health and emotional well-being.',
      fullDescription: 'Healing Through Words bridges the gap between clinical psychology and creative expression, offering readers evidence-based techniques for using writing as a tool for emotional healing and mental wellness. Dr. Meera Patel, a licensed therapist and writing coach, guides readers through various therapeutic writing practices—from journaling and poetry to narrative therapy exercises. Each chapter combines psychological insights with practical exercises, making complex therapeutic concepts accessible to anyone seeking to process emotions, overcome trauma, or simply understand themselves better. This isn\'t just a self-help book; it\'s a comprehensive guide to the healing power of putting pen to paper.',
      amazonLink: 'https://amazon.com/sample-book-6',
      featured: false,
      genre: 'Self-Help',
      language: 'English',
      availability: 'In Stock',
      stockCount: 19,
      price: 399,
      details: {
        pages: 296,
        publisher: 'MMSCRIPTS Publishing',
        publishDate: '2024',
        isbn: '978-1-234567-06-5',
        rating: 4.7
      }
    },
  ]);

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

  const featuredBooks = filteredBooks.filter(book => book.featured);

  // Check if any filters are active
  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || 
    selectedAuthor !== 'All' || selectedLanguage !== 'All';

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedAuthor('All');
    setSelectedLanguage('All');
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
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
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-sm"
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
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-sm"
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
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-sm"
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
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
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

      {/* Featured Books */}
      {featuredBooks.length > 0 && (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {filteredBooks.map((book, index) => (
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 lg:px-8">
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
