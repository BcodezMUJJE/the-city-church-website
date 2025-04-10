/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SupportMission = () => {
  // eslint-disable-next-line
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    missionName: "",
    supportType: "",
    email: "",
    telephone: "",
    contactPreference: "email",
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
    window.location.href = "https://thecitychurchluzira.churchcenter.com/people/forms/938178";
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Support a Mission</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="missionName" style={styles.label}>Name of Mission:</label>
          <select id="missionName" name="missionName" value={formData.missionName} onChange={handleChange} style={styles.input} required>
            <option value="">Select a mission</option>
            <option value="Mission 1">Mission 1</option>
            <option value="Mission 2">Mission 2</option>
            <option value="Mission 3">Mission 3</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="supportType" style={styles.label}>Type of Support:</label>
          <select id="supportType" name="supportType" value={formData.supportType} onChange={handleChange} style={styles.input} required>
            <option value="">Select type of support</option>
            <option value="financial">Financial</option>
            <option value="non-financial">Non-Financial</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} placeholder="Enter your email" required />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="telephone" style={styles.label}>Telephone Number:</label>
          <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} style={styles.input} placeholder="Enter your telephone number" required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>How do you prefer to be contacted:</label>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input type="radio" name="contactPreference" value="email" checked={formData.contactPreference === "email"} onChange={handleChange} /> Email
            </label>
            <label style={styles.radioLabel}>
              <input type="radio" name="contactPreference" value="phone" checked={formData.contactPreference === "phone"} onChange={handleChange} /> Phone
            </label>
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>Submit</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: { maxWidth: "900px", margin: "3rem auto", 
    padding: "20px", 
    backgroundColor: "#fff", 
    borderRadius: "10px", 
    boxShadow: "0 4px 8px rgba(42, 39, 39, 0.1)" },

  heading: { textAlign: "center", color: "#333", marginBottom: "20px", fontSize: "28px" },
  form: { display: "flex", flexDirection: "column" },
  formGroup: { marginBottom: "20px" },
  label: { display: "block", marginBottom: "8px", fontWeight: "bold", color: "orange", fontSize: "16px" },
  input: { width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "16px" },
  radioGroup: { display: "flex", gap: "20px" },
  radioLabel: { display: "flex", alignItems: "center", gap: "8px" },
  buttonContainer: { display: "flex", justifyContent: "center" },
  button: { padding: "12px 20px", 
    backgroundColor: "orange", color: "#fff", border: "none", borderRadius: "5px", fontSize: "16px", cursor: "pointer", width: "50%", transition: "background-color 0.3s ease, transform 0.2s ease" },
};

export default SupportMission;
*/