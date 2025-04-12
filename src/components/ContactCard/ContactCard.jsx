/* eslint-disable react/prop-types */
import "./ContactCard.scss";

const ContactCard = ({ icon: Icon, text, link }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <a href={link} className="contact-link" target="_blank" rel="noopener noreferrer" aria-label="Contact Information Links">
          <Icon className="contact-icon" />
        </a>
      </div>
      <p title="Click on Icon to redirect">{text}</p>
    </div>
  );
};

export default ContactCard;
