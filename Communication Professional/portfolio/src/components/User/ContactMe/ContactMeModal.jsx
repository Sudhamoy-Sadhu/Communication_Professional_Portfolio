import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactMeModal.css';
import { API_CONTACT_ME } from '../../../apiUrl';

function ContactMeModal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLimitReached, setIsLimitReached] = useState(false);


  const checkSubmissionLimit = () => {
    const today = new Date().toLocaleDateString();
    const lastSubmissionDate = localStorage.getItem('lastSubmissionDate');
    const submissionCount = parseInt(localStorage.getItem('submissionCount')) || 0;

    if (lastSubmissionDate === today && submissionCount >= 3) {
      setIsLimitReached(true);
    } else {
      setIsLimitReached(false);
    }
  };

  // Update submission count in localStorage after successful submission
  // const updateSubmissionCount = () => {
  //   const today = new Date().toLocaleDateString();
  //   const lastSubmissionDate = localStorage.getItem('lastSubmissionDate');
  //   let submissionCount = parseInt(localStorage.getItem('submissionCount')) || 0;

  //   if (lastSubmissionDate !== today) {
  //     // Reset count if it's a new day
  //     localStorage.setItem('lastSubmissionDate', today);
  //     submissionCount = 0;
  //   }

  //   submissionCount += 1;
  //   localStorage.setItem('submissionCount', submissionCount);
  // };

  // useEffect(() => {
  //   checkSubmissionLimit();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !message || !captcha) {
      setError('Please fill out all fields and complete the CAPTCHA');
      return;
    }

    if (isLimitReached) {
      alert(setError('You have reached the maximum submission limit for today.'));
      return;
    }

    const formData = {
      name,
      email,
      message,
    };

    try {
      // Make the POST request to your Spring Boot backend
      const response = await axios.post(API_CONTACT_ME, formData);

      if (response.status === 200) {
        // If the form was submitted successfully
        setSuccess('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setCaptcha(false);
        setError('');
        // updateSubmissionCount(); 
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
