import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    { title: 'Landing Page', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    { title: 'E-Commerce Website', img: 'https://images.unsplash.com/photo-1506765515384-028b60a970df' },
    { title: 'Dashboard App', img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e' },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
