import React, { useState, useEffect } from 'react';
import './IPOList.css';

const IPOList = () => {
  const [ipos, setIpos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchIPOs();
  }, []);

  const fetchIPOs = async () => {
    try {
      const response = await fetch('/api/ipo/'); // Corrected API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch IPOs');
      }
      const data = await response.json();
      setIpos(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

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
            <p><strong>Status:</strong> <span className="ipo-status-badge">{ipo.status}</span></p>
            <p><strong>Sector:</strong> {ipo.sector || 'Technology'}</p>
            <p><strong>Issue Size:</strong> ₹{ipo.issue_size || 'N/A'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IPOList; 