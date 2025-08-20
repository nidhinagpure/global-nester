import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Heading & Description */}
        <h2>Ready to Find Your Property?</h2>
        <p>Connect with our expert team to discover the perfect property for your needs. We're here to help you make the right investment.</p>
        
        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <FaPhoneAlt className="icon"/>
            <h4>Call Us</h4>
            <p>+91 98765 00000</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon"/>
            <h4>Email Us</h4>
            <p>info@propertyhub.com</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon"/>
            <h4>Visit Us</h4>
            <p>MG Road, Bangalore</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="mailto:info@propertyhub.com"><FaEnvelope /></a>
          <a href="https://wa.me/919876500000" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>

        {/* Button */}
        <button className="consultation-btn">Schedule a Consultation</button>
      </div>
    </footer>
    
  );
};

export default Footer;
