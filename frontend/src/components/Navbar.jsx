import { Link } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <span className="text-2xl font-bold text-gray-900">
              IITP <span className="text-primary-600">StudyHub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/semesters"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Semesters
            </Link>
            <Link
              to="/pyqs"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              PYQs
            </Link>
            <Link
              to="/resources"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Resources
            </Link>
            <Link
              to="/login"
              className="btn-primary"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/semesters"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium"
            >
              Semesters
            </Link>
            <Link
              to="/pyqs"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium"
            >
              PYQs
            </Link>
            <Link
              to="/resources"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-primary-50 hover:text-primary-600 font-medium"
            >
              Resources
            </Link>
            <Link
              to="/login"
              onClick={toggleMenu}
              className="block px-3 py-2 mx-3 mt-2 text-center bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
