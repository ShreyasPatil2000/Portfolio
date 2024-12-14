import HobbyCard from "../HobbyCard/HobbyCard";
import "./Hobbies.scss";
import { HOBBIES } from "../../utils/data";

const Hobbies = () => {
  return (
    <section className="hobbies-container">
      <h3 className="hobbies-heading">Hobbies</h3>
      <div className="hobbies-content">
        {HOBBIES.map((hobby) => (
          <HobbyCard
            key={hobby.id}
            title={hobby.title}
            icon={hobby.icon}
            details={hobby.details}
          />
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
