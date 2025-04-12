/* eslint-disable react/prop-types */
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaSchool } from "react-icons/fa6";
import { BiBuilding } from "react-icons/bi";
import { FaLink } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import "./TimelineChart.scss";

const TimelineChart = ({ title, details }) => {
  const iconStyles = { background: "#3d3072" };
  const contentStyles = {
    background: "#130f2a",
    border: "2px solid #6751b9",
    boxShadow: "none",
  };
  return (
    <VerticalTimeline className="vertical-timeline" lineColor="#130f2a">
      {details.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          date={item.date}
          dateClassName="timeline-date"
          icon={title === "Experience" ? <BiBuilding /> : <FaSchool />}
          iconStyle={iconStyles}
          contentStyle={contentStyles}
        >
          <div className="timeline-main">
            <h3 className="vertical-timeline-element-title">{item.name}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="timeline-link">
              <FaLink />
            </a>
          </div>
          <h4 className="vertical-timeline-element-subtitle">
            {title === "Experience" ? item.company : item.education}
          </h4>
          <div className="timeline-details">
            <p>{item.location}</p>
            {title === "Education" && <p>{item.score}</p>}
            <ul>
              {item.description.map((sentence, index) => (
                <li key={index} className="timeline-points">
                  <p className="timeline-description">{sentence}</p>
                </li>
              ))}
            </ul>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default TimelineChart;
