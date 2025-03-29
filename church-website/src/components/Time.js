import React from 'react';
import './Time.css';
import Footer from "./Footer";
import img1 from "../Assets/Tus1.jpg";
import img2 from "../Assets/APPPP.jpg"

const Header = () => {
  return (
    <header className="header">
      <h1>Sunday Service Schedule</h1>
      <p>Join us for uplifting worship and inspiring teachings!</p>
    </header>
  );
};

const ServiceTimes = () => {
  const services = [
    { 
      time: '8:00 AM - 10:00 AM', 
      description: 'First Service',
      image: img2
    },
    { 
      time: '10:30 AM - 12:30 PM', 
      description: 'Second Service',
      image: img1
    },
  ];

  return (
    <section className="service-times">
      <Header />
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img 
              src={service.image} 
              alt={service.description} 
              className="service-image"
            />
            <div className="service-content">
              <h3>{service.time}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p>We are so excited to have you join us today! Whether you're here for the first time or you've been with us for years, we believe you are in the right place. Our Sunday services are designed to uplift your spirit, inspire your heart, and deepen your connection with God. Join us as we worship, learn, and grow together as a community. We look forward to celebrating God’s love and grace with you today!</p>
      <Footer />
    </section>
  );
};

export { Header, ServiceTimes };