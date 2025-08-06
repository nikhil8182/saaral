import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    let timeGreeting = '';
    if (hour < 11) {
      timeGreeting = 'Good morning! ';
    } else if (hour < 17) {
      timeGreeting = 'Good afternoon! ';
    } else {
      timeGreeting = 'Good evening! ';
    }
    setGreeting(timeGreeting);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Fresh from Nature's Heart</h1>
          <p className="hero-subtitle">
            {greeting}Artisan baked goods crafted with love, natural ingredients, and traditional methods in the beautiful city of Coimbatore
          </p>
          <div className="hero-buttons">
            <a 
              href="#products" 
              className="btn btn-primary"
              onClick={(e) => handleNavClick(e, '#products')}
            >
              Explore Our Breads
            </a>
            <a 
              href="#location" 
              className="btn btn-secondary"
              onClick={(e) => handleNavClick(e, '#location')}
            >
              Visit Our Bakery
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="bread-showcase">
            <div className="floating-element">🥖</div>
            <div className="floating-element">🍞</div>
            <div className="floating-element">🌾</div>
          </div>
        </div>
      </div>
      <div className="hero-wave"></div>
    </section>
  );
};

export default Hero;