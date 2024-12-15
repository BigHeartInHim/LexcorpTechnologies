import React from 'react';
import './Hero.css';
import heroImage1 from '../../assets/Image1.jpeg';
import heroImage2 from '../../assets/Image2.jpeg';
import heroImage3 from '../../assets/Image3.jpeg';
import heroImage5 from '../../assets/Image5.jpeg';
import heroImage6 from '../../assets/Image6.jpeg';
import heroImage7 from '../../assets/Image7.jpeg';
import heroImage8 from '../../assets/Image8.jpeg';

const images = [heroImage1, heroImage2, heroImage3, heroImage5, heroImage6, heroImage7, heroImage8]; // Import images correctly

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