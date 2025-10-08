import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="#"><FaFacebook size={24} /></a>
        <a href="#"><FaGithub size={24} /></a>
        <a href="#"><FaLinkedin size={24} /></a>
      </div>
      <p>© 2025 Nawin. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
