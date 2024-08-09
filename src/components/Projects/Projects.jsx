/* eslint-disable no-unused-vars */
import React, {useRef} from 'react'
import './Projects.scss'
import {PROJECTS} from '../../utils/data'
import ProjectCard from '../ProjectCard/ProjectCard'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Projects = () => {

  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="project-container">
        <h5>Projects</h5>
        <div className="project-content">
        <div className="arrow-right" onClick={() => sliderRef.current.slickNext()}>
          <span className="material-symbols-outlined"><FaChevronRight/></span>
        </div>
          <div className="arrow-left" onClick={() => sliderRef.current.slickPrev()}>
          <span className="material-symbols-outlined"><FaChevronLeft/></span>
        </div>
          <Slider ref = {sliderRef} {...settings}>
            {PROJECTS.map((item) => (
                <ProjectCard key={item.title} details={item}/>
            ))}
          </Slider>
        </div>
    </section>
  )
}

export default Projects