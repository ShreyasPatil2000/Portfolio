import { useState } from "react";
import "./Skills.scss";
import { SKILLS } from "../../utils/data";
import SkillCard from "../SkillCard/SkillCard";
import SkillsInfoCard from "../SkillsInfoCard/SkillsInfoCard";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectedSkill = (data) => setSelectedSkill(data);

  return (
    <section className="skills-container">
      <h3>Technical Proficieny</h3>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => handleSelectedSkill(item)}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
