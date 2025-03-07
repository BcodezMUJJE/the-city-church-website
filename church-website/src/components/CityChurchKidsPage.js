import React from 'react';
import img1 from '../Assets/Smile.jpg';
import img2 from '../Assets/bib.jpg';
import img3 from '../Assets/gifts.jpg';
import img4 from '../Assets/dance.jpg';
import img5 from '../Assets/sing.jpg';
import img6 from '../Assets/joy.jpg';
import Footer from './Footer';

const CityChurchKidsPage = () => {
  // Function to check screen width and return styles accordingly
  const getStyles = () => {
    const screenWidth = window.innerWidth;

    // Base styles
    const baseStyles = {
      page: {
        fontFamily: '"Arial", sans-serif',
        backgroundColor: '#f9f9f9',
        color: '#333',
        textAlign: 'center',
        padding: '15px',
      },
      header: {
        color: '#333',
        marginBottom: '20px',
      },
      subHeader: {
        color: '#4a90e2',
        marginBottom: '25px',
      },
      section: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        margin: '15px auto',
        maxWidth: '100%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      list: {
        listStyleType: 'none',
        padding: '0',
      },
      listItem: {
        fontSize: '18px',
        margin: '10px 0',
        color: '#555',
      },
      button: {
        backgroundColor: '#4a90e2',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '20px',
      },
      imageCardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        marginTop: '20px',
      },
      imageCard: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      image: {
        width: '100%',
        height: 'auto',
      },
      imageCaption: {
        padding: '15px',
        fontSize: '18px',
        color: '#555',
      },
    };

    // Media queries for different screen sizes
    if (screenWidth < 600) {
      return {
        ...baseStyles,
        header: { ...baseStyles.header, fontSize: '28px' },
        subHeader: { ...baseStyles.subHeader, fontSize: '20px' },
        listItem: { ...baseStyles.listItem, fontSize: '16px' },
        button: { ...baseStyles.button, padding: '8px 16px' },
        imageCardContainer: {
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        },
        imageCaption: { ...baseStyles.imageCaption, fontSize: '16px' },
      };
    } else if (screenWidth >= 600 && screenWidth < 1024) {
      return {
        ...baseStyles,
        header: { ...baseStyles.header, fontSize: '36px' },
        subHeader: { ...baseStyles.subHeader, fontSize: '24px' },
        listItem: { ...baseStyles.listItem, fontSize: '18px' },
        button: { ...baseStyles.button, padding: '10px 20px' },
        imageCardContainer: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        },
        imageCaption: { ...baseStyles.imageCaption, fontSize: '18px' },
      };
    } else if (screenWidth >= 1024) {
      return {
        ...baseStyles,
        header: { ...baseStyles.header, fontSize: '48px' },
        subHeader: { ...baseStyles.subHeader, fontSize: '28px' },
        listItem: { ...baseStyles.listItem, fontSize: '20px' },
        button: { ...baseStyles.button, padding: '10px 20px' },
        imageCardContainer: {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        },
        imageCaption: { ...baseStyles.imageCaption, fontSize: '18px' },
      };
    }

    // Fallback for very small screens (e.g., smartwatches or extremely small devices)
    return {
      ...baseStyles,
      header: { ...baseStyles.header, fontSize: '18px' },
      subHeader: { ...baseStyles.subHeader, fontSize: '14px' },
      listItem: { ...baseStyles.listItem, fontSize: '12px' },
      button: { ...baseStyles.button, padding: '5px 10px' },
      imageCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      },
      imageCaption: { ...baseStyles.imageCaption, fontSize: '12px' },
    };
  };

  const styles = getStyles();

  // Sample data for children's activities
  const childrenActivities = [
    {
      image: img1,
      caption: 'Spreading joy and sunshine with a bright smile!',
    },
    {
      image: img2,
      caption: 'Learning God\'s word and growing in faith, every Sunday!',
    },
    {
      image: img3,
      caption: 'From the Children\'s Ministry: Bringing stories to life through fun and creative skits!',
    },
    {
      image: img4,
      caption: 'Sunday School fun: Dancing with joy and praising in every step!',
    },
    {
      image: img5,
      caption: 'Sunday School fun: Dancing with joy and praising in every step!',
    },
    {
      image: img6,
      caption: 'Every Sunday, our children arrive with smiles and joy, excited to learn and grow in God\'s love!',
    },
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.header}>The Children's Ministry</h1>
      <h2 style={styles.subHeader}>Here Are Some Of Our Weekly Sunday School Programs</h2>

      <div style={styles.section}>
        <h2>Sunday School Welcomes You</h2>
        <p>
          The City Kids Children's Ministry is a vibrant and engaging program designed for children aged 4-12, focusing on sharing the love of Jesus Christ and helping them develop a strong spiritual foundation.
        </p>
      </div>

      <div style={styles.section}>
        <h3>Our Sunday School Program</h3>
        <p>
          Our Sunday School program is designed to help children grow in their faith, learn about the Bible, and develop a personal relationship with Jesus Christ. We offer age-appropriate classes, engaging activities, and opportunities for children to connect with God and each other. Here's what we do in our Sunday School:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Pray together, building a strong spiritual connection.</li>
          <li style={styles.listItem}>Play fun games that teach teamwork and God's love.</li>
          <li style={styles.listItem}>Read and learn from the Bible through interactive lessons.</li>
          <li style={styles.listItem}>Enjoy delicious biscuits as a special treat.</li>
          <li style={styles.listItem}>Celebrate birthdays and make everyone feel special.</li>
          <li style={styles.listItem}>Listen to the Word of God through exciting stories and teachings.</li>
        </ul>
      </div>

      {/* Children's Activities Section */}
      <div style={styles.section}>
        <h3>Children's Activities</h3>
        <p>
          Our children are actively involved in various fun and educational activities at the church. Check out some of their moments below!
        </p>
        <div style={styles.imageCardContainer}>
          {childrenActivities.map((activity, index) => (
            <div key={index} style={styles.imageCard}>
              <img src={activity.image} alt={activity.caption} style={styles.image} />
              <p style={styles.imageCaption}>{activity.caption}</p>
            </div>
          ))}
        </div>
      </div>

      <button style={styles.button}>Join Us This Sunday! 🎉</button>
    </div>
  );
};
<Footer />

export default CityChurchKidsPage;