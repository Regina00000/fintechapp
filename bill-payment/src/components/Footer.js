import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>SUPPORT</h4>
        <a href="#">FAQs</a>
      </div>
      <div className="footer-section">
        <h4>COMPANY</h4>
        <a href="#">Terms of use</a>
        <a href="#">Privacy Policy</a>
        <a href="#">About Us</a>
      </div>
      <div className="footer-section">
        <h4>CONTACT</h4>
        <p>Contact us</p>
        <p>Address: Simbock, Yaoundé</p>
        <p>Hours: 24/7</p>
      </div>
    </footer>
  );
};

export default Footer;