import React, { useState } from 'react';
import axios from 'axios';
import './ContactMeModal.css';
import { API_CONTACT_ME } from '../../../apiUrl';
import ReCAPTCHA from "react-google-recaptcha";
import { IoIosCloseCircle } from "react-icons/io";
import { toast } from 'react-toastify';

function ContactMeModal({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState(false);
  const [loading, setLoading] = useState(false);

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !message || !captcha) {
      toast.error('Please fill out all fields and complete the CAPTCHA');
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Check if the email is already stored in localStorage
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail === email) {
      toast.warning('This email has already been submitted.');
      return;
    }

    // Store the email in localStorage
    localStorage.setItem('userEmail', email);

    setLoading(true);

    const formData = {
      name,
      email,
      message,
    };

    try {
      // Send the data to the server using Axios
      const response = await axios.post(API_CONTACT_ME, formData);

      if (response.status === 200) {
        toast.success('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        setCaptcha(false);
        onClose();
      }
    } catch (err) {
      console.error('Error submitting the form:', err);
      toast.error('Error sending the message. Please try again.');
    } finally{
      setLoading(false);
    }
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    setCaptcha(value ? true : false);
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}><IoIosCloseCircle /></span>
        <h2>Contact Shreya Mukherjee</h2>

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
              <ReCAPTCHA
                sitekey="6LehAdkqAAAAAEjQO3qzIsHOuQtX_47bxY0f37NL"
                onChange={onChange}
              />
            </label>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={!captcha || !name || !email || !message || loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMeModal;
