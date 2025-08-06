import React, { useEffect, useState } from 'react';

const WhySaaral = () => {
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('.why-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const whyReasons = [
    {
      id: 'freshness',
      icon: '🌅',
      title: 'Same‑Day Freshness',
      description: 'Baked at dawn, sold by dusk.',
      details: 'Every tray leaves the oven the same day it\'s sold. No day-old bread, no compromises on quality.',
      color: 'var(--mist-green)'
    },
    {
      id: 'palette',
      icon: '🥥',
      title: 'South‑Indian Palette',
      description: 'Cardamom, jaggery, tender coconut—real flavours you grew up with.',
      details: 'We marry South-Indian nostalgia with modern craft—think cardamom-kissed honey cake beside dark-chocolate sourdough.',
      color: 'var(--monsoon-green)'
    },
    {
      id: 'clean',
      icon: '🌿',
      title: 'Clean Label',
      description: 'No premixes, no artificial colours. Real butter, non‑bromated flour.',
      details: 'Small batch, no shortcuts, plenty of soul. Every ingredient tells a story of purity and care.',
      color: 'var(--earth-brown)'
    },
    {
      id: 'community',
      icon: '🤝',
      title: 'Community First',
      description: 'Ingredients sourced within Tamil Nadu; we upskill local women bakers.',
      details: 'Supporting local farmers and empowering women in our community, one loaf at a time.',
      color: 'var(--warm-amber)'
    }
  ];

  return (
    <section className="why-saaral">
      <div className="container">
        <div className="section-header">
          <h2>Why Saaral?</h2>
          <p>Four pillars that make us different</p>
        </div>

        <div className="why-grid">
          {whyReasons.map((reason, index) => (
            <div 
              key={reason.id}
              id={reason.id}
              className={`why-item ${visibleItems[reason.id] ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="why-card">
                <div className="why-icon" style={{ background: reason.color }}>
                  <span>{reason.icon}</span>
                </div>
                <div className="why-content">
                  <h3>{reason.title}</h3>
                  <p className="why-description">{reason.description}</p>
                  <p className="why-details">{reason.details}</p>
                </div>
                <div className="why-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="why-summary">
          <div className="summary-content">
            <h3>Born in Coimbatore</h3>
            <p>
              Saaral Bakes was born in Coimbatore with one rule: every tray leaves the oven 
              the same day it's sold. We marry South‑Indian nostalgia with modern craft—think 
              cardamom‑kissed honey cake beside a dark‑chocolate sourdough. Small batch, no shortcuts, plenty of soul.
            </p>
            <div className="why-highlights">
              <div className="highlight">
                <span className="highlight-icon">🏆</span>
                <span>Award-winning recipes</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🌱</span>
                <span>100% Natural ingredients</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon">❤️</span>
                <span>Made with love daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySaaral;