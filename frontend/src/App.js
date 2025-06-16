import React, { useState, useEffect } from 'react';
import './App.css';
import IPOList from './components/IPOList';
import MarketStats from './components/MarketStats';
import WelcomeBanner from './components/WelcomeBanner';
import SearchFilter from './components/SearchFilter';
import FeatureSection from './components/FeatureSection';
import Pagination from './components/Pagination';
import IPOTrendsChart from './components/IPOTrendsChart';
import TestimonialsSection from './components/TestimonialsSection';
import FooterSection from './components/FooterSection';

function App() {
  const [ipos, setIpos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageObj, setPageObj] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchIPOs(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const fetchIPOs = async (page = 1, query = '') => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching IPOs...');
      const response = await fetch(`/api/ipo/?page=${page}&q=${query}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch IPOs: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Received data:', data);
      
      // Handle both array and paginated responses
      const fetchedIpos = Array.isArray(data) ? data : (data.results || []);
      const totalCount = data.count || fetchedIpos.length;

      setIpos(fetchedIpos);
      setPageObj({
        is_paginated: !!data.next || !!data.previous,
        has_next: !!data.next,
        has_previous: !!data.previous,
        next_page_number: data.next ? new URL(data.next).searchParams.get('page') : null,
        previous_page_number: data.previous ? new URL(data.previous).searchParams.get('page') : null,
        number: page,
        paginator: { num_pages: fetchedIpos.length > 0 ? Math.ceil(totalCount / fetchedIpos.length) : 1 }
      });
      setLoading(false);
    } catch (err) {
      console.error('Error fetching IPOs:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img 
          src="https://github.com/Abhi110704/Bluestock-IPO/blob/main/Sample%20Project%20Files/logo.png?raw=true" 
          alt="Bluestock Logo" 
          className="App-logo"
        />
        <h1>IPO (Initial Public Offering) Listings</h1>
        <p className="description">
          Track and compare Initial Public Offerings (IPOs) from emerging and established companies with ease.
        </p>
      </header>
      <main>
        <WelcomeBanner />
        <div className="section-divider"></div>
        <MarketStats />
        <div className="section-divider"></div>
        <SearchFilter onSearch={handleSearch} />
        <div className="section-divider"></div>
        <IPOList ipos={ipos} loading={loading} error={error} />
        {pageObj && pageObj.is_paginated && (
          <Pagination 
            pageObj={pageObj} 
            requestQuery={searchQuery} 
            onPageChange={handlePageChange}
          />
        )}
        <div className="section-divider"></div>
        <IPOTrendsChart />
        <div className="section-divider"></div>
        <FeatureSection />
        <div className="section-divider"></div>
        <TestimonialsSection />
        <div className="section-divider"></div>
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
