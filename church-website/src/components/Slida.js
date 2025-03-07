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
      title: 'The Married’s Ministry',
      description:
        'The City Church Marrieds Ministry is a vibrant community of couples who are passionate about cultivating love, laughter, and legacy in their marriages. Through our various programs and events, we provide opportunities for couples to connect, grow, and build a stronger, more resilient marriage that honors God.',
      image: Img2,
    },
    {

      title: 'The Youth Ministry',
      description:
        'The Christ Generation Youth Ministry is a dynamic and vibrant community of young people passionate about living for Jesus Christ. Our mission is to equip and empower the next generation of leaders to become bold, faithful, and influential followers of Christ.',
      image: Img3,
    },
    {
      title: 'The Women’s Ministry',
      description:
        'The City Church Women’s Ministry is a place where women can connect with each other, grow in their faith, and experience transformation in their lives. Through our various programs and events, we provide opportunities for women to build relationships, develop their gifts, and serve others.',
      image: Img1,
    }, // ✅ **Comma added here**
    {
      title: 'The Men’s Ministry',
      description:
        'The Kings Men Ministry is a fellowship of married men dedicated to building a community of strong, Godly leaders. Our mission is to equip and empower husbands to become better leaders, fathers, and servants of God.',
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