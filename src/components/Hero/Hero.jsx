import "./Hero.scss";
import UserImg from "../../assets/ShreyasPatilPhoto.webp";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>Building Applications that inspires others</h2>
          <p>
            Welcome to My Website, I am Shreyas Patil, a passionate Front-End Developer at Dream Studio | Transforming
            Ideas into Aesthetic and Visually Stunning Solutions
          </p>
        </div>
        <div className="hero-img">
          <div className="image-container">
            <img className="userImg" src={UserImg} alt="img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
