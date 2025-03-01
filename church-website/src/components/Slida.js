import React from 'react';
import './Slida.css';
import Img1 from '../Assets/royal.jpg';
import Img2 from '../Assets/maa.jpg';
import Img3 from '../Assets/YouthCC.jpg';
import Img4 from '../Assets/men.jpg';

const Header = () => {
  return (
    <header className="header">
      <h1>OUR MINISTRIES</h1>
      <p>Here Are Some Of Our Ministries</p>
    </header>
  );
};

const ProgramSection = ({ title, description, image }) => {
  return (
    <section className="program">
      {image && <img src={image} alt={title} className="program-image" />}
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

const Slida = () => {
  const programs = [
    {
      title: 'Marrieds Ministry',
      description:
        'Join us for our Marrieds Ministry! We invite all married couples to join us for our Marrieds Ministry sessions at The City Church. Come together with us for spiritual growth, relationship building, and communal support. Let’s unite in faith and strengthen our connection.',
      image: Img2,
    },
    {
      title: 'Youth Ministry',
      description:
        'Join us for our Youth Ministry! We invite all youth to join us for our Youth Ministry sessions at The City Church. Come together with us for spiritual growth, relationship building, and communal support. Let’s unite in faith and strengthen our connection.',
      image: Img3,
    },
    {
      title: 'Royal Women’s Ministry',
      description:
        'Join us for our Royal Women’s Ministry! We invite all women to join us for our Royal Women’s Ministry sessions at The City Church. Come together with us for spiritual growth, relationship building, and communal support. Let’s unite in faith and strengthen our connection.',
      image: Img1,
    }, // ✅ **Comma added here**
    {
      title: 'Mens Ministry',
      description:
        'Join us for our Men’s Ministry! We invite all men to join us for our Men’s Ministry sessions at The City Church. Come together with us for spiritual growth, relationship building, and communal support. Let’s unite in faith and strengthen our connection.',
      image: Img4,
    },
  ];

  return (
    <div className="app">
      <Header />
      <div className="programs-container">
        {programs.map((program, index) => (
          <ProgramSection
            key={index}
            title={program.title}
            description={program.description}
            image={program.image} // ✅ **Passing image to ProgramSection**
          />
        ))}
      </div>
    </div>
  );
};

export default Slida;