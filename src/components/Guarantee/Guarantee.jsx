import React from 'react';
import './Guarantee.css';

function Guarantee() {
  return (
    <section id="guarantee" className="guarantee">
      <h2>Our Guarantee</h2>
      <div className="guarantee-cards">
        <div className="card">
          <h3>100% Uptime Guarantee</h3>
          <p>We ensure that your internet connection is always available.</p>
        </div>
        <div className="card">
          <h3>No Data Caps</h3>
          <p>Enjoy unlimited data usage without any restrictions.</p>
        </div>
        <div className="card">
          <h3>24/7 Customer Support</h3>
          <p>Our dedicated team is here to assist you anytime.</p>
        </div>
        <div className="card">
          <h3>Speed and Performance Guarantee</h3>
          <p>Experience the speeds we promise, or your money back.</p>
        </div>
        <div className="card">
          <h3>Money-Back Guarantee</h3>
          <p>If you're not satisfied with our service, we offer a full refund within the first 30 days.</p>
        </div>
      </div>
    </section>
  );
}

export default Guarantee;
