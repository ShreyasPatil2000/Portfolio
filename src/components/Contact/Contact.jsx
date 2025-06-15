import ContactCard from "../ContactCard/ContactCard";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.scss";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactCard
            icon={FaEnvelope}
            text="shreyas.patil20000@gmail.com"
            link="mailto:shreyas.patil20000@gmail.com"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactCard icon={FaGithub} text="Github/ShreyasPatil2000" link="https://github.com/ShreyasPatil2000" />
        </div>
        <div style={{ flex: 1 }}>
          <ContactCard
            icon={FaLinkedin}
            text="LinkedIn/shreyas20"
            link="https://www.linkedin.com/in/shreyaspatil3524/"
          />
        </div>
      </div>
      <div className="form-container">
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
