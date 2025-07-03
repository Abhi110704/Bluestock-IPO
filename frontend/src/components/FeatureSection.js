import React from 'react';
import './FeatureSection.css';
const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="feature-grid">
        <div className="feature-item"><i className="fas fa-chart-bar"></i><h3>Real-time Analytics</h3><p>Track IPO performance with advanced analytics and real-time market data.</p></div>
        <div className="feature-item"><i className="fas fa-bell"></i><h3>Smart Alerts</h3><p>Get instant notifications about price changes and important updates.</p></div>
        <div className="feature-item"><i className="fas fa-file-alt"></i><h3>Detailed Reports</h3><p>Access comprehensive reports and analysis for informed decisions.</p></div>
        <div className="feature-item"><i className="fas fa-shield-alt"></i><h3>Secure Platform</h3><p>Your data is protected with enterprise-grade security measures.</p></div>
      </div>
    </div>
  );
};

export default FeatureSection; 
