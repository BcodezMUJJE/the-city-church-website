import React, { useState } from "react";

const PrayerRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    prayerRequest: "",
    contactNeeded: "No", // Default to "No"
    contactInfo: "",
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
    formDataToSend.append("name", formData.name);
    formDataToSend.append("prayerRequest", formData.prayerRequest);
    formDataToSend.append("contactNeeded", formData.contactNeeded);
    formDataToSend.append("contactInfo", formData.contactInfo);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.success) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          prayerRequest: "",
          contactNeeded: "N",
          contactInfo: "",
        });
        // Redirect to the specified link after successful submission
        window.location.href = "https://thecitychurchluzira.churchcenter.com/people/forms/938154";
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
      <h2 style={styles.heading}>Need Prayer?</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Name Field */}
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name (optional):
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter your name"
          />
        </div>

        {/* Prayer Request Field */}
        <div style={styles.formGroup}>
          <label htmlFor="prayerRequest" style={styles.label}>
            Prayer Request:
          </label>
          <textarea
            id="prayerRequest"
            name="prayerRequest"
            value={formData.prayerRequest}
            onChange={handleChange}
            style={{ ...styles.input, height: "100px" }}
            placeholder="Enter your prayer request"
            required
          />
        </div>

        {/* Contact Needed Dropdown */}
        <div style={styles.formGroup}>
          <label htmlFor="contactNeeded" style={styles.label}>
            Need someone to contact you?
          </label>
          <select
            id="contactNeeded"
            name="contactNeeded"
            value={formData.contactNeeded}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </div>

        {/* Contact Info Field (Conditional) */}
        {formData.contactNeeded === "Y" && (
          <div style={styles.formGroup}>
            <label htmlFor="contactInfo" style={styles.label}>
              Contact Info:
            </label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your contact info"
              required
            />
          </div>
        )}

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
    maxWidth: "1400px",
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

  // Media Queries for Laptops and Desktops
  "@media (min-width: 1024px)": {
    container: {
      maxWidth: "800px", // Wider container for laptops
    },
    heading: {
      fontSize: "32px", // Larger font size for laptops
    },
    label: {
      fontSize: "18px", // Larger font size for laptops
    },
    input: {
      fontSize: "18px", // Larger font size for laptops
    },
    button: {
      width: "40%", // Slightly narrower button for laptops
      fontSize: "18px", // Larger font size for laptops
    },
  },

  "@media (min-width: 1440px)": {
    container: {
      maxWidth: "1000px", // Wider container for desktops
    },
    heading: {
      fontSize: "36px", // Larger font size for desktops
    },
    label: {
      fontSize: "20px", // Larger font size for desktops
    },
    input: {
      fontSize: "20px", // Larger font size for desktops
    },
    button: {
      width: "30%", // Narrower button for desktops
      fontSize: "20px", // Larger font size for desktops
    },
  },
};

export default PrayerRequest;
