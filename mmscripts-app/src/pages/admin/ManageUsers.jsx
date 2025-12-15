import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Shield, User } from 'lucide-react';
import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState('staff');

  // Fetch users from Firestore
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'allowed_users'));
      const usersData = querySnapshot.docs.map(doc => ({
        email: doc.id,
        ...doc.data()
      }));
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    
    if (!newUserEmail || !newUserEmail.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      // Use email as document ID to prevent duplicates
      await setDoc(doc(db, 'allowed_users', newUserEmail), {
        role: newUserRole,
        addedAt: new Date().toISOString()
      });
      
      alert('User added successfully');
      setNewUserEmail('');
      setNewUserRole('staff');
      setShowAddForm(false);
      fetchUsers();
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user');
    }
  };

  const handleDeleteUser = async (email) => {
    if (!window.confirm(`Are you sure you want to remove ${email} from the whitelist?`)) {
      return;
    }

    try {
      await deleteDoc(doc(db, 'allowed_users', email));
      alert('User removed successfully');
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to remove user');
    }
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Users</h1>
          <p className="text-gray-600">Control who can access the admin portal</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium"
        >
          <Plus size={20} />
          Add User
        </button>
      </div>

      {/* Add User Form */}
      {showAddForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6 mb-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Add New User</h2>
          <form onSubmit={handleAddUser} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={newUserEmail}
                onChange={(e) => setNewUserEmail(e.target.value)}
                placeholder="user@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role
              </label>
              <select
                value={newUserRole}
                onChange={(e) => setNewUserRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="staff">Staff User (Can manage books only)</option>
                <option value="super_admin">Super Admin (Full access)</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Add User
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setNewUserEmail('');
                  setNewUserRole('staff');
                }}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Added Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <motion.tr
                    key={user.email}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <User size={20} className="text-gray-600" />
                        </div>
                        <span className="font-medium text-gray-900">{user.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full ${
                        user.role === 'super_admin'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role === 'super_admin' ? (
                          <>
                            <Shield size={14} />
                            Super Admin
                          </>
                        ) : (
                          <>
                            <User size={14} />
                            Staff User
                          </>
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {user.addedAt ? new Date(user.addedAt).toLocaleDateString() : 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDeleteUser(user.email)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors inline-flex items-center gap-1"
                        title="Remove User"
                      >
                        <Trash2 size={18} />
                        <span className="text-sm font-medium">Remove</span>
                      </button>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Information</h3>
        <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
          <li>Only users added to this whitelist can access the admin portal</li>
          <li>Super Admins have full access including user management</li>
          <li>Staff Users can only manage books and content</li>
          <li>Users must sign in with their Google account using the whitelisted email</li>
          <li>Removing a user will immediately revoke their access</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ManageUsers;
