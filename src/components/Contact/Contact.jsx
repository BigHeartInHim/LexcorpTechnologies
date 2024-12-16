import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        Have any questions or need assistance with your internet service? We're here to help!
        Reach out to us using the contact details below.
      </p>
      <div className="contact-details">
        {/* Email */}
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:kaokafabian1434@gmail.com" className="contact-link">
            kaokafabian1434@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href="tel:+254113626377" className="contact-link">
            +254 113 626 377
          </a>
        </div>

        {/* WhatsApp */}
        <div className="contact-item">
          <FaWhatsapp className="contact-icon whatsapp-icon" />
          <a
            href="https://wa.me/254113626377?text=Hi,%20I%20need%20help%20with%20my%20internet%20service!"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Address */}
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p className="contact-text">
            Nyeri, Kenya
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
