import React, { useState } from "react";

const PrayerRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    prayerRequest: "",
    contactNeeded: "N", // Default to "No"
    contactInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can add your form submission logic here (e.g., API call)
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
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
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
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default PrayerRequest;