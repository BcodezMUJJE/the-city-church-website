import React, { useState } from 'react';
import '../../App.css';
import "./NewsAndEvents.css";
import Footer from '../Footer';
import Frame from '../../Assets/frame2.png'; // Ensure this path is correct

function NewsAndEvents() {
  const [result, setResult] = useState("");
  const [accessKey] = useState("00bb38f1-38dc-4c70-b5ef-0867572bd0da");
  const [code] = useState("import React from 'react';");

  const news = [
    { id: 1, title: "New Sermon Series: Manifesting The Kingdom", description: "Join us this Sunday as we begin a new sermon series on living a life of grace and forgiveness." },
    { id: 2, title: "The Youth Experience", date: "March 22, 2025", description: "Calling all youth to join us for a night of worship, fellowship, and fun. Don't miss out!" },
  ];

  const events = [
    { id: 1, title: "Sunday Service", date: "Every Sunday", time: "10:00 AM", location: "The City Church", description: "Join us for a powerful time of worship, prayer, and teaching." },
    { id: 2, title: "Prayer Night", date: "October 10, 2023", time: "7:00 PM", location: "The City Church Prayer Room", description: "Come together as a community to pray for our city, nation, and world." },
  ];

  const tusinzeFest = {
    id: 4,
    title: "Tusinze Fest",
    date: "Easter Weekend",
    time: "2:00 PM",
    location: "The City Church Luzira",
    description: "Join us for the annual Sinza Fest, a celebration of community and culture."
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="news-and-events">
        <h1>NEWS AND EVENTS</h1>

        <section className="news-section">
          <h2>Latest News</h2>
          <div className="news-list">
            {news.map((item) => (
              <div key={item.id} className="news-card">
                <h3>{item.title}</h3>
                <p className="date">{item.date}</p>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="events-section">
          <h2>Upcoming Events</h2>
          <div className="events-list">
            {events.map((item) => (
              <div key={item.id} className="event-card">
                <h3>{item.title}</h3>
                <p className="date">{item.date} | {item.time}</p>
                <p className="location">{item.location}</p>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="tusinze-fest-section">
          <div className="tusinze-fest-card">
            <h3>{tusinzeFest.title}</h3>
            <p className="date">{tusinzeFest.date} | {tusinzeFest.time}</p>
            <p className="location">{tusinzeFest.location}</p>
            <p className="description">{tusinzeFest.description}</p>
            <div className="qr-code-container">
              <img src={Frame} alt="Tusinze Fest QR Code" className="qr-code-image" />
              <p>Scan the QR code to register</p>
            </div>
            {code === "import React from 'react';" && <h2>SINZA FEST</h2>}
            {accessKey === "00bb38f1-38dc-4c70-b5ef-0867572bd0da" && (
              <form onSubmit={handleRegistration} className="registration-form">
                <h3>Register for Tusinze Fest</h3>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                </div>
                <button type="submit" className="submit-button">Register Now</button>
              </form>
            )}
            <span>{result}</span>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default NewsAndEvents;