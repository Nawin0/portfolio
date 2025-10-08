import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const skills = [
    { icon: <FaHtml5 size={40} color="#E34F26" />, name: 'HTML5' },
    { icon: <FaCss3Alt size={40} color="#1572B6" />, name: 'CSS3' },
    { icon: <FaJsSquare size={40} color="#F7DF1E" />, name: 'JavaScript' },
    { icon: <FaReact size={40} color="#61DBFB" />, name: 'React' },
    { icon: <FaNodeJs size={40} color="#68A063" />, name: 'Node.js' },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
