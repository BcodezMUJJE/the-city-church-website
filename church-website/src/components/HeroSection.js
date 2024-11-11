import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return(
        <div className='hero-container'>
            <video src="Assests/video-1.mp4" autoPlay loop muted />
            <h1>You Belong Here</h1>
            <p>Welcome To The City Church, A Place Where You Come And Feel Welcome Stay And Keep Growing.</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            </div>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> WATCH SERVICE <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection;