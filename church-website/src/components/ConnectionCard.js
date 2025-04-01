import React, { useState } from "react";
import "./ConnectionCard.css";
import Footer from "./Footer";

const ConnectionCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    residence: "",
    occupation: "",
    tel: "",
    guestType: "",
    interest: [],
    prayerRequest: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        interest: checked
          ? [...prev.interest, value]
          : prev.interest.filter((item) => item !== value)
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const dataToSend = new FormData();
    dataToSend.append("access_key", "00bb38f1-38dc-4c70-b5ef-0867572bd0da");
    dataToSend.append("subject", "Connection Card Submission");
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("residence", formData.residence);
    dataToSend.append("occupation", formData.occupation);
    dataToSend.append("tel", formData.tel);
    dataToSend.append("guestType", formData.guestType);
    dataToSend.append("interest", formData.interest.join(", "));
    dataToSend.append("prayerRequest", formData.prayerRequest);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSend,
      });

      const result = await response.json();
      if (result.success) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          residence: "",
          occupation: "",
          tel: "",
          guestType: "",
          interest: [],
          prayerRequest: ""
        });
        // Redirect after successful submission
        window.location.href = "https://thecitychurchluzira.churchcenter.com/people/forms/937756";
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-lg">
      <h2>Connection Card</h2>
      <h3>Please fill out this form to connect with us</h3>
      <form onSubmit={handleSubmit}>
        {/* Web3Forms Access Key and Subject are now appended via JavaScript */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          value={formData.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          value={formData.email}
        />
        <input
          type="text"
          name="residence"
          placeholder="Residence"
          required
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          value={formData.residence}
        />
        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          required
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          value={formData.occupation}
        />
        <input
          type="tel"
          name="tel"
          placeholder="Tel No."
          required
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          value={formData.tel}
        />

        <p className="font-semibold mt-4">Are you a:</p>
        <div className="radio-group form-options">
          <label>
            <input
              type="radio"
              name="guestType"
              value="1st Time Guest"
              required
              onChange={handleChange}
              checked={formData.guestType === "1st Time Guest"}
            />
            1st Time Guest
          </label>
          <label>
            <input
              type="radio"
              name="guestType"
              value="2nd Time Guest"
              required
              onChange={handleChange}
              checked={formData.guestType === "2nd Time Guest"}
            />
            2nd Time Guest
          </label>
          <label>
            <input
              type="radio"
              name="guestType"
              value="Regular Attendee"
              required
              onChange={handleChange}
              checked={formData.guestType === "Regular Attendee"}
            />
            Regular Attendee
          </label>
          <label>
            <input
              type="radio"
              name="guestType"
              value="Member"
              required
              onChange={handleChange}
              checked={formData.guestType === "Member"}
            />
            Member
          </label>
        </div>

        <p className="font-semibold mt-4">I am interested in:</p>
        <div className="checkbox-group form-options">
          <label>
            <input
              type="checkbox"
              name="interest"
              value="Baptism"
              onChange={handleChange}
              checked={formData.interest.includes("Baptism")}
            />
            Baptism
          </label>
          <label>
            <input
              type="checkbox"
              name="interest"
              value="Serving at Church"
              onChange={handleChange}
              checked={formData.interest.includes("Serving at Church")}
            />
            Serving at Church
          </label>
          <label>
            <input
              type="checkbox"
              name="interest"
              value="City Leadership Institute"
              onChange={handleChange}
              checked={formData.interest.includes("City Leadership Institute")}
            />
            City Leadership Institute
          </label>
          <label>
            <input
              type="checkbox"
              name="interest"
              value="City Finance SACCO"
              onChange={handleChange}
              checked={formData.interest.includes("City Finance SACCO")}
            />
            City Finance SACCO
          </label>
        </div>

        <textarea
          name="prayerRequest"
          placeholder="Share your prayer request"
          onChange={handleChange}
          className="w-full p-2 mt-2 border rounded"
          value={formData.prayerRequest}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 mt-4 rounded hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ConnectionCard;
