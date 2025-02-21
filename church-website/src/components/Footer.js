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
          <h1>THE CITY CHURCH LUZIRA</h1>
          <p>Come And Worship With Us</p>
        </div>
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="/" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#fafafa" />
          </a>
          <a href="/" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" color="#fafafa" />
          </a>
          <a href="/" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#fafafa" />
          </a>
          <a href="/" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" color="#fafafa" />
          </a>
          <a href="/" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutubeSquare} size="2x" color="#fafafa" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
          <a href="/">LinkedIn</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms Of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
