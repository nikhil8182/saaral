import React from 'react';

const Location = () => {
  return (
    <section id="location" className="location">
      <div className="container">
        <div className="section-header">
          <h2>Visit Our Bakery</h2>
          <p>Find us in the heart of Coimbatore</p>
        </div>
        <div className="location-content">
          <div className="location-info">
            <div className="info-card">
              <h3>📍 Address</h3>
              <p>
                123 Cross Cut Road<br />
                Gandhipuram, Coimbatore<br />
                Tamil Nadu 641012
              </p>
            </div>
            <div className="info-card">
              <h3>🕒 Hours</h3>
              <p>
                <strong>Monday - Saturday:</strong> 6:00 AM - 8:00 PM<br />
                <strong>Sunday:</strong> 7:00 AM - 7:00 PM<br />
                <em>Fresh bread available from 7:00 AM daily</em>
              </p>
            </div>
            <div className="info-card">
              <h3>🌱 Why Coimbatore?</h3>
              <p>
                Known as the "Manchester of South India," Coimbatore's rich agricultural 
                heritage and clean environment provide the perfect setting for our natural 
                baking philosophy.
              </p>
            </div>
          </div>
          <div className="map-placeholder">
            <p>🗺️ Interactive map showing our location in Coimbatore would be here</p>
            <div className="landmark-info">
              <h4>Nearby Landmarks:</h4>
              <ul>
                <li>• Brookefields Mall (2 min walk)</li>
                <li>• Gandhipuram Bus Stand (5 min walk)</li>
                <li>• Race Course (10 min walk)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;