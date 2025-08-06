import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [greeting, setGreeting] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

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

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    // Scroll parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero enhanced-hero">
      {/* Background layers for parallax */}
      <div className="hero-bg-layer layer-1" style={{
        transform: `translateY(${scrollY * 0.5}px)`
      }}></div>
      <div className="hero-bg-layer layer-2" style={{
        transform: `translateY(${scrollY * 0.3}px)`
      }}></div>
      <div className="hero-bg-layer layer-3" style={{
        transform: `translateY(${scrollY * 0.1}px)`
      }}></div>

      {/* Animated particles */}
      <div className="particle-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`}></div>
        ))}
      </div>

      <div className="hero-container">
        <div className="hero-content" style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
        }}>
          <div className="hero-badge">🌿 Est. 2024 • Coimbatore</div>
          <h1 className="hero-title">
            <span className="title-word">Fresh</span>
            <span className="title-word">from</span>
            <span className="title-word">Nature's</span>
            <span className="title-word">Heart</span>
          </h1>
          <p className="hero-subtitle">
            {greeting}Artisan baked goods crafted with love, natural ingredients, and traditional methods in the beautiful city of Coimbatore
          </p>
          <div className="hero-stats-row">
            <div className="hero-stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">Organic</span>
            </div>
            <div className="hero-stat">
              <span className="stat-value">Fresh</span>
              <span className="stat-label">Daily</span>
            </div>
            <div className="hero-stat">
              <span className="stat-value">Local</span>
              <span className="stat-label">Sourced</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a 
              href="#products" 
              className="btn btn-primary btn-large"
              onClick={(e) => handleNavClick(e, '#products')}
            >
              <span>Explore Our Breads</span>
              <span className="btn-arrow">→</span>
            </a>
            <a 
              href="#location" 
              className="btn btn-secondary btn-large"
              onClick={(e) => handleNavClick(e, '#location')}
            >
              <span>Visit Our Bakery</span>
              <span className="btn-icon">📍</span>
            </a>
          </div>
        </div>
        <div className="hero-image" style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
        }}>
          <div className="bread-showcase">
            <div className="floating-element element-1">🥖</div>
            <div className="floating-element element-2">🍞</div>
            <div className="floating-element element-3">🌾</div>
            <div className="floating-element element-4">🥐</div>
            <div className="floating-element element-5">🌿</div>
            <div className="hero-circle"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow">↓</div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;