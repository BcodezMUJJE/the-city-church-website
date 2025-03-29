import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img9 from '../Assets/PastorA.jpeg';
import img2 from '../Assets/Round.jpeg';
import imgYouth from '../Assets/TheChristGeneration.jpeg';  // Fixed path
import imgLeadership from '../Assets/Bill.jpeg';
import imgKids from '../Assets/CityKidz.jpeg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Programs</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='Join us every Sunday at The City Churches for uplifting worship, inspiring messages, and a warm community as we celebrate God’s grace!'
              label='Sunday Service'
              path='/service-times'
            />
            <CardItem
              src={img2}
              text='Join us Thursdays, 5:30 – 7:00PM, in our missional communities to reflect on the past Sunday’s service.'
              label='MC ku Round Table'
              path='/weekly-round-table'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={imgYouth}
              text='We invite all youth to the Youth Experience every last Saturday of the month for worship, fun, prayer, and food. Don’t miss out!'
              label='The Christ Generation (TCG)'
              path='/tcg-page'
            />
            <CardItem
              src={imgLeadership}
              text='Join us at The City Leadership Institute every month for growth, learning, and leadership development!'
              label='The City Leadership Institute (CLI)'
              path='/Cli'
            />
            <CardItem
              src={imgKids}
              text='We invite all kids to The City Kids every Sunday for fun, learning, and growing in God’s love!'
              label='The City Kids'
              path='/CityChurchKids'
            />
            <CardItem
              src={imgLeadership}
              text='Transforming your business mindset for success unlock your potential with Fit for Life Trainings'
              label='Fit For Life Trainings'
              path='/fitforlife'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
