import React from 'react';
import './Guarantee.css';

function Guarantee() {
  return (
    <section id="guarantee" className="guarantee">
      <div className="guarantee-row">
        {/* Card 1 */}
        <div className="guarantee-card card-1">
          <h2>100% Uptime Guarantee</h2>
          <p>We ensure that your internet connection is always available.</p>
        </div>

        {/* Card 2 */}
        <div className="guarantee-card card-2">
          <h2>No Data Caps</h2>
          <p>Enjoy unlimited data usage without any restrictions.</p>
        </div>

        {/* Card 3 */}
        <div className="guarantee-card card-3">
          <h2>24/7 Customer Support</h2>
          <p>Our dedicated team is here to assist you anytime.</p>
        </div>
      </div>
    </section>
  );
}

export default Guarantee;
