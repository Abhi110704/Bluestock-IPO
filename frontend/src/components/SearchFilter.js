import React, { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      // Focus input after expansion
      setTimeout(() => {
        const input = document.querySelector('.search-filter input');
        if (input) input.focus();
      }, 0);
    }
  };

  return (
    <div className="search-filter">
      <form onSubmit={handleSubmit} className="search-container">
        <button type="button" className="search-button" onClick={toggleSearch}>
          <i className="fas fa-search"></i>
        </button>
        <div className={`search-input-container ${isExpanded ? 'expanded' : ''}`}>
          <input 
            type="text" 
            name="q" 
            placeholder="Search companies..."
            value={query}
            onChange={handleInputChange}
          />
        </div>
        {!isExpanded && (
          <div className="search-info">
            <i className="fas fa-info-circle"></i>
            <span>Search by company name, sector, or status</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchFilter; 