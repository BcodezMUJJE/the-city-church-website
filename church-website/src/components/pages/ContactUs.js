import React from 'react'; // Removed useState as it's no longer needed
import './ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaPodcast } from 'react-icons/fa';
import Footer from "../Footer"; // Assuming Footer component exists

function ContactUs() {
  // Removed useState for formData, result, loading
  // Removed handleChange and handleSubmit functions

  const churchCenterFormUrl = 'https://thecitychurchluzira.churchcenter.com/people/forms/938185';

  return (
    <>
      <section className="contact">
        <div className="contact-container">
          {/* Left Box: Contact Info and Social Media (No changes here) */}
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
                <div> {/* Wrap text for better alignment if needed */}
                    <p>Phone</p>
                    <p>+256 704 083043</p>
                </div>
              </div>
              <div className="detail">
                <FaEnvelope className="icon" />
                 <div>
                    <p>Email</p>
                    <p>info@thecitychurchluzira.org</p>
                 </div>
              </div>
              <div className="detail">
                <FaMapMarkerAlt className="icon" />
                 <div>
                    <p>Address</p>
                    <p>Kampala - Luzira</p>
                 </div>
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

          {/* Right Box: Replaced Form with Info and Button Link */}
          <div className="contact-box connect-box"> {/* Added optional 'connect-box' class for specific styling */}
            <h2>Connect With Us</h2>
            <p className="desc">
              Ready to get connected? Fill out our connection form to share your details, ask questions,
              or let us know how we can pray for you. Click the button below to get started!
            </p>
            {/* Use an anchor tag styled as a button for direct navigation */}
            <a
              href={churchCenterFormUrl}
              className="btn connect-btn" // Use existing btn class, add specific class if needed
              target="_blank" // Open in a new tab
              rel="noopener noreferrer"
            >
              Fill Out Connection Form
            </a>
            {/* Removed the form, field-box, submit button, and result message */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;