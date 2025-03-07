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
    setResult("Submitting...");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "00bb38f1-38dc-4c70-b5ef-0867572bd0da");
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("preferredCommunity", formData.preferredCommunity);
    formDataToSend.append("comments", formData.comments);
    formDataToSend.append("label", "Joining Missional Community"); // Add the label here

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Your request has been submitted successfully!");
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          preferredCommunity: '',
          comments: '',
        });
      } else {
        setResult("Failed to submit. Please try again.");
      }
    } catch (error) {
      setResult("Error submitting form. Check your connection.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="missional-community-form">
        <h1>Join a Missional Community</h1>
        <p className="description">
          Missional communities are small groups of believers who gather to grow in faith, serve the community, and share the love of Christ.
          Fill out the form below to join a missional community.
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

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          <p className="result-message">{result}</p>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default JoinMc;