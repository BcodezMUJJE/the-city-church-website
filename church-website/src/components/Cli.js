import React from "react";
import "./Cli.css";
import Img1 from "../Assets/1111.jpg";
import Img2 from "../Assets/2222.jpg";
import Img3 from "../Assets/3333.jpg";
import Img4 from "../Assets/4444.jpg";
import Img5 from "../Assets/PastorJudith.jpg";
import Img6 from "../Assets/PastorA.jpeg";
import Footer from "./Footer";

const leaders = [
  { name: "Dr Aex Mutagubya", role: "Vision Bearer", img: Img6 },
  { name: "Miss Rebecca Baguma", role: "Principal - CLI", img: Img4 },
  { name: "Pastor Judith Icumar", role: " Leadership Mentor", img: Img5 },
];

const testimonials = [
  { name: "Priscilla Maloba", quote: "CLI transformed my leadership journey, equipping me with the skills to serve my community.", img: Img3 },
  { name: "Julius Oboth", quote: "The teachings at CLI helped me become a more effective and faith-driven leader.", img: Img1 },
  { name: "Lydia Biira", quote: "CLI is more than an institute, it's a life-changing experience filled with wisdom and growth.", img: Img2 },
];

const Cli = () => {
  const handleApplyClick = () => {
    window.location.href = "https://thecitychurchluzira.churchcenter.com/people/forms/936391";
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
          At The City Leadership Institute, we are committed to fostering a culture of open communication and collaboration.
          Our goal is to empower leaders who can drive meaningful change in their communities.
          Whether you have questions about the course structure, assignments, or leadership principles,
          we are here to guide and support you every step of the way.
          Together, we aim to build a strong network of visionary leaders who are equipped to tackle the challenges of today and tomorrow.
          Feel free to reach out to us for any assistance – we're here to help you succeed!
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

      {/* Application Button */}
      <section className="cta">
        <h2>Join CLI Today</h2>
        <p>Become a transformational leader and make a difference.</p>
        <button 
          onClick={handleApplyClick} 
          className="button"
        >
          Apply Now
        </button>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cli;