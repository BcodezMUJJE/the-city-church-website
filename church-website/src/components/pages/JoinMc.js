import React, { useState } from 'react';
import './JoinMc.css'; // Import the CSS file
import Footer from '../Footer'; // Import the Footer component

function JoinMc() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredCommunity: '',
    comments: '',
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
    alert('Thank you for your interest in joining a missional community! We will contact you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredCommunity: '',
      comments: '',
    });
  };

  return (
    <>
      <div className="missional-community-form">
        <h1>Join a Missional Community</h1>
        <p className="description">
          Missional communities are small groups of believers who gather to grow in faith, serve the community, and share the love of Christ. Fill out the form below to join a missional community.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="preferredCommunity">Preferred Missional Community</label>
            <select
              id="preferredCommunity"
              name="preferredCommunity"
              value={formData.preferredCommunity}
              onChange={handleChange}
              required
            >
              <option value="">Select a community</option>
              <option value="Iganga">Iganga</option>
              <option value="Kirinya">Kirinya</option>
              <option value="Luzira">Luzira</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="comments">Additional Comments</label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <Footer /> {/* Add the Footer component here */}
    </>
  );
}

export default JoinMc;