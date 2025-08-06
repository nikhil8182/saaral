import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import BakingProcess from '../components/BakingProcess';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';
import MobileOptimizer from '../components/MobileOptimizer';

const HomePage = () => {
  useEffect(() => {
    // Add smooth reveal animations to sections
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('section-animate');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage">
      <MobileOptimizer />
      <Hero />
      <About />
      <BakingProcess />
      <Products />
      <Testimonials />
      <Location />
      <Newsletter />
      <Contact />
      
      {/* Floating Quick Actions */}
      <div className="floating-actions">
        <a href="tel:+914221234567" className="floating-btn phone-btn" title="Call Us">
          <span className="btn-icon">📞</span>
        </a>
        <a href="https://wa.me/919876543210" className="floating-btn whatsapp-btn" title="WhatsApp">
          <span className="btn-icon">💬</span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;