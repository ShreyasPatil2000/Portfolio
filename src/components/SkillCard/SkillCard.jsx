/* eslint-disable react/prop-types */
import "./SkillCard.scss";

const SkillCard = ({ title, icon: Icon, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="skill-icon">
        <Icon className="skillImg" />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
