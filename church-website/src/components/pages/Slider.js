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
      feedback: 'Our beautiful interior provides a serene space for worship and reflection.',
    },
    {
      src: church_3,
      alt: 'Pastor Simon Kirabo - Location Pastor Iganga',
      label: 'Pastor Simon Kirabo - Location Pastor Iganga',
      feedback: 'Join us for uplifting worship services that bring the community together.',
    },
    {
      src: church_4,
      alt: 'Pastor Lillian Kirabo - Location Pastor Iganga',
      feedback: 'We host community events to foster connection and support among our members.',
    },
    {
      src: church_5,
      alt: 'Pastor Dennis Onen - Youth Pastor',
      feedback: 'Our youth programs inspire the next generation to grow in faith and leadership.',
    },
    {
      src: church_5,
      alt: 'Pastor Becky Onen - Youth Pastor',
      feedback: 'Our youth programs inspire the next generation to grow in faith and leadership.',
    },
    {
      src: church_5,
      alt: 'Pastor Judith - Executive Pastor',
      feedback: 'Our youth programs inspire the next generation to grow in faith and leadership.',
    },
    {
      src: church_5,
      alt: 'Pastor Martha Banalya - Location Pastor Luzira',
      feedback: 'Our youth programs inspire the next generation to grow in faith and leadership.',
    },
    {
      src: church_5,
      alt: 'Pastor Derrick Mooli - Location Pastor Kirinya',
      feedback: 'Our youth programs inspire the next generation to grow in faith and leadership.',
    },
    {
      src: church_5,
      alt: 'Pastor Deborah Mooli - Location Pastor Kirinya',
      feedback: 'Our youth programs inspire the next generation to grow in faith and leadership.',
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