import React from 'react';
import '../../App.css'; // Assuming global styles are here
import "./NewsAndEvents.css"; // Styles specific to this component
import Footer from '../Footer'; // Footer component
import NewsImage1 from '../../Assets/royalWomen.jpg'; // Ensure path is correct (src/assets/)
import NewsImage2 from '../../Assets/sunday.jpeg';   // Ensure path is correct (src/assets/)
// Add other image imports if needed

function NewsAndEvents() {
  // --- Data for News Section ---
  const news = [
    {
      id: 1,
      title: "New Sermon Series: Dynamics Of Spiritual Warfare",
      date: "April 7, 2025", // Ensure date format consistency
      description: "Join us this Sunday as we begin a new sermon series on living a life of grace and forgiveness.",
      image: NewsImage2, // Use appropriate image variable
      // link: "/news/sermon-series-grace" // Example link (optional)
    },
    {
      id: 2,
      title: "The Youth Experience",
      date: "Every Last Saturday of the Month",
      description: "Calling all youth to join us for a night of worship, fellowship, and fun. Don't miss out!",
      image: NewsImage1, // Use appropriate image variable
      // link: "/news/youth-experience" // Example link (optional)
    },
    // Add more news items if needed
  ];

  // --- Data for Events Section ---
  const events = [
    {
      id: 1,
      title: "Sunday Service",
      date: "Every Sunday",
      time: "8:00 & 10:00 am",
      location: "The City Church",
      description: "Join us for our weekly Sunday service filled with worship, teaching, and community.",
      image: NewsImage1, // Use appropriate image variable
      // registrationLink: "/events/sunday-service" // Example link (optional)
    },
    {
      id: 2,
      title: "Round Table Discussion",
      date: "Every Last Thursday of the Month",
      time: "4:00 pm",
      location: "The City Church",
      description: "Join us for a round table discussion on various topics affecting our community.",
      image: NewsImage1, // Use appropriate image variable
      // registrationLink: "/events/sunday-service" // Example link (optional)
    },
    {
      id: 3,
      title: "21 Days of Prayer and Fasting",
      date: "From 1st August to 22nd August", // Note: This date is in the past
      time: "7:00 pm",
      location: "The City Church Prayer",
      description: "Come together as a community to pray for our city, nation, and world.",
      image: NewsImage2, // Use appropriate image variable
      // registrationLink: "/events/prayer-night" // Example link (optional)
    },
    {
      id: 4,
      title: "Royal Women's Fellowship",
      date: "Every Sunday",
      time: "10:00 am",
      location: "The City Church",
      description: "Join us for a powerful time of worship, prayer, and teaching.",
      image: NewsImage1, // Use appropriate image variable
      // registrationLink: "/events/sunday-service" // Example link (optional)
    },
    {
      id: 5,
      title: "Kings Men's Fellowship",
      date: "Every Last Sunday of the Month",
      time: "4:00 pm",
      location: "The City Church",
      description: "Join us for a powerful time of worship, prayer, and teaching.",
      image: NewsImage1, // Use appropriate image variable
      // registrationLink: "/events/sunday-service" // Example link (optional)
    },
  ];

  // --- Data for Tusinze Fest ---
  const tusinzeFest = {
    id: 4, // Ensure ID is unique if combining lists later
    title: "Youth Confest",
    date: "19th Saturday", // Consider specific dates
    time: "2:00 PM",
    location: "The City Church Luzira",
    description: "Join us for the annual Sinza Fest, a celebration of community and culture.",
    image: NewsImage1, // Use appropriate image variable
    // registrationLink: "/events/tusinze-fest" // Example link (optional)
  };

  return (
    <>
      <div className="news-and-events">
        <h1>NEWS AND EVENTS</h1>

        {/* News Section */}
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
                  {/* Optional: Add Read More link if item.link exists */}
                  {/* {item.link && <a href={item.link} className="read-more">Read More</a>} */}
                </div>
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
                <div className="card-image-container">
                  <img src={item.image} alt={item.title} className="card-image" />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p className="date">{item.date} | {item.time}</p>
                  <p className="location">{item.location}</p>
                  <p className="description">{item.description}</p>
                  {/* Optional: Add Register Now link if item.registrationLink exists */}
                  {/* {item.registrationLink && <a href={item.registrationLink} className="register-now">Register Now</a>} */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tusinze Fest Section */}
        <section className="tusinze-fest-section">
          {/* You might want a heading for this section too */}
          {/* <h2>Special Event</h2> */}
          <div className="tusinze-fest-card">
            <div className="card-image-container">
              <img src={tusinzeFest.image} alt={tusinzeFest.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3>{tusinzeFest.title}</h3>
              <p className="date">{tusinzeFest.date} | {tusinzeFest.time}</p>
              <p className="location">{tusinzeFest.location}</p>
              <p className="description">{tusinzeFest.description}</p>
              {/* Optional: Add Register Now link if tusinzeFest.registrationLink exists */}
              {/* {tusinzeFest.registrationLink && <a href={tusinzeFest.registrationLink} className="register-now">Register Now</a>} */}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default NewsAndEvents;
