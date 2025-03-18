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

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-lg">
      <h2>Connection Card</h2>
      <h3>Please fill out this form to connect with us</h3> {/* Added Title */}
      <form action="https://api.web3forms.com/submit" method="POST">
        {/* Web3Forms Access Key */}
        <input
          type="hidden"
          name="access_key"
          value="00bb38f1-38dc-4c70-b5ef-0867572bd0da"
        />
        <input
          type="hidden"
          name="subject"
          value="Connection Card Submission"
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="residence"
          placeholder="Residence"
          required
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="text"
          name="occupation"
          placeholder="Occupation"
          required
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="tel"
          name="tel"
          placeholder="Tel No."
          required
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
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
            />
            Baptism
          </label>
          <label>
            <input
              type="checkbox"
              name="interest"
              value="Serving at Church"
              onChange={handleChange}
            />
            Serving at Church
          </label>
          <label>
            <input
              type="checkbox"
              name="interest"
              value="City Leadership Institute"
              onChange={handleChange}
            />
            City Leadership Institute
          </label>
          <label>
            <input
              type="checkbox"
              name="interest"
              value="City Finance SACCO"
              onChange={handleChange}
            />
            City Finance SACCO
          </label>
        </div>

        <textarea
          name="prayerRequest"
          placeholder="Share your prayer request"
          onChange={handleChange}
          className="w-full p-2 mt-2 border rounded"
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
