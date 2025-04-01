import React from 'react';
import './Tcg.css'; // Make sure you have your CSS for styling
import Footer from './Footer'; // Assuming you have a Footer component
import imgYouth from '../Assets/TheChristGeneration.jpeg'; // Fixed path for the image

const TCGPage = () => {
  const membershipFormLink = "https://thecitychurchluzira.churchcenter.com/people/forms/938180";

  const handleRedirect = (event) => {
    event.preventDefault(); // Prevent any unwanted behavior
    window.location.href = membershipFormLink; // Redirect to the form
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
        <form onSubmit={handleRedirect} className="tcg-contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Why do you want to join TCG?</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Join Us</button>
        </form>
      </section>

      <section className="tcg-contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleRedirect}>
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
      </section>

      <Footer />
    </div>
  );
};

export default TCGPage;
