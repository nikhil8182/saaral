import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className="navbar" 
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: scrolled ? '0 4px 20px rgba(45, 95, 63, 0.15)' : '0 2px 10px rgba(45, 95, 63, 0.1)'
      }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <h2>🌿 Saaral Bakes</h2>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link" onClick={(e) => handleNavClick(e, '#products')}>
              Our Breads
            </a>
          </li>
          <li className="nav-item">
            <a href="#location" className="nav-link" onClick={(e) => handleNavClick(e, '#location')}>
              Visit Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>
              Contact
            </a>
          </li>
        </ul>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={handleMenuToggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;