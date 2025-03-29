import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>You Belong Here</h1>
            <div className="hero-btns">
                <button className="btns" onClick={() => window.open("https://www.youtube.com/@thecitychurch-luzira2585", "_blank")}>WATCH SERVICE <i className="far fa-play-circle" /></button>
                <button className="btns" onClick={() => window.open("/join-mc", "_blank")}>Join a Family Group</button>
            </div>
            <h2>Welcome To The City Church</h2>
            <p>A place where you come and feel welcome, stay and keep growing, go and reach out</p>
            
            {/* Location Cards */}
            <div className='location-cards'>
                <div className='location-card'>
                    <h3>The City Church Luzira</h3>
                    <p>Come and experience the presence <br /> of God with us in Luzira.</p>
                    <a href="/location" target="_blank" rel="noopener noreferrer">View Location</a>
                </div>
                <div className='location-card'>
                    <h3>The City Church Kirinya</h3>
                    <p>Join us in Kirinya for an <br /> amazing worship experience.</p>
                    <a href="/location" target="_blank" rel="noopener noreferrer">View Location</a>
                </div>
                <div className='location-card'>
                    <h3>The City Church Iganga</h3>
                    <p>Be part of our community and <br /> worship with us in Iganga.</p>
                    <a href="/location" target="_blank" rel="noopener noreferrer">View Location</a>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
