import React, { useState, useEffect, useRef } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const containerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'RS Puram, Coimbatore',
      rating: 5,
      text: 'The best sourdough bread in Coimbatore! The natural fermentation gives it such a unique flavor. My family loves their multigrain loaf too.',
      favorite: 'Artisan Sourdough',
      image: '👩'
    },
    {
      id: 2,
      name: 'Karthik Venkatesh',
      location: 'Saibaba Colony',
      rating: 5,
      text: 'Finally, a bakery that uses 100% organic ingredients! Their croissants are heavenly, and knowing they source locally makes it even better.',
      favorite: 'Butter Croissant',
      image: '👨'
    },
    {
      id: 3,
      name: 'Anjali Krishnan',
      location: 'Gandhipuram',
      rating: 5,
      text: 'Saaral Bakes has transformed our breakfast routine. The whole wheat baguettes are perfect, and the seasonal muffins are always a delightful surprise!',
      favorite: 'Seasonal Muffins',
      image: '👩'
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      location: 'Race Course',
      rating: 5,
      text: 'Their commitment to sustainability and traditional baking methods really shows in the quality. The multigrain loaf is packed with nutrition and taste!',
      favorite: 'Multigrain Loaf',
      image: '👨'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setIsSwiping(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Fresh reviews from fresh bread lovers</p>
        </div>

        <div className="testimonials-wrapper">
          <button className="testimonial-nav testimonial-prev" onClick={prevSlide}>
            <span>‹</span>
          </button>

          <div 
            className="testimonials-container"
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="testimonials-track" 
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: isSwiping ? 'none' : 'transform 0.5s ease'
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="customer-avatar">
                        <span>{testimonial.image}</span>
                      </div>
                      <div className="customer-info">
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.location}</p>
                      </div>
                      <div className="rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="star">⭐</span>
                        ))}
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <div className="quote-icon">"</div>
                      <p>{testimonial.text}</p>
                      <div className="favorite-badge">
                        <span className="badge-icon">❤️</span>
                        Loves: {testimonial.favorite}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="testimonial-nav testimonial-next" onClick={nextSlide}>
            <span>›</span>
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="review-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-text">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9/5</span>
            <span className="stat-text">Average Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-text">Recommend Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;