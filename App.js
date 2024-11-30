import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Menu from './components/Menu';
import Order from './components/Order';
import Cart from './components/Cart';
import Contact from './components/Contact';
import About from './components/About';
import SignUp from './components/SignUp';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Importing CartContext and CartProvider
import { CartProvider } from './components/CartContext';

function App() {
  return (
    // Wrap the app with the CartProvider to share cart state across the app
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
