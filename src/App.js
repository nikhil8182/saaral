import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BrandBookPage from './pages/BrandBookPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Add loading state for better UX
    document.body.classList.add('loaded');

    // Intersection Observer for animation triggers
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.product-card, .feature, .info-card, .contact-item');
    animatedElements.forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });

    // Add hover effects for product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      const handleMouseEnter = () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
      };
      
      const handleMouseLeave = () => {
        card.style.transform = 'translateY(0) scale(1)';
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup event listeners
      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    // Cleanup observer
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
              <ScrollToTop />
            </>
          } />
          <Route path="/brand-guide" element={
            <>
              <BrandBookPage />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;