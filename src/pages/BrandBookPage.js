import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BrandBookPage = () => {
  const [copiedColor, setCopiedColor] = useState('');
  const [activeSection, setActiveSection] = useState('story');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Intersection Observer for scroll animations
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
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.brand-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const colors = [
    {
      name: 'Monsoon Green',
      hex: '#2D5F3F',
      rgb: 'rgb(45, 95, 63)',
      description: 'Primary Brand Color',
      usage: 'Deep green of rain-washed leaves. Use for primary text, logos, and important elements.',
      personality: 'Trustworthy, Natural, Strong',
      emotion: 'Stability & Growth'
    },
    {
      name: 'Mist Green',
      hex: '#7FB069',
      rgb: 'rgb(127, 176, 105)',
      description: 'Secondary Brand Color',
      usage: 'Fresh growth after rain. Use for accents, highlights, and interactive elements.',
      personality: 'Fresh, Growing, Vibrant',
      emotion: 'Energy & Vitality'
    },
    {
      name: 'Morning Dew',
      hex: '#E8F5E1',
      rgb: 'rgb(232, 245, 225)',
      description: 'Light Accent',
      usage: 'Light refreshing accent. Use for backgrounds and subtle highlights.',
      personality: 'Clean, Pure, Gentle',
      emotion: 'Peace & Clarity'
    },
    {
      name: 'Earth Brown',
      hex: '#8B6F47',
      rgb: 'rgb(139, 111, 71)',
      description: 'Grounding Accent',
      usage: 'Grounding accent color. Use sparingly for special emphasis.',
      personality: 'Warm, Earthy, Reliable',
      emotion: 'Comfort & Trust'
    }
  ];

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color.hex);
    setCopiedColor(color.hex);
    setTimeout(() => setCopiedColor(''), 2000);
  };

  const brandPrinciples = [
    {
      title: 'Natural & Authentic',
      description: 'Everything we create should feel organic and genuine, reflecting our commitment to natural ingredients.',
      icon: '🌱',
      color: '#7FB069'
    },
    {
      title: 'Warm & Welcoming',
      description: 'Our brand should feel like coming home to freshly baked bread and warm hospitality.',
      icon: '🏠',
      color: '#8B6F47'
    },
    {
      title: 'Artisanal & Crafted',
      description: 'Show the human touch and traditional methods behind every product we make.',
      icon: '👨‍🍳',
      color: '#2D5F3F'
    },
    {
      title: 'Local & Community',
      description: 'Celebrate our Coimbatore roots and connection to the local community.',
      icon: '🌾',
      color: '#7FB069'
    }
  ];

  const menuItems = [
    { id: 'story', title: 'Brand Story', icon: '📖' },
    { id: 'colors', title: 'Colors', icon: '🎨' },
    { id: 'typography', title: 'Typography', icon: '✏️' },
    { id: 'principles', title: 'Principles', icon: '⭐' },
    { id: 'logo', title: 'Logo', icon: '🌿' },
    { id: 'voice', title: 'Voice & Tone', icon: '🗣️' },
    { id: 'photography', title: 'Photography', icon: '📸' },
    { id: 'applications', title: 'Applications', icon: '📱' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="brand-book-page">
      {/* Hero Section */}
      <section className="brand-hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1">🌿</div>
            <div className="shape shape-2">🍞</div>
            <div className="shape shape-3">🌾</div>
            <div className="shape shape-4">☘️</div>
            <div className="shape shape-5">🥖</div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <Link to="/" className="back-link">
              ← Back to Saaral Bakes
            </Link>
            <h1 className="brand-title">
              <span className="title-line">Brand</span>
              <span className="title-line">Guidelines</span>
            </h1>
            <p className="hero-subtitle">
              The complete visual identity and brand standards for Saaral Bakes. 
              A comprehensive guide to maintaining our natural, authentic voice across all touchpoints.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">4</span>
                <span className="stat-label">Brand Colors</span>
              </div>
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Typography Families</span>
              </div>
              <div className="stat">
                <span className="stat-number">8</span>
                <span className="stat-label">Guidelines Sections</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <nav className="brand-nav">
        <div className="container">
          <div className="nav-grid">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-title">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Brand Story */}
      <section id="story" className={`brand-section ${isVisible.story ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Our Brand Story</h2>
            <div className="header-decoration">🌿</div>
          </div>
          <div className="story-grid">
            <div className="story-content">
              <div className="story-card">
                <h3>🌱 Nature's Bakery</h3>
                <p>
                  Saaral Bakes represents the perfect harmony between traditional baking artistry and 
                  nature's pure ingredients. Rooted in Coimbatore's rich agricultural heritage, our 
                  brand celebrates the connection between the earth, the baker, and the community.
                </p>
                <p>
                  Every element of our brand reflects our commitment to sustainability, quality, and 
                  the time-honored traditions that make each loaf a work of art.
                </p>
              </div>
            </div>
            <div className="values-grid">
              <div className="value-item">
                <span className="value-icon">🌱</span>
                <h4>Natural</h4>
                <p>Pure, organic, pesticide-free ingredients</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🏺</span>
                <h4>Traditional</h4>
                <p>Time-tested baking methods</p>
              </div>
              <div className="value-item">
                <span className="value-icon">💚</span>
                <h4>Sustainable</h4>
                <p>Eco-friendly practices</p>
              </div>
              <div className="value-item">
                <span className="value-icon">🤝</span>
                <h4>Community</h4>
                <p>Supporting local farmers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section id="colors" className={`brand-section ${isVisible.colors ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Color Palette</h2>
            <div className="header-decoration">🎨</div>
            <p className="section-subtitle">
              Our colors are inspired by the natural beauty of Coimbatore's landscape, 
              from monsoon greens to morning dew.
            </p>
          </div>
          
          <div className="color-showcase">
            {colors.map((color, index) => (
              <div 
                key={index} 
                className="color-mastercard"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div 
                  className="color-preview" 
                  style={{ backgroundColor: color.hex }}
                  onClick={() => copyToClipboard(color)}
                >
                  <div className="color-overlay">
                    <span className="click-hint">Click to copy</span>
                    {copiedColor === color.hex && (
                      <span className="copied-indicator">Copied! ✓</span>
                    )}
                  </div>
                </div>
                
                <div className="color-details">
                  <h3>{color.name}</h3>
                  <div className="color-codes">
                    <span className="hex-code">{color.hex}</span>
                    <span className="rgb-code">{color.rgb}</span>
                  </div>
                  
                  <div className="color-info-grid">
                    <div className="info-item">
                      <strong>Usage:</strong>
                      <p>{color.description}</p>
                    </div>
                    <div className="info-item">
                      <strong>Personality:</strong>
                      <p>{color.personality}</p>
                    </div>
                    <div className="info-item">
                      <strong>Emotion:</strong>
                      <p>{color.emotion}</p>
                    </div>
                  </div>
                  
                  <div className="usage-note">
                    {color.usage}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gradient-section">
            <h3>Brand Gradient</h3>
            <div className="gradient-showcase">
              <div className="gradient-display"></div>
              <div className="gradient-info">
                <h4>Monsoon to Mist</h4>
                <p>Use for hero sections, CTAs, and special emphasis</p>
                <code>linear-gradient(135deg, #2D5F3F 0%, #7FB069 100%)</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section id="typography" className={`brand-section ${isVisible.typography ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Typography</h2>
            <div className="header-decoration">✏️</div>
          </div>
          
          <div className="typography-showcase">
            <div className="font-card">
              <div className="font-display">
                <h3 style={{ fontFamily: 'Merriweather', fontSize: '2.5rem' }}>
                  Fresh from Nature's Heart
                </h3>
              </div>
              <div className="font-info">
                <h4>Merriweather</h4>
                <p><strong>Usage:</strong> Headlines & Headings</p>
                <p><strong>Personality:</strong> Traditional, Elegant, Readable</p>
                <div className="font-weights">
                  <span>Light 300</span>
                  <span>Regular 400</span>
                  <span>Bold 700</span>
                </div>
              </div>
            </div>

            <div className="font-card">
              <div className="font-display">
                <p style={{ fontFamily: 'Open Sans', fontSize: '1.2rem' }}>
                  Artisan baked goods crafted with love, natural ingredients, and traditional 
                  methods in the beautiful city of Coimbatore
                </p>
              </div>
              <div className="font-info">
                <h4>Open Sans</h4>
                <p><strong>Usage:</strong> Body Text & UI Elements</p>
                <p><strong>Personality:</strong> Modern, Clean, Friendly</p>
                <div className="font-weights">
                  <span>Light 300</span>
                  <span>Regular 400</span>
                  <span>Semibold 600</span>
                </div>
              </div>
            </div>
          </div>

          <div className="type-scale">
            <h3>Typography Scale</h3>
            <div className="scale-examples">
              <div className="scale-item">
                <h1>H1 Display (3rem)</h1>
                <span>Main headlines and hero text</span>
              </div>
              <div className="scale-item">
                <h2>H2 Heading (2.5rem)</h2>
                <span>Section headers</span>
              </div>
              <div className="scale-item">
                <h3>H3 Subheading (2rem)</h3>
                <span>Subsection titles</span>
              </div>
              <div className="scale-item">
                <h4>H4 Small Heading (1.5rem)</h4>
                <span>Card titles and labels</span>
              </div>
              <div className="scale-item">
                <p>Body Text (1rem)</p>
                <span>Primary content text</span>
              </div>
              <div className="scale-item">
                <small>Small Text (0.875rem)</small>
                <span>Captions and fine print</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Principles */}
      <section id="principles" className={`brand-section ${isVisible.principles ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Brand Principles</h2>
            <div className="header-decoration">⭐</div>
          </div>
          
          <div className="principles-showcase">
            {brandPrinciples.map((principle, index) => (
              <div 
                key={index} 
                className="principle-mastercard"
                style={{ 
                  '--accent-color': principle.color,
                  '--delay': `${index * 0.15}s`
                }}
              >
                <div className="principle-icon-container">
                  <span className="principle-icon">{principle.icon}</span>
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
                <div className="principle-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Guidelines */}
      <section id="logo" className={`brand-section ${isVisible.logo ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Logo Usage</h2>
            <div className="header-decoration">🌿</div>
          </div>
          
          <div className="logo-showcase">
            <div className="logo-variants">
              <div className="logo-variant light">
                <h2 className="brand-logo">🌿 Saaral Bakes</h2>
                <p>Primary Logo - Light Background</p>
              </div>
              <div className="logo-variant dark">
                <h2 className="brand-logo">🌿 Saaral Bakes</h2>
                <p>Primary Logo - Dark Background</p>
              </div>
            </div>

            <div className="logo-guidelines">
              <div className="guidelines-grid">
                <div className="guideline-section do">
                  <h3>✅ Do</h3>
                  <ul>
                    <li>Use the leaf emoji as our natural icon</li>
                    <li>Maintain clear space around the logo</li>
                    <li>Use approved color combinations</li>
                    <li>Keep proportions consistent</li>
                    <li>Ensure high contrast with background</li>
                  </ul>
                </div>
                <div className="guideline-section dont">
                  <h3>❌ Don't</h3>
                  <ul>
                    <li>Change or remove the leaf emoji</li>
                    <li>Use on busy background images</li>
                    <li>Stretch or distort the logo</li>
                    <li>Use colors outside our palette</li>
                    <li>Place on low contrast backgrounds</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice & Tone */}
      <section id="voice" className={`brand-section ${isVisible.voice ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Voice & Tone</h2>
            <div className="header-decoration">🗣️</div>
          </div>
          
          <div className="voice-tone-showcase">
            <div className="voice-characteristics">
              <div className="characteristic-card">
                <h3>Our Voice</h3>
                <p>How we always sound</p>
                <div className="characteristics-list">
                  <span className="characteristic">Warm & Welcoming</span>
                  <span className="characteristic">Knowledgeable</span>
                  <span className="characteristic">Passionate</span>
                  <span className="characteristic">Traditional</span>
                  <span className="characteristic">Environmentally Conscious</span>
                </div>
              </div>
              
              <div className="characteristic-card">
                <h3>Our Tone</h3>
                <p>How we adapt our voice</p>
                <div className="characteristics-list">
                  <span className="characteristic">Friendly & Approachable</span>
                  <span className="characteristic">Confident in Craft</span>
                  <span className="characteristic">Respectful of Traditions</span>
                  <span className="characteristic">Excited about Ingredients</span>
                  <span className="characteristic">Caring about Community</span>
                </div>
              </div>
            </div>

            <div className="writing-examples">
              <h3>Writing Examples</h3>
              <div className="examples-grid">
                <div className="example-card social">
                  <div className="example-header">
                    <span className="platform-icon">📱</span>
                    <h4>Social Media</h4>
                  </div>
                  <div className="example-content">
                    "Fresh sourdough just out of the oven! 🍞 Made with love and organic grains 
                    from our local Coimbatore farms. Come taste the difference nature makes! #SaaralBakes"
                  </div>
                </div>
                
                <div className="example-card product">
                  <div className="example-header">
                    <span className="platform-icon">🛍️</span>
                    <h4>Product Description</h4>
                  </div>
                  <div className="example-content">
                    "Our artisan sourdough combines ancient grains with traditional fermentation 
                    techniques. Each loaf tells the story of Coimbatore's rich soil and our baker's passion."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography */}
      <section id="photography" className={`brand-section ${isVisible.photography ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Photography Style</h2>
            <div className="header-decoration">📸</div>
          </div>
          
          <div className="photography-grid">
            <div className="photo-principle">
              <div className="principle-visual">🌅</div>
              <h3>Natural Lighting</h3>
              <p>Warm, natural light. Golden hour and soft morning light work best.</p>
            </div>
            <div className="photo-principle">
              <div className="principle-visual">🌿</div>
              <h3>Natural Props</h3>
              <p>Wooden boards, linen cloth, fresh herbs, wheat stalks.</p>
            </div>
            <div className="photo-principle">
              <div className="principle-visual">🏞️</div>
              <h3>Environment</h3>
              <p>Show connection to nature and local Coimbatore environment.</p>
            </div>
            <div className="photo-principle">
              <div className="principle-visual">👥</div>
              <h3>Human Touch</h3>
              <p>Hands crafting, people enjoying, the human element of baking.</p>
            </div>
          </div>

          <div className="mood-board">
            <h3>Visual Mood</h3>
            <div className="mood-tags">
              <span className="mood-tag">Warm</span>
              <span className="mood-tag">Authentic</span>
              <span className="mood-tag">Natural</span>
              <span className="mood-tag">Artisanal</span>
              <span className="mood-tag">Inviting</span>
              <span className="mood-tag">Fresh</span>
              <span className="mood-tag">Homey</span>
              <span className="mood-tag">Rustic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className={`brand-section ${isVisible.applications ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Brand Applications</h2>
            <div className="header-decoration">📱</div>
          </div>
          
          <div className="applications-showcase">
            <div className="application-card">
              <div className="app-icon">🛍️</div>
              <h3>Packaging</h3>
              <p>Brown paper bags with monsoon green logo. Natural twine ties. Minimal, eco-friendly design.</p>
              <div className="app-features">
                <span>Eco-friendly materials</span>
                <span>Minimal branding</span>
                <span>Natural textures</span>
              </div>
            </div>
            
            <div className="application-card">
              <div className="app-icon">📱</div>
              <h3>Digital</h3>
              <p>Clean interfaces with white space. Nature photography. Consistent color usage.</p>
              <div className="app-features">
                <span>Clean layouts</span>
                <span>Natural imagery</span>
                <span>Brand colors</span>
              </div>
            </div>
            
            <div className="application-card">
              <div className="app-icon">🏪</div>
              <h3>Storefront</h3>
              <p>Natural wood signage. Plants and greenery. Warm lighting. View of baking process.</p>
              <div className="app-features">
                <span>Wood elements</span>
                <span>Living plants</span>
                <span>Warm lighting</span>
              </div>
            </div>
            
            <div className="application-card">
              <div className="app-icon">📄</div>
              <h3>Print</h3>
              <p>Recycled paper. Earth-tone inks. Clean typography. Plenty of white space.</p>
              <div className="app-features">
                <span>Sustainable materials</span>
                <span>Clean typography</span>
                <span>White space</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="brand-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>🌿 Saaral Bakes Brand Guidelines</h3>
              <p>Version 1.0 • Last updated: {new Date().getFullYear()}</p>
            </div>
            <div className="footer-links">
              <Link to="/" className="footer-link">Back to Website</Link>
              <button className="footer-link" onClick={() => alert('Asset downloads coming soon!')}>Download Assets</button>
              <button className="footer-link" onClick={() => alert('Contact us at brand@saaralbakes.com')}>Contact Brand Team</button>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Saaral Bakes. All brand guidelines and assets are proprietary.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrandBookPage;