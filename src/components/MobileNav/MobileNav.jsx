/* eslint-disable react/prop-types */
import "./MobileNav.scss";
import logo from "../../assets/logo1.webp";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import resumePDF from "../../assets/ShreyasPatilResume.pdf";

const MobileNav = ({ isOpen, toggleMenu }) => {
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
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
        <a href="/Portfolio/">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <ul>
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="menu-item"
              onClick={toggleMenu}
              title="home"
              offset={-100}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="menu-item"
              onClick={toggleMenu}
              title="skills"
              offset={-120}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link to="timeline" smooth={true} duration={500} className="menu-item" title="timeline" offset={-120}>
              Timeline
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="menu-item"
              onClick={toggleMenu}
              title="projects"
              offset={-120}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="hobbies" smooth={true} duration={500} className="menu-item" title="hobbies" offset={-120}>
              Hobbies
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="menu-item"
              onClick={toggleMenu}
              title="contact"
              offset={-120}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="mobile-download-btn download-btn" onClick={handleDownload} aria-label="Download Resume">
          <FaDownload size={12} /> &nbsp;Resume
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
