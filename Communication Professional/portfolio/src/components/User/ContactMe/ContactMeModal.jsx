import React, { useState } from 'react';
import axios from 'axios';
import './ContactMeModal.css';

function ContactMeModal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message || !captcha) {
      setError('Please fill out all fields and complete the CAPTCHA');
      return;
    }

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await axios.post('http://your-backend-api.com/contact', formData);

      if (response.status === 200) {
        alert('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setCaptcha(false);
        setError('');
        onClose();
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setError('Error sending the message. Please try again.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="contact-modal">
        <span className="close-btn" onClick={onClose}>X</span>
        <h2>Contact Shreya Mukherjee</h2>
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
