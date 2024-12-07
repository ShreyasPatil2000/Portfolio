/* eslint-disable react/prop-types */
import "./ContactCard.scss";

const ContactCard = ({ icon: Icon, text, link }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        {link ? (
          <a
            href={link}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="contact-icon" />
          </a>
        ) : (
          <Icon className="contact-icon" />
        )}
      </div>
      <p title="Click on Icon to redirect">{text}</p>
    </div>
  );
};

export default ContactCard;
