import React from 'react';
import Footer from './Footer';

const FitForLife = () => {
  const handleApplyClick = () => {
    window.location.href = "https://thecitychurchluzira.churchcenter.com/people/forms/938149";
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>Fit for Life</h1>
        <p>An initiative by The City Church to empower members with business and life skills.</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.h2}>About Fit for Life</h2>
        <p>
          Fit for Life is a transformative initiative designed to equip church members with the skills and knowledge needed to succeed in business and personal development. From business planning to financial management, our program offers practical tools and mentorship to help you thrive.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Upcoming Events</h2>
        <ul style={styles.list}>
          <li><strong>Business Planning Workshop:</strong> March 15, 2024</li>
          <li><strong>Financial Management Seminar:</strong> April 10, 2024</li>
          <li><strong>Networking Mixer:</strong> May 5, 2024</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Testimonials</h2>
        <div style={styles.testimonial}>
          <p>"Fit for Life changed my perspective on business. I now have a clear plan for my startup!" - Matege Billbright</p>
        </div>
        <div style={styles.testimonial}>
          <p>"The financial management seminar was eye opening. I feel more confident managing my finances." - Julius Oboth</p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Join Fit for Life</h2>
        <button 
          onClick={handleApplyClick} 
          style={styles.button}
        >
          Join Now
        </button>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
    maxWidth: '1755px',
    margin: '0 auto',
  },
  header: {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
  },
  section: {
    margin: '20px 0',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  h2: {
    color: 'black',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  testimonial: {
    backgroundColor: '#e0f7fa',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '8px',
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#e67e22', // Darker orange
      transform: 'scale(1.05)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    },
    ':active': {
      transform: 'scale(0.98)'
    }
  },

  // Media Queries for Responsive Design
  '@media (max-width: 1200px)': {
    app: {
      padding: '15px',
    },
    header: {
      padding: '15px',
    },
    section: {
      padding: '15px',
    },
  },

  '@media (max-width: 1024px)': {
    app: {
      padding: '10px',
    },
    header: {
      padding: '10px',
    },
    section: {
      padding: '10px',
    },
  },

  '@media (max-width: 768px)': {
    app: {
      padding: '10px',
    },
    header: {
      padding: '10px',
    },
    section: {
      padding: '10px',
    },
  },

  '@media (max-width: 480px)': {
    app: {
      padding: '5px',
    },
    header: {
      padding: '10px',
    },
    section: {
      padding: '10px',
    },
    button: {
      width: '100%',
      padding: '15px',
    },
  },

  '@media (max-width: 320px)': {
    app: {
      padding: '5px',
    },
    header: {
      padding: '8px',
    },
    section: {
      padding: '8px',
    },
    button: {
      width: '100%',
      padding: '12px',
    },
  },
};

export default FitForLife;
