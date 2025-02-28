import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return(
        <div className='hero-container'>
            <h1>You Belong Here</h1>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            </div>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' href="https://www.youtube.com/@thecitychurch-luzira2585"> WATCH SERVICE <i className='far fa-play-circle' /></Button>
            </div>
            <p>Welcome To The City Church, A Place Where You Come And Feel Welcome Stay And Keep Growing.</p>
        </div>
    )
}

export default HeroSection;