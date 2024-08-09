/* eslint-disable no-unused-vars */
// Navbar.js
import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../../assets/logo1.png';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import MobileNav from '../MobileNav/MobileNav';
import { Link } from 'react-scroll';
import resumePDF from '../../assets/ShreyasPatilResume.pdf'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

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
    <div className="navbar">
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className='nav-wrapper'>
        <div className="nav-content">
            <a href="/">
                <img src={logo} className='logo' alt="logo" />
            </a>
            <ul>
                <li>
                  <Link to="hero" smooth={true} duration={500} className="menu-item" title='Home'>Home</Link>
                </li>
                <li>
                  <Link to="skills" smooth={true} duration={500} className="menu-item" title='skills' >Skills</Link>
                </li>
                <li>
                  <Link to="projects" smooth={true} duration={500} className="menu-item" title='projects'>Projects</Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500} className="menu-item" title='contact'>Contact</Link>
                </li>
                <button className="download-btn" onClick={handleDownload}>
                  <FaDownload size={12}/> &nbsp;Resume
                </button>
            </ul>
            <button className="menu-btn" onClick={toggleMenu}>
                {openMenu ? <FaTimes /> : <FaBars />}
            </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
