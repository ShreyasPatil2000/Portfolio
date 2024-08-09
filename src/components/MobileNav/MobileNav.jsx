/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './MobileNav.scss';
import logo from '../../assets/logo1.png';
import { FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import resumePDF from '../../assets/ShreyasPatilResume.pdf'

const MobileNav = ({ isOpen, toggleMenu }) => {

  const handleDownload = () => {
    const userConfirmed = window.confirm("Do you want to download the resume?");
    if (userConfirmed) {
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'ShreyasPatilResume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  return (
    <div
      className={`mobile-menu ${isOpen ? 'active' : ''}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
        <a href="/Portfolio/">
          <img src={logo} className='logo' alt="logo" />
        </a>
        <ul>
          <li>
            <Link to="hero" smooth={true} duration={500} className="menu-item" onClick={toggleMenu} title='home' offset={-100}>
              Home
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="menu-item" onClick={toggleMenu} title='skills' offset={-120}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="menu-item" onClick={toggleMenu} title='projects' offset={-120}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="menu-item" onClick={toggleMenu} title='contact' offset={-120}>
              Contact
            </Link>
          </li>
          <button className="download-btn" onClick={handleDownload}>
            <FaDownload size={12} /> &nbsp;Resume
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
