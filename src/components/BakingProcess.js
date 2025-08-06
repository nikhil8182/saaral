import React, { useEffect, useState } from 'react';

const BakingProcess = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const steps = document.querySelectorAll('.process-step');
    steps.forEach(step => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  const processes = [
    {
      id: 'step1',
      number: '01',
      title: 'Source Locally',
      icon: '🌾',
      description: 'We partner with local farmers in Tamil Nadu to source the finest organic grains and ingredients.',
      time: '6:00 AM',
      details: ['Organic grains', 'Local farms', 'Fresh daily']
    },
    {
      id: 'step2',
      number: '02',
      title: 'Mill Fresh',
      icon: '⚙️',
      description: 'Our grains are stone-milled daily to preserve nutrients and create the perfect flour texture.',
      time: '7:00 AM',
      details: ['Stone milled', 'Nutrient rich', 'Perfect texture']
    },
    {
      id: 'step3',
      number: '03',
      title: 'Natural Fermentation',
      icon: '🧪',
      description: 'Using traditional sourdough starters and natural fermentation for authentic flavor and digestibility.',
      time: '8:00 AM',
      details: ['24hr fermentation', 'Natural yeast', 'Better digestion']
    },
    {
      id: 'step4',
      number: '04',
      title: 'Hand Crafted',
      icon: '👨‍🍳',
      description: 'Each loaf is shaped by hand with care, ensuring the perfect crust and crumb structure.',
      time: '9:00 AM',
      details: ['Hand shaped', 'Artisan craft', 'Personal touch']
    },
    {
      id: 'step5',
      number: '05',
      title: 'Wood-Fired Baking',
      icon: '🔥',
      description: 'Baked in our traditional wood-fired oven for that perfect crust and authentic flavor.',
      time: '10:00 AM',
      details: ['Wood fired', 'Perfect crust', 'Traditional method']
    },
    {
      id: 'step6',
      number: '06',
      title: 'Fresh to You',
      icon: '🥖',
      description: 'Delivered fresh from our oven to your table, maintaining peak flavor and nutrition.',
      time: '11:00 AM',
      details: ['Same day', 'Peak freshness', 'Ready to enjoy']
    }
  ];

  return (
    <section className="baking-process">
      <div className="container">
        <div className="section-header">
          <h2>Our Daily Journey</h2>
          <p>From farm to your table - the Saaral Bakes way</p>
        </div>

        <div className="process-timeline">
          <div className="timeline-line"></div>
          
          {processes.map((process, index) => (
            <div 
              key={process.id}
              id={process.id}
              className={`process-step ${index % 2 === 0 ? 'left' : 'right'} ${isVisible[process.id] ? 'visible' : ''}`}
            >
              <div className="step-connector"></div>
              <div className="step-content">
                <div className="step-time">{process.time}</div>
                <div className="step-card">
                  <div className="step-header">
                    <span className="step-number">{process.number}</span>
                    <span className="step-icon">{process.icon}</span>
                  </div>
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                  <div className="step-details">
                    {process.details.map((detail, i) => (
                      <span key={i} className="detail-tag">{detail}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="process-summary">
          <div className="summary-card">
            <h3>Every Day, Fresh Start</h3>
            <p>
              Our bakers arrive before dawn to begin the daily ritual of creating the perfect bread. 
              This time-honored process ensures that every loaf meets our exacting standards for taste, 
              texture, and nutrition.
            </p>
            <div className="process-stats">
              <div className="process-stat">
                <span className="stat-icon">⏰</span>
                <span className="stat-value">5+ Hours</span>
                <span className="stat-label">Daily Process</span>
              </div>
              <div className="process-stat">
                <span className="stat-icon">🌡️</span>
                <span className="stat-value">24 Hours</span>
                <span className="stat-label">Fermentation</span>
              </div>
              <div className="process-stat">
                <span className="stat-icon">🔥</span>
                <span className="stat-value">450°C</span>
                <span className="stat-label">Oven Temperature</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BakingProcess;