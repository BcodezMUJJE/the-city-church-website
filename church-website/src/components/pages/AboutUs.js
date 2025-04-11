import React from 'react';
import './AboutUs.css'; // Import the CSS file
import Footer from '../Footer'; // Import the Footer component
// --- Ensure these paths are correct relative to AboutUs.js ---
// --- Assumes 'Assets' folder is inside /src/assets/ ---
import Img1 from '../../Assets/Muta.jpg';
import Img2 from '../../Assets/Onenz.webp';
import Img3 from '../../Assets/Judith.webp';
import Img4 from '../../Assets/Kira.webp';
import Img5 from '../../Assets/Moli.webp';
import Img6 from '../../Assets/Marth.webp';
import Img7 from '../../Assets/Ron.jpg';
import Img8 from '../../Assets/Tan.jpg';
import Img9 from '../../Assets/Felix.jpeg'; // Assuming you have a placeholder image for Yvvone


// Helper function for generating placeholders ONLY when needed
const getPlaceholderAvatar = (name) => {
  const nameParts = name.split(' ');
  let initials = nameParts[0] ? nameParts[0][0] : '?';
  if (nameParts.length > 1 && nameParts[nameParts.length - 1]) {
    initials += nameParts[nameParts.length - 1][0];
  } else if (nameParts[0]?.length > 1) {
      initials = nameParts[0].substring(0, 2);
  }
  initials = initials.toUpperCase();
  return `https://placehold.co/80x80/EFEFEF/AAAAAA?text=${initials}&font=roboto`;
};


function AboutUs() {

  // --- Structured Data with Correct Avatar Assignment ---
  const leadership = [
    // --- Use imported images directly ---
    { name: "Pastor Alex Mutagubya & Faith Mutagubya", title: "Lead Pastors The City Churches", avatar: Img1 },
    { name: "Pastor Dennis & Becky Onen", title: "Youth Pastors The City Churches", avatar: Img2 },
    { name: "Pastor Judith", title: "Executive Pastor The City Churches", avatar: Img3 },
    { name: "Pastor Lillian & Simon Kirabo", title: "Location Pastors, The City Church Iganga", avatar: Img4 },
    { name: "Pastor Derrick & Deborah Mooli", title: "Location Pastors, The City Church Kirinya", avatar: Img5 },
    { name: "Pastor Martha Banalya", title: "Location Pastor, The City Church Luzira", avatar: Img6 },
    // --- End direct image usage ---
  ];

  const elders = [
    // --- Use placeholders for elders (replace names if needed) ---
    { name: "Mr & Mrs. Masika", avatar: getPlaceholderAvatar("Masika") },
    { name: "Mr & Mrs. Kidaha", avatar: getPlaceholderAvatar("Kidaha") },
    { name: "Mr & Mrs. Malooba", avatar: getPlaceholderAvatar("Malooba") },
  ];

  // Use placeholders for ministry heads (replace names/initials if needed)
  const ministries = [
    { name: "Media Ministry", head: "Mr. Felix Bwire", description: "Handling all media and communication needs.", avatar:Img9 },
    { name: "Sound Ministry", head: "Mr. Tanzi Derrick", description: "Managing audio for services and events.", avatar:Img8 },
    { name: "Children Ministry", head: "Mrs. Lydia Biira", description: "Nurturing the faith of our children.", avatar: Img5 }, // Re-using placeholder
    { name: "King Men Ministry", head: "Mr Bwenje", description: "Empowering the men of the church.", avatar: Img8 },
    { name: "Tusinze Band", head: "Mr. Ronald Simbwa", description: "Leading worship and music ministry.", avatar:Img7 },
    { name: "Care Ministry", head: "Mr & Mrs. Malooba", description: "Providing care and support to the congregation.", avatar: Img5}, // Re-using placeholder
    { name: "First Impressions", head: "Yvvone", description: "Welcoming and assisting newcomers.", avatar: Img8 }, // Re-using placeholder
    { name: "Royal Women Ministry", head: "Yvvone", description: "Empowering women to greatness.", avatar:Img8 }, // Re-using placeholder
  ];


  return (
    <>
      <div className="story-container">
        <div className="title-section">
          <p>A Beacon of Hope: Transforming Lives Across Uganda</p>
        </div>

        <div className="content-section">
          {/* Introduction */}
          <p>
            The City Church, a vibrant Christian community, has been a
            source of hope, spiritual growth, and transformation in Luzira,
            Kampala, for many years. Under the leadership of Pastor Alex
            Mutagubya and Pastor Faith Mutagubya, the church has grown into a
            thriving congregation that impacts lives and communities.
          </p>
          <p>
            With multiple locations across Uganda, including Iganga and Kirinya,
            The City Church is committed to spreading the love of Christ and
            serving the community. Our mission is to disciple individuals, plant
            life-giving churches, and catalyze spiritual renewal.
          </p>

          {/* Leadership Section */}
          <h2>Our Leadership</h2>
          <p>
            The City Church is led by a dedicated team of pastors and leaders who
            are passionate about serving God and the community:
          </p>
          <ul className="people-list">
            {leadership.map((leader, index) => (
              <li key={`leader-${index}`}>
                {/* This will now use the correct image path or placeholder URL */}
                <img src={leader.avatar} alt={leader.name} className="avatar-image" />
                <div className="person-details">
                  <strong>{leader.name}</strong> - {leader.title}
                </div>
              </li>
            ))}
          </ul>

          {/* Elders Section */}
          <h2>Our Elders</h2>
          <p>
            We are blessed with wise and dedicated elders who provide spiritual oversight and guidance:
          </p>
          <ul className="people-list">
             {elders.map((elder, index) => (
              <li key={`elder-${index}`}>
                <img src={elder.avatar} alt={elder.name} className="avatar-image" />
                <div className="person-details">
                  <strong>{elder.name}</strong>
                </div>
              </li>
            ))}
          </ul>

          {/* Ministries Section */}
          <h2>Our Ministries</h2>
          <p>
            The City Church Luzira is actively involved in various ministries
            that cater to the spiritual, social, and economic needs of the
            community, each led by committed individuals:
          </p>
          <ul className="people-list ministry-list">
            {ministries.map((ministry, index) => (
               <li key={`ministry-${index}`}>
                <img src={ministry.avatar} alt={ministry.head} className="avatar-image" />
                <div className="person-details">
                  <strong>{ministry.name}</strong> (Led by: {ministry.head})<br />
                  <span className="ministry-description">{ministry.description}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Location Section */}
          <h2>Our Location</h2>
          <p>
            We are located in Luzira, Kampala, Uganda. Join us for our services
            and events!
          </p>
          <div className="map-container">
            <iframe
              title="The City Church Luzira Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.751911688117!2d32.6348!3d0.3148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb9f6751756d%3A0x5b33f8f86751756d!2sThe%20City%20Church%20Luzira!5e0!3m2!1sen!2sug!4v1678886050000!5m2!1sen!2sug" // ** REPLACE WITH YOUR ACTUAL EMBED URL **
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* <Slider /> */}
      <Footer />
    </>
  );
}

export default AboutUs;
