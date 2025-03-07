import React, { useState } from 'react';
import './WeeklyRoundTable.css';  // Link to a specific CSS file for this page
import Footer from "./Footer";    // Assuming you have a Footer component already

const Header = () => {
  return (
    <header className="roundtable-header">
      <h1>Our Weekly Round Table</h1>
      <p>Gather in your homes, reflect, share, and grow together!</p>
    </header>
  );
};

const RoundTableDetails = () => {
  const [formData, setFormData] = useState({
    whatILearned: '',
    whatGodIsTellingMe: '',
    actionPlan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the payload for API submission
    const payload = {
      whatILearned: formData.whatILearned,
      whatGodIsTellingMe: formData.whatGodIsTellingMe,
      actionPlan: formData.actionPlan,
      label: "Round Table Questionnaire Replies" // Add the label here
    };

    // Use your access key and endpoint here
    const apiUrl = 'https://your-api-endpoint.com/submit-feedback';  // Replace with your actual API URL
    const accessKey = '00bb38f1-38dc-4c70-b5ef-0867572bd0da';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessKey}`
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert('Thank you for sharing! Your response has been submitted successfully.');
        setFormData({
          whatILearned: '',
          whatGodIsTellingMe: '',
          actionPlan: ''
        });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('There was an error. Please check your connection and try again.');
    }
  };

  return (
    <section className="roundtable-details">
      <h2>Join Us for Our Weekly Missional Community Gatherings!</h2>
      <div className="details-content">
        <div className="details-card">
          <h3>Reflect</h3>
          <p>
            After Sunday’s service, take time to reflect on what you learned. What did God reveal to you through the sermon?
          </p>
        </div>
        <div className="details-card">
          <h3>Share</h3>
          <p>
            Gather with your group, share your thoughts, discuss the message, and encourage one another. Each person's experience adds value to the conversation.
          </p>
        </div>
        <div className="details-card">
          <h3>Act</h3>
          <p>
            Discuss what God is leading you to do in response to His message. What practical steps can you take this week to apply God's word in your life?
          </p>
        </div>
      </div>
      <p className="action-note">
        We believe that these small group discussions help us grow spiritually and strengthen our community.
      </p>
      
      <h2>Share What You've Learned</h2>
      <form onSubmit={handleSubmit} className="roundtable-form">
        <div className="form-group">
          <label htmlFor="whatILearned">What did you learn from this week's Round Table discussion?</label>
          <textarea
            id="whatILearned"
            name="whatILearned"
            value={formData.whatILearned}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="whatGodIsTellingMe">What do you feel God is telling you this week?</label>
          <textarea
            id="whatGodIsTellingMe"
            name="whatGodIsTellingMe"
            value={formData.whatGodIsTellingMe}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="actionPlan">What steps will you take in response to God's message?</label>
          <textarea
            id="actionPlan"
            name="actionPlan"
            value={formData.actionPlan}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <Footer />
    </section>
  );
};

export { Header, RoundTableDetails };