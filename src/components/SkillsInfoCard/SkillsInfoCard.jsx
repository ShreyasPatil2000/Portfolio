/* eslint-disable react/prop-types */
import React from "react";
import "./SkillsInfoCard.scss";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h5>{heading}</h5>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{item.skill}</p>
              <img src={item.image} alt="icon image" width={40} height={40}/>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
