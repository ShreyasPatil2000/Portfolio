/* eslint-disable react/prop-types */
import "./ProjectCard.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <h6>
        {details.title} | {details.skills}
      </h6>
      <a
        className="project-link"
        href={details.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Github Repository"
      >
        View on Github <FaExternalLinkAlt />
      </a>
      {details.live && (
        <a
          className="project-link"
          href={details.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Github Repository"
        >
          Live Link <FaExternalLinkAlt />
        </a>
      )}
      <ul className="summary-list">
        {details.summary.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
