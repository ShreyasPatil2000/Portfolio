  /* eslint-disable no-unused-vars */
  import React from 'react'
  import './Footer.scss'
  import LinkedInLogo from '../../assets/LI-In-Bug.png'
  import GithubLogo from '../../assets/github-mark-white.png'
  import { FaArrowUp } from 'react-icons/fa'

  const Footer = () => {
    return (
      <div className='footer'>
        &copy; RaydenDarkus, have fun Coding!
        <div className='footer-links'>
          <a href="https://www.linkedin.com/in/shreyaspatil3524/" className='footer-link' target="_blank">
            <img src={LinkedInLogo} alt="LinkedIn Logo" className='footer-icon' width="18" height="18" title='LinkedIn'/>
          </a>
          <a href="https://github.com/RaydenDarkus" className='footer-link' target="_blank">
            <img src={GithubLogo} alt="Github Logo" className='footer-icon' width="18" height="18" title='Github'/>
          </a>
          <button className="go-up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title='Go Up'>
            <FaArrowUp size={18} className='up-button'/>
          </button>
        </div>
      </div>
    )
  }

  export default Footer