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
            link="mailto:shreyas.patil20000@gmail.com" // No link for email
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactCard
            icon={FaGithub}
            text="github.com/RaydenDarkus/"
            link="https://github.com/RaydenDarkus"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactCard
            icon={FaLinkedin}
            text="linkedin.com/in/shreyaspatil3524/"
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
