import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import './IPOTrendsChart.css';

const IPOTrendsChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy existing chart instance
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'Number of IPOs',
          data: [],
          backgroundColor: 'rgba(63,81,181,0.7)',
          borderColor: 'rgba(63,81,181,1)',
          borderWidth: 1,
          borderRadius: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Monthly IPO Count',
            font: {
              size: 16,
              weight: 'bold',
            },
            padding: {
              top: 10,
              bottom: 20,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0,0,0,0.1)',
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
    });

    const updateChart = async () => {
      try {
        const response = await fetch('/api/chart-data/');
        if (!response.ok) {
          throw new Error('Failed to fetch chart data');
        }
        const data = await response.json();
        chartInstance.current.data.labels = data.labels;
        chartInstance.current.data.datasets[0].data = data.values;
        chartInstance.current.update();
      } catch (error) {
        console.error('Error updating chart:', error);
      }
    };

    updateChart(); // Initial fetch
    const interval = setInterval(updateChart, 10000); // Fetch every 10 seconds

    return () => {
      clearInterval(interval);
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-section">
      <h3>IPO Market Trends</h3>
      <div className="chart-container">
        <canvas ref={chartRef} id="ipoChart"></canvas>
      </div>
    </div>
  );
};

export default IPOTrendsChart; 