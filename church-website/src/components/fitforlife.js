import React from 'react';
import Footer from './Footer';

const FitForLife = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Append your Web3Forms access key
    formData.append("access_key", "00bb38f1-38dc-4c70-b5ef-0867572bd0da");

    // Append the label to the FormData
    formData.append("label", "Fit For Life"); // Add the label here

    // Submit the form data to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); // Reset the form after successful submission
      
      // Redirect to the specified link after successful submission
      window.location.href = "https://thecitychurchluzira.churchcenter.com/people/forms/938149";
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
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
        <h2 style={styles.h2}>Contact Us</h2>
        <form onSubmit={onSubmit} style={styles.form}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input type="text" id="name" name="name" required style={styles.input} />

          <label htmlFor="email" style={styles.label}>Email:</label>
          <input type="email" id="email" name="email" required style={styles.input} />

          <label htmlFor="message" style={styles.label}>Message:</label>
          <textarea id="message" name="message" rows="4" required style={styles.textarea}></textarea>

          <button type="submit" style={styles.button}>Send</button>
        </form>
        <span style={styles.result}>{result}</span>
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
    maxWidth: '1655px',
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    margin: '10px 0 5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxWidth: '500px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxWidth: '500px',
  },
  button: {
    backgroundColor: 'orange',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  footer: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '8px',
  },
  result: {
    marginTop: '10px',
    color: '#4CAF50',
    fontWeight: 'bold',
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
    input: {
      width: '90%',
    },
    textarea: {
      width: '90%',
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
    input: {
      width: '90%',
    },
    textarea: {
      width: '90%',
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
    input: {
      width: '100%',
    },
    textarea: {
      width: '100%',
    },
    button: {
      width: '100%',
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
    input: {
      width: '100%',
    },
    textarea: {
      width: '100%',
    },
    button: {
      width: '100%',
    },
  },
};

export default FitForLife;
