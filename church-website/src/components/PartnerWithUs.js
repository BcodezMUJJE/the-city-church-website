/*

import React, { useState } from "react";

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    partnerType: "",
    name: "",
    email: "",
    telephone: "",
    location: "",
    amount: "",
    frequency: "",
    contactPreference: "email", // Default to email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Web3Forms integration
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "00bb38f1-38dc-4c70-b5ef-0867572bd0da");
    formDataToSend.append("partnerType", formData.partnerType);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("telephone", formData.telephone);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("amount", formData.amount);
    formDataToSend.append("frequency", formData.frequency);
    formDataToSend.append("contactPreference", formData.contactPreference);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.success) {
        alert("Form submitted successfully!");
        setFormData({
          partnerType: "",
          name: "",
          email: "",
          telephone: "",
          location: "",
          amount: "",
          frequency: "",
          contactPreference: "email",
        });

        // Redirect to the partnership form link after successful submission
        window.location.href = "https://thecitychurchluzira.churchcenter.com/people/forms/938160"; // Replace with the actual form URL
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Partner with Us</h2>
      <p style={styles.description}>
        The City Church is a vibrant Church community in Uganda with multiple
        locations, including Iganga and Kirinya. The City Church is committed to
        spreading the love of Christ and serving the community. Our mission is to
        disciple individuals, plant life-giving churches, and catalyze spiritual
        renewal.
      </p>
      <p style={styles.description}>
        Doing this has helped us reach many people with the Gospel of Jesus and
        resources that are changing their lives and ministries. Would you like to
        partner with us?
      </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <div style={styles.formGroup}>
          <label htmlFor="partnerType" style={styles.label}>
            Partner Type:
          </label>
          <select
            id="partnerType"
            name="partnerType"
            value={formData.partnerType}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select partner type</option>
            <option value="Organization">Organization</option>
            <option value="Personal">Personal</option>
          </select>
        </div>

        
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your name"
            required
          />
        </div>

        
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your email"
            required
          />
        </div>

        
        <div style={styles.formGroup}>
          <label htmlFor="telephone" style={styles.label}>
            Telephone Number:
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your telephone number"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="location" style={styles.label}>
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your location"
            required
          />
        </div>

       
        <div style={styles.formGroup}>
          <label htmlFor="amount" style={styles.label}>
            Amount:
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter the amount"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="frequency" style={styles.label}>
            Frequency:
          </label>
          <input
            type="text"
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter the frequency (e.g., monthly)"
            required
          />
        </div>

      
        <div style={styles.formGroup}>
          <label style={styles.label}>How would you like to be contacted:</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="contactPreference"
                value="email"
                checked={formData.contactPreference === "email"}
                onChange={handleChange}
              />
              Email
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                name="contactPreference"
                value="phone"
                checked={formData.contactPreference === "phone"}
                onChange={handleChange}
              />
              Phone
            </label>
          </div>
        </div>

        
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

// Styles
const styles = {
  container: {
    marginTop: "3rem",
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "1600px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(42, 39, 39, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
    fontSize: "28px", // Default font size
  },
  description: {
    textAlign: "center",
    color: "#555",
    fontSize: "16px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "orange",
    fontSize: "16px", // Default font size
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px", // Default font size
  },
  radioGroup: {
    display: "flex",
    gap: "20px", // Space between radio buttons
  },
  radioLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px", // Space between radio button and label
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "orange",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    width: "50%",
    transition: "background-color 0.3s ease, transform 0.2s ease", // Smooth transitions
    ":hover": {
      backgroundColor: "#e65c00", // Darker shade of orange on hover
    },
    ":active": {
      backgroundColor: "#cc5200", // Even darker shade on click
      transform: "scale(0.98)", // Slightly shrink the button on click
    },
  },

  // Media Queries for Responsiveness
  "@media (max-width: 768px)": {
    container: {
      maxWidth: "90%", // Adjust width for tablets
      padding: "15px",
    },
    heading: {
      fontSize: "24px", // Smaller font size for tablets
    },
    description: {
      fontSize: "14px", // Smaller font size for tablets
    },
    label: {
      fontSize: "14px", // Smaller font size for tablets
    },
    input: {
      fontSize: "14px", // Smaller font size for tablets
    },
    button: {
      width: "100%", // Full width for tablets
      fontSize: "14px", // Smaller font size for tablets
    },
  },

  "@media (max-width: 480px)": {
    container: {
      maxWidth: "100%", // Full width for mobile
      padding: "10px",
    },
    heading: {
      fontSize: "20px", // Smaller font size for mobile
    },
    description: {
      fontSize: "12px", // Smaller font size for mobile
    },
    label: {
      fontSize: "12px", // Smaller font size for mobile
    },
    input: {
      fontSize: "12px", // Smaller font size for mobile
    },
    button: {
      width: "100%", // Full width for mobile
      fontSize: "12px", // Smaller font size for mobile
    },
  },
};

export default PartnerWithUs;

*/