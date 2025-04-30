import React, { useState, useRef, useEffect } from 'react';
import './NextSteps.css';

const NewSteps = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    classesAttended: [],
    interestedInCompleting: '',
    preferredMethod: '',
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const topics = [
    "Eternal life (the new life)",
    "Righteousness (no condemnation)",
    "The dominion of Christ and the believers' Authority",
    "The love of God",
    "Biblical interpretation",
    "Faith",
    "Communion with the Holy Spirit and prayer",
    "Submission, service and accountability",
    "Rapture and the second coming",
    "Q and A session"
  ];

  const methods = [
    "In-person",
    "Online",
    "Hybrid (both in-person and online)",
    "No preference"
  ];

  const handleChange = (e) => {
    // eslint-disable-next-line
    const { name, value, type, checked } = e.target;
    
    if (name === "classesAttended") {
      const updatedClasses = checked
        ? [...formData.classesAttended, value]
        : formData.classesAttended.filter(cls => cls !== value);
      
      setFormData({
        ...formData,
        classesAttended: updatedClasses
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      address: '',
      classesAttended: [],
      interestedInCompleting: '',
      preferredMethod: '',
    });
  };

  return (
    <div className="next-steps-container">
      <header className="next-steps-header">
        <h1>Next Steps Classes</h1>
        <p className="description">
          The Next Steps Classes are designed to lay the foundations of our faith for the new believer 
          and help them integrate into The City Church community. The topics taught provide a foundational 
          understanding of key Christian principles which equip believers to live victoriously.
        </p>
      </header>

      <div className="content-wrapper">
        <section className="topics-section">
          <h2>Key Topics</h2>
          <ul className="topics-list">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </section>

        <section className="registration-form">
          <h2>Fill Your Progress</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Physical Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Classes Attended:</label>
              <div className="dropdown-container" ref={dropdownRef}>
                <div 
                  className="dropdown-toggle"
                  onClick={toggleDropdown}
                >
                  {formData.classesAttended.length > 0 
                    ? `${formData.classesAttended.length} selected` 
                    : 'Select classes attended'}
                  <span className="dropdown-arrow">{dropdownOpen ? '▲' : '▼'}</span>
                </div>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    {topics.map((topic, index) => (
                      <label key={index} className="dropdown-item">
                        <input
                          type="checkbox"
                          name="classesAttended"
                          value={topic}
                          checked={formData.classesAttended.includes(topic)}
                          onChange={handleChange}
                        />
                        <span>{topic}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Would you be interested in completing the classes?</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="interestedInCompleting"
                    value="Yes"
                    checked={formData.interestedInCompleting === "Yes"}
                    onChange={handleChange}
                    required
                  />
                  <span>Yes</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="interestedInCompleting"
                    value="No"
                    checked={formData.interestedInCompleting === "No"}
                    onChange={handleChange}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="preferredMethod">What is your preferred method?</label>
              <select
                id="preferredMethod"
                name="preferredMethod"
                value={formData.preferredMethod}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                {methods.map((method, index) => (
                  <option key={index} value={method}>{method}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Submit Registration
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default NewSteps;