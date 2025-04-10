import React from 'react';
import './JoinMc.css';
import Footer from '../Footer';

function JoinMc() {
  const handleJoinClick = () => {
    window.location.href = "https://thecitychurchluzira.churchcenter.com/people/forms/938187";
  };

  return (
    <>
      <div className="missional-community-form">
        <h1>Join a Missional Community</h1>
        <p className="description">
          Missional communities are small groups of believers who gather to grow in faith, serve the community, and share the love of Christ.
          Click the button below to join a missional community.
        </p>

        <div className="join-button-container">
          <button 
            onClick={handleJoinClick} 
            className="submit-button"
          >
            Join a Missional Community
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default JoinMc;