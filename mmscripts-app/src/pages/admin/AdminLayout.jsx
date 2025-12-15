import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  LogOut, 
  Menu, 
  X,
  Shield
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, userRole, signOut, isSuperAdmin } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
    { path: '/admin/books', label: 'Manage Books', icon: BookOpen },
    ...(isSuperAdmin ? [{ path: '/admin/users', label: 'Manage Users', icon: Users }] : [])
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex items-center ml-4 lg:ml-0">
                <Shield className="w-8 h-8 text-primary mr-3" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">MMSCRIPTS Admin</h1>
                  <p className="text-xs text-gray-500">Content Management System</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{user?.displayName || user?.email}</p>
                  <p className="text-xs text-gray-500 capitalize">{userRole?.replace('_', ' ')}</p>
                </div>
                <img 
                  src={user?.photoURL || 'https://via.placeholder.com/40'} 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full border-2 border-primary"
                />
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`fixed lg:static inset-y-0 left-0 pt-16 lg:pt-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-white shadow-lg z-30`}>
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                  }`
                }
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
