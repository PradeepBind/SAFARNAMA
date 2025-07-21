import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaQuestionCircle,
  FaCommentDots,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Social Links + Help */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook /> Facebook
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube /> YouTube
          </a>
          <button onClick={() => navigate("/Help")}>
            <FaQuestionCircle /> Help
          </button>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/SearchPage")}>Search</button>
          <button onClick={() => navigate("/TourPage")}>Tours</button>
        </div>

        {/* Contact Info + Feedback */}
        <div className="footer-section">
          <h3>Contact & Support</h3>
          <p><FaPhoneAlt /> +91 9876543210</p>
          <p><FaEnvelope /> support@etour.com</p>
          <p><FaMapMarkerAlt /> 123 Travel Street, Delhi, India</p>
          <button onClick={() => navigate("/Feedback")}>
            <FaCommentDots /> Feedback
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Etour Travel Booking. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
