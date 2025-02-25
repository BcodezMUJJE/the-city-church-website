import React, { useState } from 'react';
import './Slider.css';
import church_1 from '../../Assets/oneeee.jpeg';
import church_2 from '../../Assets/oneeee.jpeg';
import church_3 from '../../Assets/oneeee.jpeg';
import church_4 from '../../Assets/fourrrr.jpeg';
import church_5 from '../../Assets/prayer.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Slider = () => {
  const slides = [
    {
      src: church_1,
      alt: 'Pastor Alex Mutagubya - Lead Pastor',
      label: 'Pastor Dennis Onen - Lead Pastor',  
      feedback: 'Pastor Alex Mutagubya is a visionary leader, passionate preacher, and dedicated shepherd who serves as the Lead Pastor of The City Church.',
    },
    {
      src: church_2,
      alt: 'Pastor Faith Mutagubya',
      label: 'Pastor Faith Mutagubya',
      feedback: 'Pastor Faith Mutagubya is the lead pastor of The City Church in Kampala, Uganda. She is known for her dynamic preaching and commitment to discipling believers.',
    },
    {
      src: church_3,
      alt: 'Pastor Simon Kirabo - Location Pastor Iganga',
      label: 'Pastor Simon Kirabo - Location Pastor Iganga',
      feedback: 'Pastor Simon Kirabo is the Location Pastor of The City Church Iganga. He is a dedicated and passionate leader committed to spreading the gospel and building a strong faith community.',
    },
    {
      src: church_4,
      alt: 'Pastor Lillian Kirabo - Location Pastor Iganga',
      feedback: 'Pastor Lillian Kirabo serves as the Location Pastor of The City Church Iganga alongside Pastor Simon Kirabo. She is a passionate leader with a heart for discipleship, mentorship, and community transformation. ',
    },
    {
      src: church_5,
      alt: 'Pastor Dennis Onen - Youth Pastor',
      feedback: 'Pastor Dennis Onen is the Youth Pastor at The City Church, dedicated to mentoring and discipling the next generation. With a deep passion for young people, he creates engaging and transformative experiences that help them grow in their faith and purpose.',
    },
    {
      src: church_5,
      alt: 'Pastor Becky Onen - Youth Pastor',
      feedback: 'Pastor Becky Onen serves as a Youth Pastor at The City Church, alongside Pastor Dennis Onen. She is a passionate leader dedicated to guiding and mentoring young people in their spiritual journey.',
    },
    {
      src: church_5,
      alt: 'Pastor Judith - Executive Pastor',
      feedback: 'Pastor Judith serves as the Executive Pastor at The City Church, playing a crucial role in the church’s leadership and administration. With a deep commitment to ministry and organizational excellence, she ensures that the church operates effectively while staying true to its mission.',
    },
    {
      src: church_5,
      alt: 'Pastor Martha Banalya - Location Pastor Luzira',
      feedback: 'Pastor Martha Banalya is the Location Pastor of The City Church Luzira. She is a dedicated and passionate leader with a heart for discipleship and community transformation.',
    },
    {
      src: church_5,
      alt: 'Pastor Derrick Mooli - Location Pastor Kirinya',
      feedback: 'Pastor Derrick Mooli is the Location Pastor of The City Church Kirinya. He is a devoted and visionary leader committed to spreading the gospel and building a strong faith community.',
    },
    {
      src: church_5,
      alt: 'Pastor Deborah Mooli - Location Pastor Kirinya',
      feedback: 'Pastor Deborah Mooli serves as the Location Pastor of The City Church Kirinya alongside Pastor Derrick Mooli. She is a passionate and dedicated leader with a heart for discipleship, mentorship, and community transformation. ',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="image-slider">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="slider">
              <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                  <div className="item" key={index}>
                    <img src={slide.src} alt={slide.alt} className="slider-image" />
                    <div className="feedback-container">
                      <p className="feedback-text">{slide.feedback}</p>
                    </div>
                  </div>
                ))}
              </div>
              <FontAwesomeIcon className="nav-btn prev-btn" icon={faChevronLeft} onClick={handlePrev} />
              <FontAwesomeIcon className="nav-btn next-btn" icon={faChevronRight} onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;