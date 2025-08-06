import React from 'react';

const Footer = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌿 Saaral Bakes</h3>
            <p>
              Bringing you the freshest, most natural baked goods in Coimbatore. 
              Made with love, served with care.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                  About
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleNavClick(e, '#products')}>
                  Products
                </a>
              </li>
              <li>
                <a href="#location" onClick={(e) => handleNavClick(e, '#location')}>
                  Location
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" onClick={(e) => e.preventDefault()}>📘 Facebook</a>
              <a href="#" onClick={(e) => e.preventDefault()}>📷 Instagram</a>
              <a href="#" onClick={(e) => e.preventDefault()}>🐦 Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Saaral Bakes. All rights reserved. | Made with 💚 in Coimbatore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;