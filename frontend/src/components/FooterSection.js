import React from 'react';
import './FooterSection.css';
const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="copyright">
          © {currentYear} Bluestock IPO. All rights reserved. Developed and Owned by Abhiyanshu Anand.
        </div>
        <div className="social-links">
          <a href="https://github.com/Abhi110704" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/abhiyanshu-anand-617963281/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection; 
