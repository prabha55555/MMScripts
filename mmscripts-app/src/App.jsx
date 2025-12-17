import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Books from './pages/Books';
import Articles from './pages/Articles';
import Achievements from './pages/Achievements';
import Team from './pages/Team';
import Contact from './pages/Contact';

// Admin imports
import { AuthProvider } from './contexts/AuthContext';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageBooks from './pages/admin/ManageBooks';
import ManageUsers from './pages/admin/ManageUsers';
import ProtectedRoute from './components/admin/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <div className="min-h-screen flex flex-col bg-white">
              <Header />
              <main className="flex-grow">
                <Home />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/about" element={
            <div className="min-h-screen flex flex-col bg-white">
              <Header />
              <main className="flex-grow">
                <About />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/services" element={
            <div className="min-h-screen flex flex-col bg-white">
              <Header />
              <main className="flex-grow">
                <Services />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/books" element={
            <div className="min-h-screen flex flex-col bg-white">
              <Header />
              <main className="flex-grow">
                <Books />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/articles" element={
            <div className="min-h-screen flex flex-col bg-white">
              <Header />
              <main className="flex-grow">
                <Articles />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/achievements" element={
            <div className="min-h-screen flex flex-col bg-white">
              <Header />
              <main className="flex-grow">
                <Achievements />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/team" element={
            <div className="min-h-screen flex flex-col bg-white">
              <Header />
              <main className="flex-grow">
                <Team />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/contact" element={
            <div className="min-h-screen flex flex-col bg-white">
              <Header />
              <main className="flex-grow">
                <Contact />
              </main>
              <Footer />
            </div>
          } />

          {/* Admin Routes - Hidden from public */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="books" element={<ManageBooks />} />
            <Route path="users" element={
              <ProtectedRoute requireSuperAdmin={true}>
                <ManageUsers />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

