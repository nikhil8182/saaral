import React from 'react';

const About = () => {
  const features = [
    {
      icon: '🌱',
      title: 'Organic Ingredients',
      description: 'Locally sourced, pesticide-free grains and natural ingredients'
    },
    {
      icon: '👨‍🍳',
      title: 'Traditional Methods',
      description: 'Time-tested baking techniques passed down through generations'
    },
    {
      icon: '💚',
      title: 'Sustainable Practices',
      description: 'Eco-friendly packaging and supporting local farmers'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>Our Story</h2>
          <p>Rooted in tradition, growing with nature</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Born in Coimbatore, Crafted with Soul</h3>
            <p>
              Saaral Bakes was born in Coimbatore with one rule: every tray leaves the oven 
              the same day it's sold. We marry South‑Indian nostalgia with modern craft—think 
              cardamom‑kissed honey cake beside a dark‑chocolate sourdough.
            </p>
            <p>
              Small batch, no shortcuts, plenty of soul. Our master bakers start before dawn, 
              kneading life into every loaf with traditional techniques and the finest ingredients 
              sourced from within Tamil Nadu. Every bite tells a story of heritage, purity, and care.
            </p>
            <div className="about-features">
              {features.map((feature, index) => (
                <div key={index} className="feature">
                  <span className="feature-icon">{feature.icon}</span>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <p>🏞️ From Coimbatore's heart to yours—every drop counts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;