import React, { useEffect, useState } from 'react';
import './Number.css';

function Number() {
  const stats = [
    { number: 50, label: 'Projects' },
    { number: 10, label: 'Clients' },
    { number: 3, label: 'Years Experience' },
  ];

  const [count, setCount] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev.map((val, i) => (val < stats[i].number ? val + 1 : val)));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="number">
      <h2>Achievements</h2>
      <div className="number-grid">
        {stats.map((stat, index) => (
          <div key={index} className="number-item">
            <p className="num">{count[index]}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Number;
