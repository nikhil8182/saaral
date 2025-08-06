import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Show success message (in a real app, this would send to a server)
    alert('Thank you for your message! We\'ll get back to you soon. 🌿');
    setFormData({ name: '', email: '', message: '' });
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  const contactItems = [
    {
      icon: '📞',
      title: 'Call Us',
      value: '+91 422 123 4567',
      clickable: true
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'hello@saaralbakes.com',
      clickable: false
    },
    {
      icon: '📱',
      title: 'WhatsApp Chat',
      value: '+91 98765 43210',
      clickable: true
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            {contactItems.map((item, index) => (
              <div 
                key={index} 
                className="contact-item"
                style={{ cursor: item.clickable ? 'pointer' : 'default' }}
                onClick={() => item.clickable && handlePhoneClick(item.value)}
              >
                <span className="contact-icon">{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form">
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;