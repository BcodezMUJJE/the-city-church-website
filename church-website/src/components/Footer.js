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
          <p>Come And Worship With Us</p>
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
          <a href="/">Support A Mission</a>
          <a href="/">Partner With Us</a>
          <a href="/">Need Prayer</a>
        </div>
        <div>
          <h4>MISSIONS</h4>
          <a href="/">The City Leadership Institute</a>
          <a href="/">The Fields City International School</a>
          <a href="https://www.transformafricanministries.org/">Transform African Ministries</a>
        </div>
        <div>
          <h4>RESOURCES</h4>
          <a href="/">First Time Guests (Next steps classes)</a>
          <a href="/">Sermons</a>
          <a href="/">Books</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
