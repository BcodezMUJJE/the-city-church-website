import React from 'react';
import './Tcg.css';
import Footer from './Footer';
import imgYouth from '../Assets/TheChristGeneration.jpeg';

const TCGPage = () => {
  const handleJoinClick = () => {
    window.location.href = "https://thecitychurchluzira.churchcenter.com/people/forms/938180";
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
        <button 
          onClick={handleJoinClick} 
          className="submit-btn"
        >
          Join TCG Now
        </button>
      </section>

      <section className="tcg-contact">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to our TCG leadership team:</p>
        <button 
          onClick={handleJoinClick} 
          className="submit-btn"
        >
          Contact TCG
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default TCGPage;