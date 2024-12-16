import React from 'react';
import './Packages.css';

function Packages() {
  return (
    <section id="packages" className="packages">
      <h2>Our Packages <span style={{ fontWeight: '400', fontStyle: 'italic' }}> - Affordable, Fast, Reliable</span></h2>

      <div className="container">
        <div className="packages-grid">
          {/* Package 1 */}
          <div className="package-card">
            <h3>Bronze</h3>
            <p>
              11Mbps Download Speed<br />
              12Mbps Upload Speed
            </p>
            <div className="package-speed">
              <span>Speed</span>
              <h2>
                12 <small>Mbps</small>
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
              <h2>Ksh.1500</h2>
            </div>
          </div>

          {/* Package 2 */}
          <div className="package-card">
            <h3>Silver</h3>
            <p>
              15Mbps Download Speed<br />
              21Mbps Upload Speed
            </p>
            <div className="package-speed">
              <span>Speed</span>
              <h2>
                18 <small>Mbps</small>
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
              <h2>Ksh.2000</h2>
            </div>
          </div>

          {/* Package 3 */}
          <div className="package-card">
            <h3>Gold</h3>
            <p>
              35bps Download Speed<br />
              40Mbps Upload Speed
            </p>
            <div className="package-speed">
              <span>Speed</span>
              <h2>
                35.0 <small>Mbps</small>
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
              <h2>Ksh.3500</h2>
            </div>
          </div>

          {/* Package 4 */}
          <div className="package-card">
            <h3>Platinum Ultra</h3>
            <p>
              50Mbps Download Speed<br />
              55Mbps Upload Speed
            </p>
            <div className="package-speed">
              <span>Speed</span>
              <h2>
                45.0 <small>Mbps</small>
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
              <h2>Ksh.4500</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
