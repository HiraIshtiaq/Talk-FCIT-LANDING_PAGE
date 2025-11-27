import React from "react";
import "./FeatureCard.css";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <img src={icon} alt={title} className="icon-img" />
      <h3> {title}</h3>
      <p>{description}</p>
      <a href="#">Learn More</a>
    </div>
  );
}
export default FeatureCard;
