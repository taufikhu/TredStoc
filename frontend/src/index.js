import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './landing_page/home/HomePage';
import Products from './landing_page/products/ProductPage';
import Pricing from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import Signup from './landing_page/signup/Signup';
import Login from "./landing_page/signup/Login"
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import About from './landing_page/about/AboutPage';
import NotFound from './landing_page/NotFound';
import "react-toastify/dist/ReactToastify.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<Support />} />
      <Route path="/signup" element={<Signup />} />
      <Route path ="/login" element={<Login />}/>
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);




