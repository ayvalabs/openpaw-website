import "./Hero.css";
import robotImage from "../../assets/images/woofly-robot.jpeg";
import { useEffect, useState } from "react";

import dog1 from "../../assets/images/hero/dog1.jpg";
import dog2 from "../../assets/images/hero/dog2.jpg";
import dog3 from "../../assets/images/hero/dog3.jpg";
import dog4 from "../../assets/images/hero/dog4.jpg";
import dog5 from "../../assets/images/hero/dog5.jpg";
import dog6 from "../../assets/images/hero/dog6.jpg";

function Hero() {
    const heroImages = [
        dog1,
        dog2,
        dog3,
        dog4,
        dog5,
        dog6
    ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) =>
      (prev + 1) % heroImages.length
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="hero">
        <div
    className="hero-bg"
    style={{
      backgroundImage: `url(${heroImages[currentImage]})`
    }}
  />

  <div className="hero-overlay"></div>

  <div className="hero-left">

    <p className="hero-tagline">
      The Best Choice For Your Canine
    </p>

    <h1>
    Your Dog's
    <br />
    <span>AI Best Friend.</span>
    </h1>

    <p className="hero-description">
      A spatially aware AI companion that follows your dog,
      monitors behavior, understands activity patterns,
      and helps owners provide better care.
    </p>

    <div className="hero-buttons">

      <button className="primary-btn">
        Meet Woofly
      </button>

      <button className="secondary-btn">
        Learn More
      </button>

    </div>

    <div className="stats-container">

    <div className="stat-card">
        <h2>24/7</h2>
        <p>Dog Activity Tracking</p>
    </div>

    <div className="stat-card">
        <h2>AI</h2>
        <p>Behavior Analysis</p>
    </div>

    <div className="stat-card">
        <h2>Auki</h2>
        <p>Spatial Navigation</p>
    </div>

    </div>

  </div>

  <div className="hero-right">

    <div className="product-card">

  <div className="product-badge">
    AI DOG COMPANION
  </div>

  <img
    src={robotImage}
    alt="Woofly Robot"
    className="robot-image"
  />

  <h3>Woofly Companion</h3>

  <p>
    Tracks activities, follows your dog,
    and understands behavior patterns.
  </p>

  <div className="product-footer">

    <span className="price">
      Coming Soon
    </span>

  </div>

</div>

  </div>

</section>
  );
}

export default Hero;