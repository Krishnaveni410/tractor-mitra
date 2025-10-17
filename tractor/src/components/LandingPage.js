import React, { useEffect, useRef } from 'react';
import './LandingPage.css';

const LandingPage = ({ onNavigate, onUserTypeSelect }) => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    if (heroRef.current) observer.observe(heroRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    // Observe user cards for staggered animation
    const userCards = document.querySelectorAll('.user-card');
    userCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.2}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleUserTypeSelect = (userType) => {
    onUserTypeSelect(userType);
    onNavigate('signup');
  };

  return (
    <div className="landing-page">
      <div className="landing-hero" ref={heroRef}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Welcome to <span className="text-primary">TractorMitra</span>
              </h1>
              <p className="hero-subtitle">
                Your trusted farming partner - Connect with tractor owners and farmers for efficient agricultural services
              </p>
              <div className="hero-features">
                <div className="feature-item">
                  <div className="feature-icon">🚜</div>
                  <span>Find Tractors</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💰</div>
                  <span>Fair Pricing</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🌾</div>
                  <span>Farm Services</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📱</div>
                  <span>Easy Booking</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="tractor-illustration">
                <div className="tractor-icon">🚜</div>
                <div className="field-lines">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-content" ref={contentRef}>
        <div className="container">
          <div className="user-selection">
            <h2 className="section-title">Choose Your Role</h2>
            <p className="section-subtitle">Select how you want to use TractorMitra</p>
            
            <div className="user-type-cards">
              <div className="user-card farmer-card" onClick={() => handleUserTypeSelect('farmer')}>
                <div className="card-icon">🌾</div>
                <h3>I'm a Farmer</h3>
                <p>Looking for tractor services to help with my farming needs</p>
                <ul className="benefits-list">
                  <li>Find nearby tractors</li>
                  <li>Book services easily</li>
                  <li>Track service progress</li>
                  <li>Fair pricing</li>
                </ul>
                <button className="btn btn-primary">Get Started as Farmer</button>
              </div>

              <div className="user-card owner-card" onClick={() => handleUserTypeSelect('owner')}>
                <div className="card-icon">🚜</div>
                <h3>I'm a Tractor Owner</h3>
                <p>Want to provide tractor services and earn from my equipment</p>
                <ul className="benefits-list">
                  <li>List your tractors</li>
                  <li>Set your prices</li>
                  <li>Get bookings</li>
                  <li>Earn money</li>
                </ul>
                <button className="btn btn-primary">Get Started as Owner</button>
              </div>
            </div>

            <div className="login-section">
              <p className="login-text">Already have an account?</p>
              <button 
                className="btn btn-outline"
                onClick={() => onNavigate('login')}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-footer" ref={footerRef}>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Ploughing</li>
                <li>Rotavator</li>
                <li>Cultivation</li>
                <li>Harvesting</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Safety Guidelines</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Languages</h4>
              <ul>
                <li>English</li>
                <li>Hindi</li>
                <li>Telugu</li>
                <li>Marathi</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TractorMitra. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
