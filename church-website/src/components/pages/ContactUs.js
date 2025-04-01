import React, { useState } from 'react';
import './ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaPodcast } from 'react-icons/fa';
import Footer from "../Footer";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "00bb38f1-38dc-4c70-b5ef-0867572bd0da");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Your message has been sent successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });

        // Redirect after successful submission
        window.location.href = 'https://thecitychurchluzira.churchcenter.com/people/forms/938185';
      } else {
        setResult("Failed to send message. Please try again.");
      }
    } catch (error) {
      setResult("Error submitting form. Check your connection.");
    }

    setLoading(false);
  };

  return (
    <>
      <section className="contact">
        <div className="contact-container">
          <div className="contact-box">
            <h2>Get In Touch</h2>
            <p className="desc">
              At The City Church, we believe in open communication and building a strong community.  
              We encourage you to ask any questions you have – no matter how big or small. We're here to support 
              you on your journey and are happy to provide any information you need. Connect with us!
            </p>
            <div className="contact-details">
              <div className="detail">
                <FaPhone className="icon" />
                <p>Phone</p>
                <p>+256 704 083043</p>
              </div>
              <div className="detail">
                <FaEnvelope className="icon" />
                <p>Email</p>
                <p>info@thecitychurchluzira.org</p>
              </div>
              <div className="detail">
                <FaMapMarkerAlt className="icon" />
                <p>Address</p>
                <p>Kampala - Luzira</p>
              </div>
            </div>
            <div className="social-media-section">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.instagram.com/theecitychurch/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="icon" />
                </a>
                <a href="https://www.facebook.com/TheeCityChurch" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="icon" />
                </a>
                <a href="https://x.com/TheCityChurchL/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="icon" />
                </a>
                <a href="https://www.linkedin.com/company/the-city-church-luzira/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="icon" />
                </a>
                <a href="https://theecitychurchluzira.podbean.com/" target="_blank" rel="noopener noreferrer" aria-label="Podbean">
                  <FaPodcast className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <form onSubmit={handleSubmit} id="contactForm">
              <h2>Get In <span>Touch</span></h2>
              <div className="field-box">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn" disabled={loading}>
                {loading ? "Sending..." : "Submit"}
              </button>
              <p className="result-message">{result}</p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;