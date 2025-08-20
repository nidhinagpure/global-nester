import "./PropertyCards.css";
import React from 'react';
import plots from "../../assets/plots.jpg";
import flats from "../../assets/flats.jpg";
import commercial from "../../assets/commercial.jpg";

const PropertyCards = () => {
  return (
    <>
      <div className="cards-heading">
        <h1>Our Properties</h1>
        <p>Explore our wide range of plots, flats, and commercial spaces carefully curated to meet your needs.</p>
      </div>

      <div className="cards-container">
        {/* Plot Card */}
        <div className="property-card">
          <div className="property-image">
            <span className="badge">Plot</span>
            <span className="price">₹45 Lakhs</span>
            <img src={plots} alt="Residential Plot" />
          </div>
          <div className="property-info">
            <h3>Residential Plot - DTCP Approved</h3>
            <p className="location">📍 Sarjapur Road, Bangalore</p>
            <p className="size">📐 1,800 sq ft</p>
            <p className="desc">Prime residential plot in fast-growing area with excellent infrastructure. Perfect for building your dream home.</p>
            <div className="features">
              <span className="feature">DTCP Approved</span>
              <span className="feature">Clear Title</span>
              <span className="feature">Water Connection</span>
            </div>
            <div className="builder"><strong>Ozone Group</strong> <br />Builder</div>
            <div className="actions">
              <button>📞 Call</button>
              <button>✉ Email</button>
              <button className="primary">View Details</button>
            </div>
          </div>
        </div>

        {/* Commercial Card */}
        <div className="property-card">
          <div className="property-image">
            <span className="badge">Commercial</span>
            <span className="price">₹1.8 Crores</span>
            <img src={commercial} alt="Office Space" />
          </div>
          <div className="property-info">
            <h3>Premium Office Space</h3>
            <p className="location">📍 MG Road, Bangalore</p>
            <p className="size">📐 2,500 sq ft</p>
            <p className="desc">Grade A office space in prime business district with modern amenities and excellent connectivity.</p>
            <div className="features">
              <span className="feature">Central AC</span>
              <span className="feature">Elevator</span>
              <span className="feature">Security</span>
            </div>
            <div className="builder"><strong>Embassy Group</strong> <br />Builder</div>
            <div className="actions">
              <button>📞 Call</button>
              <button>✉ Email</button>
              <button className="primary">View Details</button>
            </div>
          </div>
        </div>

        {/* Flat Card */}
        <div className="property-card">
          <div className="property-image">
            <span className="badge">Flat</span>
            <span className="price">₹85 Lakhs</span>
            <img src={flats} alt="Luxury Apartment" />
          </div>
          <div className="property-info">
            <h3>Luxury 3BHK Apartment</h3>
            <p className="location">📍 Whitefield, Bangalore</p>
            <p className="size">📐 1,450 sq ft · 3 BHK · 2 Bath</p>
            <p className="desc">Premium apartment with modern amenities and excellent connectivity. Ready to move in with all approvals.</p>
            <div className="features">
              <span className="feature">Swimming Pool</span>
              <span className="feature">Gym</span>
              <span className="feature">Club House</span>
            </div>
            <div className="builder"><strong>Prestige Group</strong> <br />Builder</div>
            <div className="actions">
              <button>📞 Call</button>
              <button>✉ Email</button>
              <button className="primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCards;
