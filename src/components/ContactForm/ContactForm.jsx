/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import './ContactForm.scss'
import emailjs from '@emailjs/browser'

const ContactForm = () => {

  const textareaRef = useRef(null);
  const [rows, setRows] = useState(3); // Initial rows
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInput = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto'; 
      const newRows = Math.max(3, Math.ceil(textarea.scrollHeight / 30));
      setRows(newRows);
    }
  };

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);  // Update the state with the new value
    handleInput();               // Adjust the textarea size based on the new content

    if (e.target.value === '') {
      // If the textarea is empty, revert to 3 rows
      setRows(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_zfpdxcu';
    const templateID = 'template_6scqodj';
    const publicKey = 'XsL2xOBbvShjnfXxX';

    const templateParams = {
      from_firstname: firstName,
      from_lastname: lastName,
      from_email: email,
      to_name: 'Shreyas Patil',
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent Successfully! ', response);
        window.alert('Email sent successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email: ', error);
        window.alert('Error sending email. Please try again.');
      });
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input type="text" name='firstname' placeholder='First Name' value={firstName} title='First Name' onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" name='lastname' placeholder='Last Name' value={lastName} title='Last Name' onChange={(e) => setLastName(e.target.value)} />
        </div>
        <input type="text" name='email' placeholder='Email' value={email} title='Email' onChange={(e) => setEmail(e.target.value)} />
        <textarea
          type='text'
          name="message"
          id="message"
          placeholder='Message'
          rows={rows}
          title='Message'
          value={message}
          ref={textareaRef}
          onChange={handleTextareaChange}
        ></textarea>
        <button type='submit'>SEND</button>
      </form>
    </div>
  )
}

export default ContactForm;
