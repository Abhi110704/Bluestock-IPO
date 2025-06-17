import React from 'react';
import './App.css';
import IPOList from './components/IPOList';

function App() {
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
        <IPOList />
      </main>
    </div>
  );
}

export default App; 