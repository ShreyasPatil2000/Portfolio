import { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo1.webp";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import MobileNav from "../MobileNav/MobileNav";
import { Link } from "react-scroll";
import resumePDF from "../../assets/ShreyasPatilResume.pdf";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  const handleDownload = () => {
    const userConfirmed = window.confirm("Do you want to download the resume?");
    if (userConfirmed) {
      const link = document.createElement("a");
      link.href = resumePDF;
      link.download = "ShreyasPatilResume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="navbar">
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <a href="/Portfolio/">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <ul>
            <li>
              <Link to="hero" smooth={true} duration={500} className="menu-item" title="Home" offset={-100}>
                Home
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="menu-item" title="skills" offset={-120}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="timeline" smooth={true} duration={500} className="menu-item" title="timeline" offset={-120}>
                Timeline
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="menu-item" title="projects" offset={-120}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="hobbies" smooth={true} duration={500} className="menu-item" title="hobbies" offset={-120}>
                Hobbies
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="menu-item" title="contact" offset={-120}>
                Contact
              </Link>
            </li>
          </ul>
          <button className="download-btn" onClick={handleDownload} aria-label="Download Resume">
              <FaDownload size={12} /> &nbsp;Resume
            </button>
          <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {openMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
