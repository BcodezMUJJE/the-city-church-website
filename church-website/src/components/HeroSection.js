import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return(
        <div className='hero-container'>
            <h1>You Belong Here</h1>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' href="https://www.youtube.com/@thecitychurch-luzira2585" target="_blank" > WATCH SERVICE <i className='far fa-play-circle' /> </Button>
            </div>
            <p>Welcome To The City Church, A place where you come and feel welcome, stay and keep growing, go and reach out</p>
        </div>
    )
}

export default HeroSection;