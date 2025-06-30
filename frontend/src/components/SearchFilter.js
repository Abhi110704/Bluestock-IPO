import React, { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="search-filter">
      <form onSubmit={handleSubmit} className="search-container">
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
        </button>
        <div className="search-input-container expanded">
          <input 
            type="text" 
            name="q" 
            placeholder="Search companies..."
            value={query}
            onChange={handleInputChange}
          />
        </div>
        <div className="search-info">
          <i className="fas fa-info-circle"></i>
          <span>Search by company name, sector, or status</span>
        </div>
      </form>
    </div>
  );
};

export default SearchFilter; 
