import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    
    // If we're on home page, scroll to section
    if (location.pathname === '/' && targetId.startsWith('#')) {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2>🌿 Saaral Bakes</h2>
          </Link>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            {location.pathname === '/' ? (
              <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, '#home')}>
                Home
              </a>
            ) : (
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            )}
          </li>
          <li className="nav-item">
            {location.pathname === '/' ? (
              <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>
                About
              </a>
            ) : (
              <Link to="/#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            )}
          </li>
          <li className="nav-item">
            {location.pathname === '/' ? (
              <a href="#products" className="nav-link" onClick={(e) => handleNavClick(e, '#products')}>
                Our Breads
              </a>
            ) : (
              <Link to="/#products" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Our Breads
              </Link>
            )}
          </li>
          <li className="nav-item">
            {location.pathname === '/' ? (
              <a href="#location" className="nav-link" onClick={(e) => handleNavClick(e, '#location')}>
                Visit Us
              </a>
            ) : (
              <Link to="/#location" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Visit Us
              </Link>
            )}
          </li>
          <li className="nav-item">
            <Link to="/brand-guide" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Brand Guide
            </Link>
          </li>
          <li className="nav-item">
            {location.pathname === '/' ? (
              <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>
                Contact
              </a>
            ) : (
              <Link to="/#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            )}
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