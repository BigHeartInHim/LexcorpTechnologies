import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h1 className="services-title">Our Services <span style={{ fontWeight: '400', fontStyle: 'italic' }}> - Simple, Fast, Effective</span></h1> <br/>
        <div className="services-grid">
          <div className="service-card">
            <h3>Residential Internet</h3>
            <p>
              Enjoy high-speed internet access with our residential plans tailored to meet your needs. Experience seamless streaming, gaming, and browsing.
            </p>
            <ul>
              <li>Up to 1 Gbps download speeds</li>
              <li>Unlimited data usage</li>
              <li>24/7 customer support</li>
            </ul>
            <button className="learn-more">Learn More →</button>
          </div>

          <div className="service-card">
            <h3>Business Internet</h3>
            <p>
              Our business internet solutions provide reliable connectivity to keep your operations running smoothly. Choose from various plans to suit your needs.
            </p>
            <ul>
              <li>Dedicated bandwidth options</li>
              <li>Static IP addresses available</li>
              <li>Priority customer support</li>
            </ul>
            <button className="learn-more">Learn More →</button>
          </div>
          <div className="service-card">
            <h3>Custom Solutions</h3>
            <p>
              Tailored internet solutions for unique business needs. We work with you to create a custom plan that fits your requirements.
            </p>
            <ul>
              <li>Flexible bandwidth options</li>
              <li>Scalable solutions for growth</li>
              <li>Expert consultation services</li>
            </ul>
            <button className="learn-more">Learn More →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
