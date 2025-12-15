import { motion } from 'framer-motion';
import { BookOpen, Users, TrendingUp, Activity } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminDashboard = () => {
  const { user, userRole, isSuperAdmin } = useAuth();

  const stats = [
    { label: 'Total Books', value: '156', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Active Users', value: '12', icon: Users, color: 'bg-green-500', superAdminOnly: true },
    { label: 'Views This Month', value: '2.4K', icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'System Status', value: 'Active', icon: Activity, color: 'bg-orange-500' }
  ];

  const displayStats = stats.filter(stat => !stat.superAdminOnly || isSuperAdmin);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user?.displayName || 'Admin'}!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {displayStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <ActivityItem
              title="New book added"
              description="'The Journey Within' by Sarah Mitchell"
              time="2 hours ago"
            />
            <ActivityItem
              title="Book updated"
              description="Updated price for 'Moonlit Chronicles'"
              time="5 hours ago"
            />
            <ActivityItem
              title="Book deleted"
              description="Removed 'Old Title' from catalog"
              time="1 day ago"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a
              href="/admin/books"
              className="block p-4 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
            >
              Manage Books
            </a>
            {isSuperAdmin && (
              <a
                href="/admin/users"
                className="block p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center font-medium"
              >
                Manage Users
              </a>
            )}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-center font-medium"
            >
              View Public Site
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Your Access Level</h3>
        <p className="text-blue-700 mb-4">
          You are logged in as <strong className="capitalize">{userRole?.replace('_', ' ')}</strong>
        </p>
        <div className="text-sm text-blue-600">
          {isSuperAdmin ? (
            <ul className="list-disc list-inside space-y-1">
              <li>Full access to all admin features</li>
              <li>Can manage books and content</li>
              <li>Can add/remove staff users</li>
              <li>Can assign roles to other users</li>
            </ul>
          ) : (
            <ul className="list-disc list-inside space-y-1">
              <li>Can manage books and content</li>
              <li>Can add, edit, and delete books</li>
              <li>Cannot manage users or access settings</li>
            </ul>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const ActivityItem = ({ title, description, time }) => (
  <div className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0">
    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
    <div className="flex-1">
      <p className="font-medium text-gray-900">{title}</p>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  </div>
);

export default AdminDashboard;
