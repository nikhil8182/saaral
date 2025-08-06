import React, { useState } from 'react';

const BrandBook = () => {
  const [copiedColor, setCopiedColor] = useState('');

  const colors = [
    {
      name: 'Monsoon Green',
      hex: '#2D5F3F',
      description: 'Primary Brand Color',
      usage: 'Deep green of rain-washed leaves. Use for primary text, logos, and important elements.',
      personality: 'Trustworthy, Natural, Strong'
    },
    {
      name: 'Mist Green',
      hex: '#7FB069',
      description: 'Secondary Brand Color',
      usage: 'Fresh growth after rain. Use for accents, highlights, and interactive elements.',
      personality: 'Fresh, Growing, Vibrant'
    },
    {
      name: 'Morning Dew',
      hex: '#E8F5E1',
      description: 'Light Accent',
      usage: 'Light refreshing accent. Use for backgrounds and subtle highlights.',
      personality: 'Clean, Pure, Gentle'
    },
    {
      name: 'Earth Brown',
      hex: '#8B6F47',
      description: 'Grounding Accent',
      usage: 'Grounding accent color. Use sparingly for special emphasis.',
      personality: 'Warm, Earthy, Reliable'
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
      icon: '🌱'
    },
    {
      title: 'Warm & Welcoming',
      description: 'Our brand should feel like coming home to freshly baked bread and warm hospitality.',
      icon: '🏠'
    },
    {
      title: 'Artisanal & Crafted',
      description: 'Show the human touch and traditional methods behind every product we make.',
      icon: '👨‍🍳'
    },
    {
      title: 'Local & Community',
      description: 'Celebrate our Coimbatore roots and connection to the local community.',
      icon: '🌾'
    }
  ];

  const typography = [
    {
      name: 'Merriweather',
      usage: 'Headlines & Headings',
      style: 'serif',
      personality: 'Traditional, Elegant, Readable',
      example: 'Fresh from Nature\'s Heart'
    },
    {
      name: 'Open Sans',
      usage: 'Body Text & UI Elements',
      style: 'sans-serif',
      personality: 'Modern, Clean, Friendly',
      example: 'Artisan baked goods crafted with love and natural ingredients'
    }
  ];

  const voiceTone = {
    voice: [
      'Warm and welcoming',
      'Knowledgeable but not pretentious',
      'Passionate about quality',
      'Connected to tradition',
      'Environmentally conscious'
    ],
    tone: [
      'Friendly and approachable',
      'Confident in our craft',
      'Respectful of traditions',
      'Excited about fresh ingredients',
      'Caring about community'
    ]
  };

  return (
    <section id="brand-book" className="brand-book">
      <div className="container">
        <div className="section-header">
          <h2>Brand Guidelines</h2>
          <p>The essence of Saaral Bakes captured in design</p>
        </div>

        {/* Brand Story */}
        <div className="brand-section">
          <h3>Our Brand Story</h3>
          <div className="brand-story-grid">
            <div className="story-text">
              <h4>🌿 Nature's Bakery</h4>
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
            <div className="brand-values">
              <h4>Brand Values</h4>
              <ul>
                <li>🌱 <strong>Natural:</strong> Pure, organic, pesticide-free ingredients</li>
                <li>🏺 <strong>Traditional:</strong> Time-tested baking methods</li>
                <li>💚 <strong>Sustainable:</strong> Eco-friendly practices</li>
                <li>🤝 <strong>Community:</strong> Supporting local farmers</li>
                <li>❤️ <strong>Passionate:</strong> Love in every creation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="brand-section">
          <h3>Color Palette</h3>
          <p className="section-intro">
            Our colors are inspired by the natural beauty of Coimbatore's landscape, 
            from monsoon greens to morning dew.
          </p>
          <div className="color-palette">
            {colors.map((color, index) => (
              <div key={index} className="color-card">
                <div 
                  className="color-swatch" 
                  style={{ backgroundColor: color.hex }}
                  onClick={() => copyToClipboard(color)}
                  title="Click to copy hex code"
                >
                  {copiedColor === color.hex && (
                    <span className="copied-indicator">Copied!</span>
                  )}
                </div>
                <div className="color-info">
                  <h4>{color.name}</h4>
                  <p className="hex-code">{color.hex}</p>
                  <p className="color-usage">{color.description}</p>
                  <p className="color-personality">
                    <strong>Personality:</strong> {color.personality}
                  </p>
                  <p className="usage-guide">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="gradient-showcase">
            <h4>Brand Gradient</h4>
            <div className="gradient-demo">
              <div className="gradient-swatch"></div>
              <p>Use for hero sections, CTAs, and special emphasis. 
                 Monsoon to Mist: <code>linear-gradient(135deg, #2D5F3F 0%, #7FB069 100%)</code>
              </p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="brand-section">
          <h3>Typography</h3>
          <div className="typography-grid">
            {typography.map((font, index) => (
              <div key={index} className="typography-card">
                <div className="font-preview">
                  <h4 style={{ fontFamily: font.style === 'serif' ? 'Merriweather' : 'Open Sans' }}>
                    {font.example}
                  </h4>
                </div>
                <div className="font-details">
                  <h5>{font.name}</h5>
                  <p><strong>Usage:</strong> {font.usage}</p>
                  <p><strong>Personality:</strong> {font.personality}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="typography-hierarchy">
            <h4>Type Hierarchy</h4>
            <div className="hierarchy-examples">
              <h1>H1: Main Headlines (3rem - Merriweather)</h1>
              <h2>H2: Section Headers (2.5rem - Merriweather)</h2>
              <h3>H3: Subsections (2rem - Merriweather)</h3>
              <h4>H4: Small Headlines (1.5rem - Merriweather)</h4>
              <p>Body text: Regular content (1rem - Open Sans)</p>
              <small>Small text: Captions and fine print (0.875rem - Open Sans)</small>
            </div>
          </div>
        </div>

        {/* Brand Principles */}
        <div className="brand-section">
          <h3>Brand Principles</h3>
          <div className="principles-grid">
            {brandPrinciples.map((principle, index) => (
              <div key={index} className="principle-card">
                <span className="principle-icon">{principle.icon}</span>
                <h4>{principle.title}</h4>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Guidelines */}
        <div className="brand-section">
          <h3>Logo Usage</h3>
          <div className="logo-guidelines">
            <div className="logo-examples">
              <div className="logo-demo">
                <h2>🌿 Saaral Bakes</h2>
                <p>Primary Logo</p>
              </div>
              <div className="logo-demo dark">
                <h2 style={{ color: 'white' }}>🌿 Saaral Bakes</h2>
                <p>Logo on Dark Backgrounds</p>
              </div>
            </div>
            
            <div className="logo-rules">
              <div className="do-dont-grid">
                <div className="do-section">
                  <h4>✅ Do</h4>
                  <ul>
                    <li>Use the leaf emoji as our natural icon</li>
                    <li>Maintain clear space around the logo</li>
                    <li>Use approved color combinations</li>
                    <li>Keep proportions consistent</li>
                    <li>Use on high contrast backgrounds</li>
                  </ul>
                </div>
                <div className="dont-section">
                  <h4>❌ Don't</h4>
                  <ul>
                    <li>Change or remove the leaf emoji</li>
                    <li>Use low contrast color combinations</li>
                    <li>Stretch or distort the logo</li>
                    <li>Use busy background images behind logo</li>
                    <li>Use colors outside our palette</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Voice & Tone */}
        <div className="brand-section">
          <h3>Voice & Tone</h3>
          <div className="voice-tone-grid">
            <div className="voice-section">
              <h4>Our Voice</h4>
              <p>How we always sound</p>
              <ul>
                {voiceTone.voice.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="tone-section">
              <h4>Our Tone</h4>
              <p>How we adapt our voice</p>
              <ul>
                {voiceTone.tone.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="writing-examples">
            <h4>Writing Examples</h4>
            <div className="example-grid">
              <div className="example-card">
                <h5>Social Media Post</h5>
                <p className="example-text">
                  "Fresh sourdough just out of the oven! 🍞 Made with love and organic grains 
                  from our local Coimbatore farms. Come taste the difference nature makes! #SaaralBakes"
                </p>
              </div>
              <div className="example-card">
                <h5>Product Description</h5>
                <p className="example-text">
                  "Our artisan sourdough combines ancient grains with traditional fermentation 
                  techniques. Each loaf tells the story of Coimbatore's rich soil and our baker's passion."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Photography Style */}
        <div className="brand-section">
          <h3>Photography & Visual Style</h3>
          <div className="photography-guide">
            <div className="photo-style-grid">
              <div className="style-principle">
                <h4>🌅 Natural Lighting</h4>
                <p>Use warm, natural light whenever possible. Golden hour and soft morning light work best.</p>
              </div>
              <div className="style-principle">
                <h4>🌿 Natural Props</h4>
                <p>Include natural elements: wooden boards, linen cloth, fresh herbs, wheat stalks.</p>
              </div>
              <div className="style-principle">
                <h4>🏞️ Environment Context</h4>
                <p>Show connection to nature and local environment when possible.</p>
              </div>
              <div className="style-principle">
                <h4>👥 Human Touch</h4>
                <p>Include hands crafting, people enjoying, or the human element of baking.</p>
              </div>
            </div>
            
            <div className="photo-mood">
              <h4>Visual Mood</h4>
              <div className="mood-tags">
                <span className="mood-tag">Warm</span>
                <span className="mood-tag">Authentic</span>
                <span className="mood-tag">Natural</span>
                <span className="mood-tag">Artisanal</span>
                <span className="mood-tag">Inviting</span>
                <span className="mood-tag">Fresh</span>
                <span className="mood-tag">Homey</span>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="brand-section">
          <h3>Brand Applications</h3>
          <div className="applications-grid">
            <div className="application-example">
              <h4>🛍️ Packaging</h4>
              <p>Brown paper bags with monsoon green logo. Natural twine ties. Minimal, eco-friendly design.</p>
            </div>
            <div className="application-example">
              <h4>📱 Digital</h4>
              <p>Clean interfaces with plenty of white space. Nature photography. Consistent color usage.</p>
            </div>
            <div className="application-example">
              <h4>🏪 Storefront</h4>
              <p>Natural wood signage. Plants and greenery. Warm lighting. View of baking process.</p>
            </div>
            <div className="application-example">
              <h4>📄 Print Materials</h4>
              <p>Recycled paper. Earth-tone inks. Clean typography. Plenty of white space.</p>
            </div>
          </div>
        </div>

        {/* Downloads Section */}
        <div className="brand-section downloads-section">
          <h3>Brand Assets</h3>
          <p>Contact us for high-resolution logos, fonts, and brand assets.</p>
          <div className="download-grid">
            <div className="download-item">
              <h4>📁 Logo Package</h4>
              <p>SVG, PNG, EPS formats in various sizes</p>
            </div>
            <div className="download-item">
              <h4>🎨 Color Swatches</h4>
              <p>Adobe, Sketch, and Figma color libraries</p>
            </div>
            <div className="download-item">
              <h4>✏️ Typography</h4>
              <p>Font files and pairing guidelines</p>
            </div>
            <div className="download-item">
              <h4>📸 Photo Library</h4>
              <p>Brand-approved photography collection</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandBook;