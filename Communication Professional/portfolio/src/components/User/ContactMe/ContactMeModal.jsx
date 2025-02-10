import React, { useState } from 'react';
import axios from 'axios';  // Import axios for API requests
import './ContactMeModal.css';
import { API_CONTACT_ME } from '../../../apiUrl';  // Import API endpoint

function ContactMeModal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !message || !captcha) {
      setError('Please fill out all fields and complete the CAPTCHA');
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Check if the email is already stored in localStorage
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail === email) {
      setError('This email has already been submitted.');
      alert()
      return;
    }

    // Store the email in localStorage
    localStorage.setItem('userEmail', email);

    const formData = {
      name,
      email,
      message,
    };

    try {
      // Send the data to the server using Axios
      const response = await axios.post(API_CONTACT_ME, formData);

      if (response.status === 200) {
        setSuccess('Your message has been sent successfully!');
        alert("Message sent! Admin will contact you soon!");
        setName('');
        setEmail('');
        setMessage('');
        setCaptcha(false);
        setError('');
        onClose();
      }
    } catch (err) {
      console.error('Error submitting the form:', err);
      setError('Error sending the message. Please try again.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="contact-modal">
        <span className="close-btn" onClick={onClose}>X</span>
        <h2>Contact Shreya Mukherjee</h2>

        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="6"
            />
          </div>

          <div className="form-group captcha">
            <label>
              <input
                type="checkbox"
                checked={captcha}
                onChange={(e) => setCaptcha(e.target.checked)}
              />
              I am not a robot
            </label>
          </div>

          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMeModal;
