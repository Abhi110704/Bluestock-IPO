import React from 'react';
import './IPOList.css';

const IPOList = ({ ipos, loading, error }) => {
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  if (!ipos || ipos.length === 0) {
    return (
      <div className="no-ipos">
        <p>No IPOs found. Please check back later for new listings.</p>
      </div>
    );
  }
  return (
    <div className="ipo-container">
      {ipos.map((ipo) => (
        <div key={ipo.id} className="ipo-card">
          <img 
            src={ipo.logo || 'https://source.unsplash.com/random/300x200/?stock,finance'} 
            alt={ipo.company_name} 
          />
          <h3>{ipo.company_name}</h3>
          <div className="ipo-details">
            <p><strong>Listing Price:</strong> ₹{ipo.listing_price || 'N/A'}</p>
            <p><strong>Current Price:</strong> ₹{ipo.current_market_price || 'N/A'}</p>
            <p><strong>Status:</strong> <span className="ipo-status-badge">{ipo.status || 'Upcoming'}</span></p>
            <p><strong>Sector:</strong> {ipo.sector || 'Technology'}</p>
            <p><strong>Issue Size:</strong> ₹{ipo.issue_size || 'N/A'}</p>
            <p><strong>Open Date:</strong> {ipo.open_date || 'TBA'}</p>
            <p><strong>Close Date:</strong> {ipo.close_date || 'TBA'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IPOList; 
