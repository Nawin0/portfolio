import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <h1>Hi, I'm Nawin 👋</h1>
        <p>I build beautiful and functional web applications using React.</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Hero"
        className="hero-img"
      />
    </section>
  );
}

export default Hero;
