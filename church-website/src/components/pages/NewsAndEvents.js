import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import "./NewsAndEvents.css";
import Footer from '../Footer';

function NewsAndEvents() {
  // Sample data for news
  const news = [
    {
      id: 1,
      title: "New Sermon Series: Living in Grace",
      date: "October 1, 2023",
      description: "Join us this Sunday as we begin a new sermon series on living a life of grace and forgiveness.",
      link: "#"
    },
    {
      id: 2,
      title: "Community Outreach Program",
      date: "September 25, 2023",
      description: "We are excited to announce our new community outreach program to support local families in need.",
      link: "#"
    },
    {
      id: 3,
      title: "Youth Camp Registration Open",
      date: "September 20, 2023",
      description: "Registration is now open for our annual youth camp. Don't miss this life-changing experience!",
      link: "#"
    }
  ];

  // Sample data for events
  const events = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "10:00 AM",
      location: "The City Church Main Hall",
      description: "Join us for a powerful time of worship, prayer, and teaching.",
      link: "#"
    },
    {
      id: 2,
      title: "Prayer Night",
      date: "October 10, 2023",
      time: "7:00 PM",
      location: "The City Church Prayer Room",
      description: "Come together as a community to pray for our city, nation, and world.",
      link: "#"
    },
    {
      id: 3,
      title: "Family Fun Day",
      date: "October 22, 2023",
      time: "12:00 PM",
      location: "City Park",
      description: "A day of fun, food, and fellowship for the whole family. Bring your friends!",
      link: "#"
    }
  ];

  return (
    <div className="news-and-events">
      <h1>NEWS AND EVENTS</h1>

      {/* News Section */}
      <section className="news-section">
        <h2>Latest News</h2>
        <div className="news-list">
          {news.map((item) => (
            <div key={item.id} className="news-card">
              <h3>{item.title}</h3>
              <p className="date">{item.date}</p>
              <p className="description">{item.description}</p>
              <a href={item.link} className="read-more">Read More</a>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-list">
          {events.map((item) => (
            <div key={item.id} className="event-card">
              <h3>{item.title}</h3>
              <p className="date">{item.date} | {item.time}</p>
              <p className="location">{item.location}</p>
              <p className="description">{item.description}</p>
              <a href={item.link} className="register-now">Learn More</a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

// Only one default export allowed per module
export default NewsAndEvents;