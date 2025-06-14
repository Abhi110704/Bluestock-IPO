import React, { useEffect, useState } from 'react';
import './App.css';
import Chart from 'chart.js/auto';

function App() {
  const [ipos, setIpos] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredIpos, setFilteredIpos] = useState([]);
  const [chart, setChart] = useState(null);
  const [chartData, setChartData] = useState({ labels: [], values: [] });

  useEffect(() => {
    // Fetch IPOs from your Django API endpoint
    fetch('/api/ipos/')
      .then(res => res.json())
      .then(data => {
        setIpos(data);
        setFilteredIpos(data);
      });
  }, []);

  useEffect(() => {
    setFilteredIpos(
      ipos.filter(ipo =>
        ipo.company_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, ipos]);

  useEffect(() => {
    // Fetch chart data from Django API
    fetch('/chart-data/')
      .then(res => res.json())
      .then(data => setChartData(data));
  }, []);

  useEffect(() => {
    if (!chart) {
      const ctx = document.getElementById('ipoChart').getContext('2d');
      const newChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: chartData.labels,
          datasets: [{
            label: 'Number of IPOs',
            data: chartData.values,
            backgroundColor: 'rgba(70, 130, 180, 0.7)'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: true, text: 'Monthly IPO Count' }
          }
        }
      });
      setChart(newChart);
    } else {
      chart.data.labels = chartData.labels;
      chart.data.datasets[0].data = chartData.values;
      chart.update();
    }
  }, [chartData]);

  return (
    <div style={{ background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', minHeight: '100vh', padding: '1rem' }}>
      <header style={{ textAlign: 'center', padding: '1.5rem 1rem', backgroundColor: '#e0eaf2', color: '#0d1b2a', borderRadius: '10px', marginBottom: '1.5rem' }}>
        <h1 className="animate__animated animate__fadeInDown">📊 Bluestock IPO Listings</h1>
        <p className="description">Track and compare initial public offerings (IPOs) from emerging companies. Stay informed about listing prices, market trends, and statuses — all in one place.</p>
      </header>

      <div className="search-filter" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '0.6rem', borderRadius: '8px', border: 'none', width: '90%', maxWidth: '400px', backgroundColor: '#2a4f75', color: '#fff' }}
        />
      </div>

      <div className="ipo-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: 'auto' }}>
        {filteredIpos.length > 0 ? filteredIpos.map(ipo => (
          <div className="ipo-card" key={ipo.id} style={{ background: 'rgba(255,255,255,0.98)', color: '#111', boxShadow: '0 8px 30px rgba(70,130,180,0.10)', border: '1px solid #e0eaf2', padding: '1.5rem', borderRadius: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%', position: 'relative', overflow: 'hidden' }}>
            {ipo.logo && <img src={ipo.logo} alt={ipo.company_name} style={{ maxWidth: '180px', marginBottom: '1rem' }} />}
            <h3>{ipo.company_name}</h3>
            <p><strong>Listing Price:</strong> ₹{ipo.listing_price || 'N/A'}</p>
            <p><strong>Current Price:</strong> ₹{ipo.current_market_price || 'N/A'}</p>
            <p><strong>Status:</strong> <span className="ipo-status-badge">{ipo.status}</span></p>
          </div>
        )) : <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>No IPOs found.</p>}
      </div>

      {/* Hero Section */}
      <div style={{ width: '100%', maxWidth: '1100px', margin: '2rem auto 2.5rem auto', padding: '2.5rem 1rem 2rem 1rem', background: 'linear-gradient(90deg,#4682b4 0%,#6dd5ed 100%)', borderRadius: '24px', boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: '2.3rem', marginBottom: '0.5rem' }}>Welcome to Bluestock IPO Portal 🚀</h2>
        <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto 1.2rem auto' }}>Discover, track, and compare the latest IPOs from top emerging companies. Stay ahead with real-time updates and exclusive insights!</p>
        <a href="#" style={{ display: 'inline-block', padding: '0.7em 2em', background: '#fff', color: '#4682b4', fontWeight: 600, borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(70,130,180,0.10)', transition: 'background 0.2s' }}>Get Notified</a>
      </div>

      {/* Section Divider (SVG Wave) */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, marginBottom: '2rem' }}>
        <svg viewBox="0 0 500 40" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '40px' }}><path d="M0,20 C150,60 350,0 500,20 L500,00 L0,0 Z" style={{ stroke: 'none', fill: '#4682b4', opacity: 0.12 }}></path></svg>
      </div>

      {/* Floating Action Button */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ position: 'fixed', bottom: '32px', right: '32px', background: 'linear-gradient(90deg,#4682b4 60%,#6dd5ed 100%)', color: '#fff', border: 'none', borderRadius: '50%', width: '56px', height: '56px', fontSize: '2rem', boxShadow: '0 4px 16px rgba(70,130,180,0.18)', cursor: 'pointer', zIndex: 1000, transition: 'background 0.3s,transform 0.2s' }}>↑</button>

      {/* Testimonials Section */}
      <div style={{ maxWidth: '900px', margin: '3rem auto 2rem auto', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem', color: '#4682b4' }}>What Our Users Say</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          <div style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 2px 8px rgba(70,130,180,0.10)', padding: '1.2rem 1.5rem', maxWidth: '300px', minWidth: '220px' }}>
            <p style={{ fontStyle: 'italic' }}>&quot;Bluestock made IPO tracking so easy and fun! Highly recommended.&quot;</p>
            <div style={{ marginTop: '0.7rem', fontWeight: 600, color: '#4682b4' }}>— Priya S.</div>
          </div>
          <div style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 2px 8px rgba(70,130,180,0.10)', padding: '1.2rem 1.5rem', maxWidth: '300px', minWidth: '220px' }}>
            <p style={{ fontStyle: 'italic' }}>&quot;Best platform for IPO insights. The design is beautiful!&quot;</p>
            <div style={{ marginTop: '0.7rem', fontWeight: 600, color: '#4682b4' }}>— Rahul M.</div>
          </div>
          <div style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 2px 8px rgba(70,130,180,0.10)', padding: '1.2rem 1.5rem', maxWidth: '300px', minWidth: '220px' }}>
            <p style={{ fontStyle: 'italic' }}>&quot;I love the real-time updates and easy navigation.&quot;</p>
            <div style={{ marginTop: '0.7rem', fontWeight: 600, color: '#4682b4' }}>— Sneha T.</div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer style={{ width: '100%', backgroundColor: '#e0eaf2', color: '#0d1b2a', textAlign: 'center', padding: '1.5rem 1rem', borderRadius: '10px 10px 0 0' }}>
        <p style={{ margin: 0 }}>&copy; 2025 Bluestock Fintech. All rights reserved.</p>
      </footer>

      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <h3 style={{ textAlign: 'center', color: '#4682b4' }}>IPO Trends</h3>
        <canvas id="ipoChart" width="600" height="300"></canvas>
      </div>
    </div>
  );
}

export default App;
