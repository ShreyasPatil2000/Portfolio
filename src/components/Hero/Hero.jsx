/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.scss'
import UserImg from '../../assets/UserImg.webp'
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>
            Building Applications that inspires others
          </h2>
          <p>
            Welcome to My Website,
            I am Shreyas Patil, a passionate FullStack Web Developer | Transforming Ideas into Aesthetic and Visually Stunning Solutions
          </p>
        </div>
        <div className="hero-img">
          <div className='image-container'>
            <img className="userImg" src={UserImg} alt="img"/>
          </div>
          <div>
            <div className="tech-icon">
              <FaHtml5 className="icon html"  />
            </div>
            <div className="tech-icon">
              <FaCss3Alt className="icon css"  />
            </div>
            <div className="tech-icon">
              <DiJavascript1 className="icon js"  />
            </div>
            <div className="tech-icon">
              <FaNodeJs className="icon node"  />
            </div>
            <div className="tech-icon">
              <FaReact className="icon react"  />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero