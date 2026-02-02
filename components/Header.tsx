
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ cartCount, toggleDarkMode, isDarkMode }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Frutas', path: '/#produtos' },
    { name: 'Assinatura', path: '/assinatura' },
    { name: 'Sobre Nós', path: '/#sobre' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <span className="material-icons text-secondary text-4xl absolute -top-1">local_florist</span>
              <span className="material-icons text-primary text-2xl absolute top-1">eco</span>
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight hidden sm:block">
              <span className="text-secondary">E</span><span className="text-primary">TUTI</span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 hover:text-primary transition-colors"
            >
              <span className="material-icons">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <Link to="/checkout" className="relative p-2 text-gray-500 hover:text-primary transition-colors">
              <span className="material-icons">shopping_bag</span>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-secondary text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="hidden sm:block p-2 text-gray-500 hover:text-primary">
              <span className="material-icons">person</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
