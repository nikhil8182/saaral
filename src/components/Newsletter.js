import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setIsLoading(false);
      setEmail('');
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  return (
    <section className="newsletter">
      <div className="newsletter-bg">
        <div className="bg-pattern"></div>
      </div>
      
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Stay Fresh with Saaral</h2>
            <p>
              Get exclusive updates on new breads, seasonal specials, and baking tips delivered 
              straight to your inbox. Join our community of bread lovers!
            </p>
            <div className="newsletter-features">
              <div className="feature">
                <span className="feature-icon">🍞</span>
                <span>Weekly Recipes</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎁</span>
                <span>Special Offers</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📅</span>
                <span>Event Updates</span>
              </div>
            </div>
          </div>
          
          <div className="newsletter-form-wrapper">
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Subscribe to Our Newsletter</h3>
                <p>Join 1000+ bread enthusiasts</p>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={status === 'error' ? 'error' : ''}
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  className={`submit-btn ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loading-spinner">⟳</span>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <span className="btn-icon">→</span>
                    </>
                  )}
                </button>
              </div>
              
              {status === 'error' && (
                <div className="form-message error">
                  Please enter a valid email address
                </div>
              )}
              
              {status === 'success' && (
                <div className="form-message success">
                  <span className="success-icon">✓</span>
                  Welcome to the Saaral family! Check your email for a special welcome gift.
                </div>
              )}
              
              <div className="form-footer">
                <p>🔒 We respect your privacy. Unsubscribe anytime.</p>
              </div>
            </form>
            
            <div className="newsletter-benefits">
              <h4>Member Benefits</h4>
              <ul>
                <li>🌟 Early updates on new bakes</li>
                <li>📚 Exclusive baking guides</li>
                <li>💚 Special tasting invitations</li>
                <li>🎂 Birthday surprises</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;