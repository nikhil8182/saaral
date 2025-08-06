import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: 'none',
    background: 'linear-gradient(135deg, #2D5F3F 0%, #7FB069 100%)',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
    opacity: isVisible ? '1' : '0',
    visibility: isVisible ? 'visible' : 'hidden',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    boxShadow: '0 4px 20px rgba(45, 95, 63, 0.3)'
  };

  return (
    <button
      style={buttonStyle}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      🌱
    </button>
  );
};

export default ScrollToTop;