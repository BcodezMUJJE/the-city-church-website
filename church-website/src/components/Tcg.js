import React, { useState } from 'react';
import './Tcg.css'; // Make sure you have your CSS for styling
import Footer from './Footer'; // Assuming you have a Footer component
import imgYouth from '../Assets/TheChristGeneration.jpeg'; // Fixed path for the image

const TCGPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate submission (e.g., to an API)
    console.log('Form Data:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    alert('Thank you for reaching out! We will get back to you soon.');
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    // Create FormData from the form input fields
    const formData = new FormData(event.target);

    // Append the access key to the FormData
    formData.append("access_key", "00bb38f1-38dc-4c70-b5ef-0867572bd0da");

    // Send the form data to the Web3Forms API endpoint
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    // Parse the response
    const data = await response.json();

    // Handle response
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); // Reset form fields after successful submission
    } else {
      console.log("Error", data);
      setResult(data.message); // Display the error message
    }
  };

  return (
    <div className="tcg-page">
      <header className="tcg-header">
        <h1>The Christ Generation TCG</h1>
        <img src={imgYouth} alt="The Christ Generation youth group header" />
      </header>

      <section className="tcg-about">
        <h2>About TCG</h2>
        <p>
          The Christ Generation (TCG) is a vibrant youth group focused on living out our faith,
          fostering community, and making an impact in the world around us. We gather regularly to
          learn, grow, and support one another as we follow the example of Christ.
        </p>
      </section>

      <section className="tcg-mission">
        <h2>Our Mission</h2>
        <p>
          We are passionate about equipping young people to live out their faith in their schools, homes,
          and communities. Through Bible studies, community outreach, and special events, we are empowered
          to be the hands and feet of Christ.
        </p>
      </section>

      <section className="tcg-upcoming-events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>
            <strong>Friday Night Worship</strong> - Every Friday at 6:00 PM
            <p>Join us for an amazing time of worship and fellowship!</p>
          </li>
          <li>
            <strong>TCG Outreach Program</strong> - Saturday, March 5th at 10:00 AM
            <p>Helping the local community with practical needs and sharing the love of Christ.</p>
          </li>
          <li>
            <strong>Youth Retreat</strong> - April 12th-14th
            <p>A weekend retreat for personal growth, connection, and spiritual renewal.</p>
          </li>
        </ul>
      </section>

      <section className="tcg-join-us">
        <h2>Join Us!</h2>
        <p>If you're a young person looking for a place to belong, grow, and serve, we would love to have you be a part of TCG.</p>
        <form onSubmit={handleSubmit} className="tcg-contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
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
            <label htmlFor="message">Why do you want to join TCG?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Join Us</button>
        </form>
      </section>

      <section className="tcg-contact">
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit">Submit Form</button>
        </form>
        
        <span>{result}</span> {/* Display submission result */}
      </section>

      <Footer />
    </div>
  );
};

export default TCGPage;
