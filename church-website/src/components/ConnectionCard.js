import React, { useState } from "react";
import "./ConnectionCard.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Connection Card</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full p-2 mb-2 border rounded" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 mb-2 border rounded" />
        <input type="text" name="residence" placeholder="Residence" onChange={handleChange} required className="w-full p-2 mb-2 border rounded" />
        <input type="text" name="occupation" placeholder="Occupation" onChange={handleChange} required className="w-full p-2 mb-2 border rounded" />
        <input type="tel" name="tel" placeholder="Tel No." onChange={handleChange} required className="w-full p-2 mb-2 border rounded" />

        <p className="font-semibold mt-4">Are you a:</p>
        <label><input type="radio" name="guestType" value="1st Time Guest" onChange={handleChange} required /> 1st Time Guest</label><br/>
        <label><input type="radio" name="guestType" value="2nd Time Guest" onChange={handleChange} required /> 2nd Time Guest</label><br/>
        <label><input type="radio" name="guestType" value="Regular Attendee" onChange={handleChange} required /> Regular Attendee</label><br/>
        <label><input type="radio" name="guestType" value="Member" onChange={handleChange} required /> Member</label>

        <p className="font-semibold mt-4">I am interested in:</p>
        <label><input type="checkbox" name="interest" value="Baptism" onChange={handleChange} /> Baptism</label><br/>
        <label><input type="checkbox" name="interest" value="Serving at Church" onChange={handleChange} /> Serving at Church</label><br/>
        <label><input type="checkbox" name="interest" value="City Leadership Institute" onChange={handleChange} /> City Leadership Institute</label><br/>
        <label><input type="checkbox" name="interest" value="City Finance SACCO" onChange={handleChange} /> City Finance SACCO</label><br/>

        <textarea name="prayerRequest" placeholder="Share your prayer request" onChange={handleChange} className="w-full p-2 mt-2 border rounded"></textarea>

        <button type="submit" className="w-full bg-orange-500 text-white p-2 mt-4 rounded hover:bg-orange-600">Submit</button>
      </form>
    </div>
  );
};

export default ConnectionCard;