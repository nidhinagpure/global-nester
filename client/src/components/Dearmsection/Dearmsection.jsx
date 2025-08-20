import React from "react";
import { Phone, Mail } from "lucide-react"; 
import "./Dearmsection.css"; // Import CSS file

const Dearmsection = () => {
  return (
    <div className="consultation-container">
      {/* Heading */}
      <h1 className="consultation-title">
        Ready to Find Your Dream Property?
      </h1>

      {/* Subheading */}
      <p className="consultation-subtitle">
       Premium plots, flats, and commercial spaces with verified listings and expert guidance.
      </p>

      {/* Buttons */}
      <div className="consultation-buttons">
        <button className="btn-primary">
          <Phone size={18} />
          Book Free Site Visit
        </button>

        <button className="btn-secondary">
          <Mail size={18} />
          Get Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Dearmsection;
