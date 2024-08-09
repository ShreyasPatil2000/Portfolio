/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import './ProjectCard.scss'
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({details}) => {
  return (
    <div className="project-card">
        <h6>{details.title} | {details.skills}</h6>
        <a className="project-link" href={details.link} target="_blank" rel="noopener noreferrer">
            View on Github <FaExternalLinkAlt/>
        </a>
        <ul className='summary-list'>
            {details.summary.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ProjectCard