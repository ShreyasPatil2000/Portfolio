/* eslint-disable react/prop-types */
import "./TimelineButton.scss";
const TimelineButton = ({ title, isActive, onClick }) => {
  return (
    <div
      className={`timeline-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <span>{title}</span>
    </div>
  );
};

export default TimelineButton;
