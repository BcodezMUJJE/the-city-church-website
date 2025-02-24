import React from 'react';
import './AboutUs.css'; // Import the CSS file
import Footer from '../Footer'; // Import the Footer component
import Slider from './Slider.js'

function AboutUs() {
  return (
    <>
      <div className="story-container">
        <div className="title-section">
          <p>A Beacon of Hope in the Heart of Luzira, Kampala</p>
        </div>
        <div className="content-section">
          <p>
            The City Church Luzira, a vibrant Christian community, has been a
            source of hope, spiritual growth, and transformation in Luzira,
            Kampala, for many years. Under the leadership of Bishop Alex
            Mutagubya and Pastor Faith Mutagubya, the church has grown into a
            thriving congregation that impacts lives and communities.
          </p>
          <p>
            With multiple locations across Uganda, including Iganga and Kirinya,
            The City Church is committed to spreading the love of Christ and
            serving the community. Our mission is to disciple individuals, plant
            life-giving churches, and catalyze spiritual renewal.
          </p>
          <h2>Our Leadership</h2>
          <p>
            The City Church is led by a dedicated team of pastors and leaders who
            are passionate about serving God and the community:
          </p>
          <ul>
            <li>
              <strong>Bishop Alex Mutagubya</strong> - Lead Pastor
            </li>
            <li>
              <strong>Pastor Faith Mutagubya</strong> - Lead Pastor
            </li>
            <li>
              <strong>Pastor Lillian & Simon Kirabo</strong> - Location Pastors,
              The City Church Iganga
            </li>
            <li>
              <strong>Pastor Derrick & Deborah Mooli</strong> - Location
              Pastors, The City Church Kirinya
            </li>
            <li>
              <strong>Pastor Judith</strong> - Executive Pastor
            </li>
            <li>
              <strong>Pastor Martha Banalya</strong> - Location Pastor
            </li>
            <li>
              <strong>Pastor Dennis & Becky Onen</strong> - Youth Pastors
            </li>
          </ul>
          <h2>Our Ministries</h2>
          <p>
            The City Church Luzira is actively involved in various ministries
            that cater to the spiritual, social, and economic needs of the
            community:
          </p>
          <ul>
            <li>
              <strong>Media Ministry</strong> - Handling all media and
              communication needs.
            </li>
            <li>
              <strong>Tunsinze Band</strong> - Leading worship and music
              ministry.
            </li>
            <li>
              <strong>Care Ministry</strong> - Providing care and support to the
              congregation.
            </li>
            <li>
              <strong>First Impressions</strong> - Welcoming and assisting
              newcomers.
            </li>
            <li>
              <strong>Security Ministry</strong> - Ensuring the safety of our
              church community.
            </li>
          </ul>
          <h2>Our Location</h2>
          <p>
            We are located in Luzira, Kampala, Uganda. Join us for our services
            and events!
          </p>
          <div className="map-container">
            <iframe
              title="The City Church Luzira Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.753622315796!2d32.65641531526129!3d0.313599364054849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc1f5d5b2b9f%3A0x1f4f1f4f1f4f1f4f!2sLuzira%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1633024000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Slider />
      <Footer />
    </>
  );
}

export default AboutUs;