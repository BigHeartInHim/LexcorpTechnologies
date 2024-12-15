import React from 'react';
import './Packages.css';

function Packages() {
  return (
    <section id="packages" className="packages">
      <h2>Our Packages <span style={{ fontWeight: '400', fontStyle: 'italic' }}> - Affordable, Fast, Reliable</span></h2>

      <div className="container">
        <h1 className="packages-title">Packages Style 3</h1>
        <p className="breadcrumb">UltraNet {'>'} Packages Style 3</p>
        <div className="packages-grid">
          {/* Package 1 */}
          <div className="package-card">
            <h3>Bronze Plus</h3>
            <p>
              20Mbps Download Speed<br />
              10Mbps Upload Speed
            </p>
            <div className="package-speed">
              <span>Speed</span>
              <h2>
                20.0 <small>Mbps</small>
              </h2>
            </div>
            <div className="best-speed">
              <p>Best Speed For:</p>
              <ul>
                <li>1 movie (2GB) would take... <strong>13.3 min</strong> to download</li>
                <li>50 photos (300MB) would take... <strong>2 min</strong> to download</li>
                <li>1 album (60MB) would take... <strong>24 sec</strong> to download</li>
              </ul>
            </div>
            <div className="price">
              <h2>$25.00</h2>
              <p>per month*</p>
              <p>12 Month Pricing</p>
            </div>
          </div>

          {/* Package 2 */}
          <div className="package-card">
            <h3>Silver Extra</h3>
            <p>
              50Mbps Download Speed<br />
              20Mbps Upload Speed
            </p>
            <div className="package-speed">
              <span>Speed</span>
              <h2>
                50.0 <small>Mbps</small>
              </h2>
            </div>
            <div className="best-speed">
              <p>Best Speed For:</p>
              <ul>
                <li>1 movie (2GB) would take... <strong>5.3 min</strong> to download</li>
                <li>50 photos (300MB) would take... <strong>48 sec</strong> to download</li>
                <li>1 album (60MB) would take... <strong>10 sec</strong> to download</li>
              </ul>
            </div>
            <div className="price">
              <h2>$40.00</h2>
              <p>per month*</p>
              <p>12 Month Pricing</p>
            </div>
          </div>

          {/* Package 3 */}
          <div className="package-card">
            <h3>Gold Max</h3>
            <p>
              100Mbps Download Speed<br />
              50Mbps Upload Speed
            </p>
            <div className="package-speed">
              <span>Speed</span>
              <h2>
                100.0 <small>Mbps</small>
              </h2>
            </div>
            <div className="best-speed">
              <p>Best Speed For:</p>
              <ul>
                <li>1 movie (2GB) would take... <strong>2.6 min</strong> to download</li>
                <li>50 photos (300MB) would take... <strong>24 sec</strong> to download</li>
                <li>1 album (60MB) would take... <strong>5 sec</strong> to download</li>
              </ul>
            </div>
            <div className="price">
              <h2>$60.00</h2>
              <p>per month*</p>
              <p>12 Month Pricing</p>
            </div>
          </div>

          {/* Package 4 */}
          <div className="package-card">
            <h3>Platinum Ultra</h3>
            <p>
              200Mbps Download Speed<br />
              100Mbps Upload Speed
            </p>
            <div className="package-speed">
              <span>Speed</span>
              <h2>
                200.0 <small>Mbps</small>
              </h2>
            </div>
            <div className="best-speed">
              <p>Best Speed For:</p>
              <ul>
                <li>1 movie (2GB) would take... <strong>1.3 min</strong> to download</li>
                <li>50 photos (300MB) would take... <strong>12 sec</strong> to download</li>
                <li>1 album (60MB) would take... <strong>2.5 sec</strong> to download</li>
              </ul>
            </div>
            <div className="price">
              <h2>$80.00</h2>
              <p>per month*</p>
              <p>12 Month Pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
