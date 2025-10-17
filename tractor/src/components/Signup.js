import React, { useState } from 'react';
import './Signup.css';

const Signup = ({ onSignup, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'farmer',
    location: '',
    language: 'english'
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const userData = {
        id: Date.now(),
        ...formData,
        createdAt: new Date().toISOString()
      };
      
      setIsLoading(false);
      onSignup(userData);
    }, 1500);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* <div className="signup-header">
          <div className="header-content">
            <h1>Join TractorMitra</h1>
            <p>Start your farming journey with us</p>
          </div>
          <button className="back-btn" onClick={onBack}>
            ← Back
          </button>
        </div> */}

        <div className="signup-content">
          <div className="signup-form-container">
            <div className="form-header">
              <h2>Create Account</h2>
            </div>
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit phone number"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="location">Location *</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className={`form-input ${errors.location ? 'error' : ''}`}
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter your city/village"
                  />
                  {errors.location && <span className="error-message">{errors.location}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="password">Password *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`form-input ${errors.password ? 'error' : ''}`}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a strong password"
                  />
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="confirmPassword">Confirm Password *</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="userType">I am a *</label>
                  <select
                    id="userType"
                    name="userType"
                    className="form-input"
                    value={formData.userType}
                    onChange={handleInputChange}
                  >
                    <option value="farmer">Farmer (Looking for tractor services)</option>
                    <option value="owner">Tractor Owner (Providing services)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="language">Preferred Language</label>
                  <select
                    id="language"
                    name="language"
                    className="form-input"
                    value={formData.language}
                    onChange={handleInputChange}
                  >
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="telugu">Telugu</option>
                    <option value="marathi">Marathi</option>
                    <option value="tamil">Tamil</option>
                    <option value="bengali">Bengali</option>
                  </select>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="spinner"></div>
                      Creating Account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="signup-benefits">
            <h3>Why Join TractorMitra?</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🌾</div>
                <h4>Easy Booking</h4>
                <p>Find and book tractor services in your area with just a few clicks</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💰</div>
                <h4>Fair Pricing</h4>
                <p>Transparent pricing with no hidden costs</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📱</div>
                <h4>Real-time Tracking</h4>
                <p>Track your service progress in real-time</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🛡️</div>
                <h4>Secure Payments</h4>
                <p>Safe and secure payment options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
