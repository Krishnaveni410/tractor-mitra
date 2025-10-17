import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const isFarmer = user?.userType === 'farmer';
  const isOwner = user?.userType === 'owner';

  const services = [
    { id: 1, name: 'Ploughing', icon: '🚜', price: '₹800-1200/acre' },
    { id: 2, name: 'Rotavator', icon: '🌾', price: '₹1000-1500/acre' },
    { id: 3, name: 'Cultivation', icon: '🌱', price: '₹600-900/acre' },
    { id: 4, name: 'Harvesting', icon: '🌾', price: '₹2000-3000/acre' },
    { id: 5, name: 'Spraying', icon: '💧', price: '₹300-500/acre' },
    { id: 6, name: 'Seeding', icon: '🌰', price: '₹500-800/acre' }
  ];

  const nearbyTractors = [
    {
      id: 1,
      owner: 'Rajesh Kumar',
      tractor: 'Mahindra 575 DI',
      services: ['Ploughing', 'Rotavator'],
      rating: 4.8,
      distance: '2.5 km',
      price: '₹1000/acre',
      availability: 'Available Today'
    },
    {
      id: 2,
      owner: 'Suresh Patel',
      tractor: 'John Deere 5050D',
      services: ['Cultivation', 'Harvesting'],
      rating: 4.6,
      distance: '3.2 km',
      price: '₹1200/acre',
      availability: 'Available Tomorrow'
    },
    {
      id: 3,
      owner: 'Amit Singh',
      tractor: 'New Holland 3630',
      services: ['Ploughing', 'Seeding'],
      rating: 4.9,
      distance: '1.8 km',
      price: '₹900/acre',
      availability: 'Available Today'
    }
  ];

  const recentBookings = [
    {
      id: 1,
      service: 'Ploughing',
      tractor: 'Mahindra 575 DI',
      owner: 'Rajesh Kumar',
      date: '2024-01-15',
      status: 'Completed',
      amount: '₹2400'
    },
    {
      id: 2,
      service: 'Rotavator',
      tractor: 'John Deere 5050D',
      owner: 'Suresh Patel',
      date: '2024-01-20',
      status: 'In Progress',
      amount: '₹3000'
    }
  ];

  const renderFarmerDashboard = () => (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome back, {user?.name}!</h1>
          <p>Find the perfect tractor service for your farming needs</p>
        </div>
        <div className="quick-stats">
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-info">
              <div className="stat-number">3</div>
              <div className="stat-label">Active Bookings</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <div className="stat-number">₹5,400</div>
              <div className="stat-label">Total Spent</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-info">
              <div className="stat-number">4.8</div>
              <div className="stat-label">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="search-section">
        <div className="search-card">
          <h3>Find Tractor Services</h3>
          <div className="search-form">
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                placeholder="Enter your location"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Service Type</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="form-input"
              >
                <option value="">Select Service</option>
                {services.map(service => (
                  <option key={service.id} value={service.name}>{service.name}</option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary">Search Tractors</button>
          </div>
        </div>
      </div>

      <div className="services-section">
        <h3>Popular Services</h3>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h4>{service.name}</h4>
              <p className="service-price">{service.price}</p>
              <button className="btn btn-outline">Book Now</button>
            </div>
          ))}
        </div>
      </div>

      <div className="tractors-section">
        <h3>Nearby Tractors</h3>
        <div className="tractors-grid">
          {nearbyTractors.map(tractor => (
            <div key={tractor.id} className="tractor-card">
              <div className="tractor-header">
                <div className="tractor-info">
                  <h4>{tractor.tractor}</h4>
                  <p>Owner: {tractor.owner}</p>
                </div>
                <div className="tractor-rating">
                  <span className="rating">⭐ {tractor.rating}</span>
                  <span className="distance">{tractor.distance}</span>
                </div>
              </div>
              <div className="tractor-services">
                {tractor.services.map((service, index) => (
                  <span key={index} className="service-tag">{service}</span>
                ))}
              </div>
              <div className="tractor-footer">
                <div className="tractor-price">{tractor.price}</div>
                <div className="tractor-availability">{tractor.availability}</div>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOwnerDashboard = () => (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome back, {user?.name}!</h1>
          <p>Manage your tractors and grow your business</p>
        </div>
        <div className="quick-stats">
          <div className="stat-card">
            <div className="stat-icon">🚜</div>
            <div className="stat-info">
              <div className="stat-number">2</div>
              <div className="stat-label">Active Tractors</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-info">
              <div className="stat-number">₹15,600</div>
              <div className="stat-label">This Month</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-info">
              <div className="stat-number">4.7</div>
              <div className="stat-label">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="owner-actions">
        <div className="action-card">
          <div className="action-icon">➕</div>
          <h3>Add New Tractor</h3>
          <p>List your tractor to start earning</p>
          <button className="btn btn-primary">Add Tractor</button>
        </div>
        <div className="action-card">
          <div className="action-icon">📊</div>
          <h3>View Analytics</h3>
          <p>Track your earnings and performance</p>
          <button className="btn btn-secondary">View Reports</button>
        </div>
        <div className="action-card">
          <div className="action-icon">⚙️</div>
          <h3>Manage Services</h3>
          <p>Update your service offerings</p>
          <button className="btn btn-secondary">Manage</button>
        </div>
      </div>

      <div className="bookings-section">
        <h3>Recent Bookings</h3>
        <div className="bookings-list">
          {recentBookings.map(booking => (
            <div key={booking.id} className="booking-card">
              <div className="booking-info">
                <h4>{booking.service} - {booking.tractor}</h4>
                <p>Customer: {booking.owner}</p>
                <p>Date: {booking.date}</p>
              </div>
              <div className="booking-status">
                <span className={`status-badge ${booking.status.toLowerCase().replace(' ', '-')}`}>
                  {booking.status}
                </span>
                <div className="booking-amount">{booking.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🚜</span>
            <span className="logo-text">TractorMitra</span>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="nav-icon">📊</span>
            Overview
          </button>
          <button 
            className={`nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            <span className="nav-icon">📅</span>
            {isFarmer ? 'My Bookings' : 'Bookings'}
          </button>
          <button 
            className={`nav-item ${activeTab === 'tractors' ? 'active' : ''}`}
            onClick={() => setActiveTab('tractors')}
          >
            <span className="nav-icon">🚜</span>
            {isFarmer ? 'Find Tractors' : 'My Tractors'}
          </button>
          <button 
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <span className="nav-icon">👤</span>
            Profile
          </button>
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <span className="nav-icon">⚙️</span>
            Settings
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="user-details">
              <div className="user-name">{user?.name}</div>
              <div className="user-type">{user?.userType}</div>
            </div>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            <span className="nav-icon">🚪</span>
            Logout
          </button>
        </div>
      </div>

      <div className="dashboard-main">
        <div className="dashboard-header-bar">
          <div className="header-left">
            <h2>
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'bookings' && (isFarmer ? 'My Bookings' : 'Manage Bookings')}
              {activeTab === 'tractors' && (isFarmer ? 'Find Tractors' : 'My Tractors')}
              {activeTab === 'profile' && 'Profile Settings'}
              {activeTab === 'settings' && 'App Settings'}
            </h2>
          </div>
          <div className="header-right">
            <div className="language-selector">
              <select className="form-input">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="telugu">Telugu</option>
                <option value="marathi">Marathi</option>
              </select>
            </div>
            <div className="notifications">
              <button className="notification-btn">
                🔔
                <span className="notification-badge">3</span>
              </button>
            </div>
          </div>
        </div>

        <div className="dashboard-body">
          {activeTab === 'overview' && (
            isFarmer ? renderFarmerDashboard() : renderOwnerDashboard()
          )}
          {activeTab === 'bookings' && (
            <div className="bookings-page">
              <h3>Bookings Management</h3>
              <p>Manage your bookings and track service progress</p>
            </div>
          )}
          {activeTab === 'tractors' && (
            <div className="tractors-page">
              <h3>{isFarmer ? 'Available Tractors' : 'My Tractors'}</h3>
              <p>{isFarmer ? 'Find and book tractors in your area' : 'Manage your tractor listings'}</p>
            </div>
          )}
          {activeTab === 'profile' && (
            <div className="profile-page">
              <h3>Profile Settings</h3>
              <p>Update your personal information and preferences</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="settings-page">
              <h3>App Settings</h3>
              <p>Configure your app preferences and notifications</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
