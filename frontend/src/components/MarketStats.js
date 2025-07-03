import React from 'react';
import './MarketStats.css';

const MarketStats = () => {
  return (
    <div className="market-stats">
      <div className="stat-card"><i className="fas fa-chart-line"></i><h4>Active IPOs</h4><p>12</p></div>
      <div className="stat-card"><i className="fas fa-coins"></i><h4>Total Value</h4><p>₹2.5B</p></div>
      <div className="stat-card"><i className="fas fa-users"></i><h4>Investors</h4><p>50K+</p></div>
    </div>
  );
};
export default MarketStats; 
