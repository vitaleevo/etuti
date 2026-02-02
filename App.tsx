
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fruits from './pages/Fruits';
import ProductDetail from './pages/ProductDetail';
import Subscription from './pages/Subscription';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Producer from './pages/Producer';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Seasonality from './pages/Seasonality';
import Farmers from './pages/Farmers';
import Help from './pages/Help';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import { CartItem, Product } from './types';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header 
          cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/frutas" element={<Fruits addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/assinatura" element={<Subscription />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/produtor" element={<Producer />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registo" element={<Register />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/sazonalidade" element={<Seasonality />} />
            <Route path="/agricultores" element={<Farmers />} />
            <Route path="/ajuda" element={<Help />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos" element={<TermsOfUse />} />
            <Route path="/checkout" element={<Checkout cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
