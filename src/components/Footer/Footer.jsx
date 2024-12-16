import React from 'react';
import './Footer.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>LitHome Fiber</h3>
          <p>
            Providing reliable, high-speed internet solutions for businesses, homes, and institutions.
            Connect with us for unparalleled service and performance.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#plans">Internet Plans</a></li>
            <li><a href="#support">Customer Support</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Removed Contact Information */}
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="line-break"></div>
        <p>© 2024 Lexcorp Intelligent Technologies. All Rights Reserved.</p>
        <p>High-speed, reliable internet for homes and businesses.</p>
      </div>
    </footer>
  );
}

export default Footer;
