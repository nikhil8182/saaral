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
            <h3>Baking with Nature's Bounty</h3>
            <p>
              At Saaral Bakes, we believe that the best bread comes from the purest ingredients. 
              Located in the lush, green landscape of Coimbatore, we draw inspiration from the 
              natural beauty around us.
            </p>
            <p>
              Our bakery combines time-honored baking traditions with locally sourced, organic 
              ingredients. From the early morning mist to the warm afternoon sun, every loaf we 
              create captures the essence of our beautiful Tamil Nadu surroundings.
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
              <p>🏞️ Beautiful bakery surrounded by Coimbatore's natural landscape</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;