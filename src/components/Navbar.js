import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Close mobile menu when resizing to desktop
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // Check mobile state on mount
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when mobile menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    
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
              <Link to="/" className="nav-link" onClick={closeMenu}>
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
              <Link to="/#about" className="nav-link" onClick={closeMenu}>
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
              <Link to="/#products" className="nav-link" onClick={closeMenu}>
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
              <Link to="/#location" className="nav-link" onClick={closeMenu}>
                Visit Us
              </Link>
            )}
          </li>
          <li className="nav-item">
            <Link to="/brand-guide" className="nav-link" onClick={closeMenu}>
              Brand Guide
            </Link>
          </li>
          <li className="nav-item">
            {location.pathname === '/' ? (
              <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>
                Contact
              </a>
            ) : (
              <Link to="/#contact" className="nav-link" onClick={closeMenu}>
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
      
      {/* Mobile overlay */}
      {isMenuOpen && isMobile && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;