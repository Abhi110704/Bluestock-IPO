import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Bluestock IPO has revolutionized how I track and analyze IPOs. The platform is intuitive and provides all the information I need.",
      author: "Rahul Sharma",
      role: "Investment Analyst"
    },
    {
      id: 2,
      text: "As a retail investor, I find the IPO listings and analysis tools extremely helpful. It's made my investment decisions much easier.",
      author: "Priya Patel",
      role: "Retail Investor"
    },
    {
      id: 3,
      text: "The real-time updates and comprehensive IPO data make this platform a must-have for any serious investor.",
      author: "Amit Kumar",
      role: "Portfolio Manager"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h3>What Our Users Say</h3>
      </div>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-avatar">
              {testimonial.author.charAt(0)}
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection; 