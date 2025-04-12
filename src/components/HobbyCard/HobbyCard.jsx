/* eslint-disable react/prop-types */
import "./HobbyCard.scss";
const HobbyCard = ({ title, icon: Icon, details }) => {
  return (
    <div className="hobby-card">
      <div className="hobby-image">
        <Icon className="hobby-image-file" />
      </div>
      <div className="hobby-text">
        <h5>{title}</h5>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default HobbyCard;
