import React from 'react';
import '../../App.css';
import "./NewsAndEvents.css";
import Footer from '../Footer';
import NewsImage1 from '../../Assets/royalWomen.jpg';
import NewsImage2 from '../../Assets/sunday.jpeg';

function NewsAndEvents() {
  const news = [
    { 
      id: 1, 
      title: "New Sermon Series: Dynamic Of Manifesting The Kingdom Of God", 
      date: "April 7, 2025",
      description: "Join us this Sunday as we begin a new sermon series on living a life of grace and forgiveness.",
      image: NewsImage2
    },
    { 
      id: 2, 
      title: "The Youth Experience", 
      date: "March 22, 2025", 
      description: "Calling all youth to join us for a night of worship, fellowship, and fun. Don't miss out!",
      image: NewsImage1
    },
  ];

  const events = [
    { 
      id: 1, 
      title: "Sunday Service", 
      date: "Every Sunday", 
      time: "10:00 AM", 
      location: "The City Church", 
      description: "Join us for a powerful time of worship, prayer, and teaching.",
      image: NewsImage1
    },
    { 
      id: 2, 
      title: "Prayer Night", 
      date: "October 10, 2023", 
      time: "7:00 PM", 
      location: "The City Church Prayer Room", 
      description: "Come together as a community to pray for our city, nation, and world.",
      image: NewsImage1
    },
  ];

  const tusinzeFest = {
    id: 4,
    title: "Tusinze Fest",
    date: "Easter Weekend",
    time: "2:00 PM",
    location: "The City Church Luzira",
    description: "Join us for the annual Sinza Fest, a celebration of community and culture.",
    image: NewsImage1
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
                <div className="card-image-container">
                  <img src={item.image} alt={item.title} className="card-image" />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p className="date">{item.date}</p>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="events-section">
          <h2>Upcoming Events</h2>
          <div className="events-list">
            {events.map((item) => (
              <div key={item.id} className="event-card">
                <div className="card-image-container">
                  <img src={item.image} alt={item.title} className="card-image" />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p className="date">{item.date} | {item.time}</p>
                  <p className="location">{item.location}</p>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="tusinze-fest-section">
          <div className="tusinze-fest-card">
            <div className="card-image-container">
              <img src={tusinzeFest.image} alt={tusinzeFest.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3>{tusinzeFest.title}</h3>
              <p className="date">{tusinzeFest.date} | {tusinzeFest.time}</p>
              <p className="location">{tusinzeFest.location}</p>
              <p className="description">{tusinzeFest.description}</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default NewsAndEvents;