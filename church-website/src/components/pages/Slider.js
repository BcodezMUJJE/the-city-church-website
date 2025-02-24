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
      alt: 'City Church Exterior',
      feedback: 'The exterior of our church is a symbol of hope and faith in the heart of the city.',
    },
    {
      src: church_2,
      alt: 'City Church Interior',
      feedback: 'Our beautiful interior provides a serene space for worship and reflection.',
    },
    {
      src: church_3,
      alt: 'City Church Worship Service',
      feedback: 'Join us for uplifting worship services that bring the community together.',
    },
    {
      src: church_4,
      alt: 'City Church Community Event',
      feedback: 'We host community events to foster connection and support among our members.',
    },
    {
      src: church_5,
      alt: 'City Church Youth Program',
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