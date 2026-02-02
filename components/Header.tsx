
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ cartCount, toggleDarkMode, isDarkMode }) => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkUser = () => {
      setIsLoggedIn(!!localStorage.getItem('etuti_user'));
    };
    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Frutas', path: '/frutas' },
    { name: 'Assinatura', path: '/assinatura' },
    { name: 'Sobre Nós', path: '/sobre' },
  ];

  return (
    <>
      <nav className="fixed w-full z-[60] bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            
            {/* Left: Mobile Menu Trigger & Logo */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden p-2 -ml-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors focus:outline-none"
                aria-label="Abrir menu"
              >
                <span className="material-icons">menu</span>
              </button>
              
              <Link to="/" className="flex items-center">
                <img src="/logo.png" alt="ETUTI Logo" className="h-12 w-auto object-contain" />
              </Link>
            </div>

            {/* Center: Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-semibold transition-colors py-2 relative group ${
                      isActive
                        ? 'text-primary'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </Link>
                );
              })}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button 
                onClick={toggleDarkMode}
                className="p-2 text-gray-500 hover:text-primary transition-colors focus:outline-none"
                aria-label="Alternar tema"
              >
                <span className="material-icons text-xl sm:text-2xl">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
              </button>
              
              <Link to="/checkout" className="relative p-2 text-gray-500 hover:text-primary transition-colors">
                <span className="material-icons text-xl sm:text-2xl">shopping_bag</span>
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-secondary text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              <Link 
                to={isLoggedIn ? "/perfil" : "/login"} 
                className={`p-2 transition-colors ${location.pathname === '/perfil' || location.pathname === '/login' ? 'text-primary' : 'text-gray-500 hover:text-primary'}`}
              >
                <span className="material-icons text-xl sm:text-2xl">{isLoggedIn ? 'account_circle' : 'person_outline'}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Off-canvas Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Sidebar Panel */}
        <div 
          className={`absolute inset-y-0 left-0 w-4/5 max-w-xs bg-white dark:bg-surface-dark shadow-2xl transition-transform duration-300 transform border-r border-gray-100 dark:border-gray-800 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            {/* Header of Sidebar */}
            <div className="flex items-center justify-between mb-10">
              <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <img src="/logo.png" alt="ETUTI Logo" className="h-10 w-auto object-contain" />
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors"
              >
                <span className="material-icons">close</span>
              </button>
            </div>

            {/* Nav Links in Sidebar */}
            <div className="flex-grow space-y-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Navegação</p>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${
                      isActive
                        ? 'bg-primary text-white shadow-lg shadow-green-500/20'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary'
                    }`}
                  >
                    <span className="material-icons text-xl">
                      {link.name === 'Home' ? 'home' : 
                       link.name === 'Frutas' ? 'shopping_basket' : 
                       link.name === 'Assinatura' ? 'card_membership' : 'info'}
                    </span>
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Footer of Sidebar */}
            <div className="mt-auto pt-10 border-t border-gray-50 dark:border-gray-800">
              <Link 
                to={isLoggedIn ? "/perfil" : "/login"}
                className="flex items-center gap-4 px-4 py-3 rounded-2xl font-bold bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              >
                <span className="material-icons">account_circle</span>
                {isLoggedIn ? 'Minha Conta' : 'Fazer Login'}
              </Link>
              <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6">
                Wete Wa Nsi • Luanda
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
