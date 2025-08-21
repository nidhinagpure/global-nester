import React from "react";
import { FaShoppingCart, FaChartLine, FaFileAlt, FaUserFriends } from "react-icons/fa";
import "./Services.css";

const ServiceCard = ({ icon, title, description, tags }) => {
  return (
    <div className="service-card">
      <div className="icon-container">{icon}</div>
      <div className="card-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <div className="tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services-container">
      <ServiceCard
        icon={<FaShoppingCart />}
        title="Property Sales"
        description="End-to-end sales support with transparent pricing, legal documentation, and seamless transactions."
        tags={["Transparent Pricing", "Legal Support", "Documentation", "Site Visits"]}
      />
      <ServiceCard
        icon={<FaChartLine />}
        title="Property Purchase"
        description="Expert guidance in property acquisition with market analysis and investment advisory."
        tags={["Market Analysis", "Investment Advisory", "Valuation", "Negotiation Support"]}
      />
      <ServiceCard
        icon={<FaFileAlt />}
        title="Investment Consultation"
        description="Strategic investment planning with ROI analysis and portfolio diversification guidance."
        tags={["ROI Analysis", "Portfolio Planning", "Risk Assessment", "Market Insights"]}
      />
      <ServiceCard
        icon={<FaUserFriends />}
        title="Customer Support"
        description="24/7 dedicated support team for all your queries and assistance throughout your journey."
        tags={["24/7 Support", "Expert Guidance", "Quick Response", "After-sales Service"]}
      />
    </div>
  );
};

export default Services;
