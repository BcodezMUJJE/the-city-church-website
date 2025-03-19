import React, { useState } from "react";

const SupportMission = () => {
  const [formData, setFormData] = useState({
    missionName: "",
    supportType: "",
    email: "",
    telephone: "",
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
    formDataToSend.append("missionName", formData.missionName);
    formDataToSend.append("supportType", formData.supportType);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("telephone", formData.telephone);
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
          missionName: "",
          supportType: "",
          email: "",
          telephone: "",
          contactPreference: "email",
        });
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
      <h2 style={styles.heading}>Support a Mission</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Name of Mission Dropdown */}
        <div style={styles.formGroup}>
          <label htmlFor="missionName" style={styles.label}>
            Name of Mission:
          </label>
          <select
            id="missionName"
            name="missionName"
            value={formData.missionName}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select a mission</option>
            <option value="Mission 1">Mission 1</option>
            <option value="Mission 2">Mission 2</option>
            <option value="Mission 3">Mission 3</option>
          </select>
        </div>

        {/* Type of Support Dropdown */}
        <div style={styles.formGroup}>
          <label htmlFor="supportType" style={styles.label}>
            Type of Support:
          </label>
          <select
            id="supportType"
            name="supportType"
            value={formData.supportType}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select type of support</option>
            <option value="financial">Financial</option>
            <option value="non-financial">Non-Financial</option>
          </select>
        </div>

        {/* Email Field */}
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
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

        {/* Telephone Number Field */}
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

        {/* Contact Preference Radio Buttons */}
        <div style={styles.formGroup}>
          <label style={styles.label}>How do you prefer to be contacted:</label>
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

        {/* Submit Button */}
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
    marginBottom: "3rem",
    maxWidth: "900px",
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

export default SupportMission;