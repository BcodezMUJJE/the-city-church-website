import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      {/* Top Section */}
      <div className="top">
        <div>
          <h1>THE CITY CHURCH</h1>
        </div>
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com/TheeCityChurch" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#fafafa" />
          </a>
          <a href="https://www.instagram.com/theecitychurch/" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" color="#fafafa" />
          </a>
          <a href="https://www.linkedin.com/company/the-city-church-luzira/" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#fafafa" />
          </a>
          <a href="https://x.com/TheCityChurchL/" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" color="#fafafa" />
          </a>
          <a href="https://www.youtube.com/@thecitychurch-luzira2585/" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutubeSquare} size="2x" color="#fafafa" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <div>
          <h4>REACH OUT</h4>
          <a href="https://thecitychurchluzira.churchcenter.com/people/forms/938178">Support A Mission</a>
          <a href="https://thecitychurchluzira.churchcenter.com/people/forms/938160">Partner With Us</a>
          <a href="https://thecitychurchluzira.churchcenter.com/people/forms/938154">Need Prayer</a>
        </div>
        <div>
          <h4>MISSIONS</h4>
          <a href="https://thecitychurchluzira.churchcenter.com/people/forms/938149">Fit for Life</a>
          <a href="https://thecitychurchluzira.churchcenter.com/people/forms/936391">The City Leadership Institute</a>
          <a href="https://www.transformafricanministries.org/">Transform African Ministries</a>
        </div>
        <div>
          <h4>RESOURCES</h4>
          <a href="https://thecitychurchluzira.churchcenter.com/people/forms/937756">First Time Guests/Membership</a>
          <a href="/bookLib">Books</a>
          <a
            href="https://open.spotify.com/artist/48Uz3wlAuTWxnvj4uXQPD2" // Corrected Spotify link
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            Music
          </a>
        </div>
        <div>
          <h4>Privacy Policy</h4>
          <a href="/term-of-service" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;