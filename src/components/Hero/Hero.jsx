import React from 'react';
import './Hero.css';

import heroImage2 from '../../assets/Image2.jpeg';
import heroImage6 from '../../assets/Image6.jpeg';
import heroImage7 from '../../assets/Image7.jpeg';
import heroImage9 from '../../assets/Image9.jpeg'; // Import Image9

const images = [heroImage2, heroImage6, heroImage7, heroImage9]; // Updated images array

const smallSlides = [
  { id: 1, content: "Welcome to Our Service!", backgroundColor: "#f0f8ff" }, // Light color
  { id: 2, content: "Experience Quality and Reliability!", backgroundColor: "#f5f5dc" }, // Light color
];

function Hero() {
  return (
    <section className="hero">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000" // Set the interval to 3 seconds (3000ms)
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
          {smallSlides.map((slide) => (
            <div className="carousel-item" key={slide.id} style={{ backgroundColor: slide.backgroundColor, animation: 'slideDown 2s' }}>
              <div className="d-block w-100 text-center" style={{ padding: '100px 0' }}>
                <h2>{slide.content}</h2>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
