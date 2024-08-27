  /* eslint-disable no-unused-vars */
  import React from 'react'
  import './Footer.scss'
  import LinkedInLogo from '../../assets/LI-In-Bug.png'
  import GithubLogo from '../../assets/github-mark-white.png'

  const Footer = () => {
    return (
      <div className='footer'>
        &copy; RaydenDarkus, have fun Coding!
        <div className='footer-links'>
          <a href="https://www.linkedin.com/in/shreyaspatil3524/" className='footer-link' target="_blank">
            <img src={LinkedInLogo} alt="LinkedIn Logo" className='footer-icon' width="25" height="25" title='LinkedIn'/>
          </a>
          <a href="https://github.com/RaydenDarkus" className='footer-link' target="_blank">
            <img src={GithubLogo} alt="Github Logo" className='footer-icon' width="25" height="25" title='Github'/>
          </a>
        </div>
      </div>
    )
  }

  export default Footer