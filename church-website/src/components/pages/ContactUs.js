import React, { useState } from 'react';
import './ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from "../Footer";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with an API call to submit the form data
    console.log('Form Data Submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <section className="contact">
        <div className="contact-container">
          {/* Contact Details Box */}
          <div className="contact-box">
            <h2>Let's Connect</h2>
            <p className="desc">
            At The City Church, we believe in open communication and building a strong community.  
            We encourage you to ask any questions you have – no matter how big or small.  We're here to support 
            you on your journey and are happy to provide any information you need.  Connect with us!</p>
            <div className="contact-details">
              <div className="detail">
                <FaPhone className="icon" />
                <p>Phone</p>
                <p>+256 700 907 712</p>
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
          </div>

          {/* Contact Form Box */}
          <div className="contact-box">
            <form onSubmit={handleSubmit} id="contactForm">
              <h2>Get In <span>Touch</span></h2>
              <div className="field-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;