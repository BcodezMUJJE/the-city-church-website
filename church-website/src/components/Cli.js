import React, { useState } from "react";
import "./Cli.css";
import Img1 from "../Assets/2222.jpg";
import Img2 from "../Assets/1111.jpg";
import Img3 from "../Assets/3333.jpg";
import Img4 from "../Assets/4444.jpg";
import Img5 from "../Assets/PastorJudith.jpg";
import Img6 from "../Assets/PastorA.jpeg";

const leaders = [
  { name: "Pastor Aex Mutagubya", role: "Vision Bearer", img: Img6 },
  { name: "Madam Rebecca Baguma", role: "Principle - CLI", img: Img4 },
  { name: "Pastor Judith", role: " Leadership Mentor", img: Img5 },
];

const testimonials = [
  { name: "Priscilla Maloba", quote: "CLI transformed my leadership journey, equipping me with the skills to serve my community.", img: Img3 },
  { name: "Lydia Biira", quote: "The teachings at CLI helped me become a more effective and faith-driven leader.", img: Img1 },
  { name: "Julius Oboth", quote: "CLI is more than an institute, it's a life-changing experience filled with wisdom and growth.", img: Img2 },
];

const Cli = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to the City Leadership Institute (CLI)</h1>
        <p>Raising leaders to transform communities with faith, wisdom, and impact.</p>
      </section>

      {/* About CLI */}
      <section className="about">
        <h2>About CLI</h2>
        <p>
          The City Leadership Institute is dedicated to equipping passionate individuals 
          with the skills and faith-driven leadership qualities needed to make a lasting 
          impact in their communities. Join us in this transformative journey.
        </p>
      </section>

      {/* Leadership Team */}
      <section className="leaders">
        <h2>Meet Our Leadership</h2>
        <div className="grid">
          {leaders.map((leader, index) => (
            <div key={index} className="card">
              <img src={leader.img} alt={leader.name} />
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Alumni Say</h2>
        <div className="testimonialGrid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonialCard">
              <img src={testimonial.img} alt={testimonial.name} />
              <p className="quote">"{testimonial.quote}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="cta">
        <h2>Join CLI Today</h2>
        <p>Become a transformational leader and make a difference.</p>
        <form action="https://api.web3forms.com/submit" method="POST" className="application-form">
          <input type="hidden" name="access_key" value="00bb38f1-38dc-4c70-b5ef-0867572bd0da" />
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <textarea name="message" placeholder="Why do you want to join CLI?" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="button">Submit Application</button>
        </form>
      </section>
    </div>
  );
};

export default Cli;
