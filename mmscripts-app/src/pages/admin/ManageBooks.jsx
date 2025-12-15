import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Eye, Search, Filter } from 'lucide-react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import BookFormModal from '../../components/admin/BookFormModal';
import BookQuickView from '../../components/BookQuickView';

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [viewingBook, setViewingBook] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Fetch books from Firestore
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'books'));
      const booksData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBooks(booksData);
      setFilteredBooks(booksData);
    } catch (error) {
      console.error('Error fetching books:', error);
      alert('Failed to load books');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Filter books
  useEffect(() => {
    let filtered = books;

    if (searchQuery) {
      filtered = filtered.filter(book =>
        book.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedGenre !== 'All') {
      filtered = filtered.filter(book => book.genre === selectedGenre);
    }

    setFilteredBooks(filtered);
  }, [searchQuery, selectedGenre, books]);

  const genres = ['All', ...new Set(books.map(book => book.genre).filter(Boolean))];

  const handleDelete = async (bookId) => {
    if (!window.confirm('Are you sure you want to delete this book?')) return;

    try {
      await deleteDoc(doc(db, 'books', bookId));
      alert('Book deleted successfully');
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Failed to delete book');
    }
  };

  const handleQuickView = (book) => {
    setViewingBook(book);
    setIsQuickViewOpen(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Books</h1>
          <p className="text-gray-600">Add, edit, or remove books from the catalog</p>
        </div>
        <button
          onClick={() => {
            setEditingBook(null);
            setIsFormOpen(true);
          }}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium"
        >
          <Plus size={20} />
          Add New Book
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'All' ? 'All Genres' : genre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Books Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBooks.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                    No books found
                  </td>
                </tr>
              ) : (
                filteredBooks.map((book) => (
                  <motion.tr
                    key={book.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={book.cover || 'https://via.placeholder.com/60x90'}
                          alt={book.title}
                          className="w-12 h-16 object-cover rounded mr-3"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{book.title}</p>
                          <p className="text-sm text-gray-500">{book.language || 'English'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{book.author}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {book.genre}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">₹{book.price}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        book.availability === 'In Stock' ? 'bg-green-100 text-green-800' :
                        book.availability === 'Limited Stock' ? 'bg-orange-100 text-orange-800' :
                        book.availability === 'Pre-order' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {book.availability || 'In Stock'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleQuickView(book)}
                          className="p-2 text-gray-600 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                          title="Quick View"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => {
                            setEditingBook(book);
                            setIsFormOpen(true);
                          }}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(book.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      <BookFormModal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingBook(null);
        }}
        book={editingBook}
        onSave={fetchBooks}
      />

      <BookQuickView
        book={viewingBook}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </div>
  );
};

export default ManageBooks;
