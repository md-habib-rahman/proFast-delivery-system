// components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card bg-base-200 hover:shadow-xl transition duration-300">
      <div className="card-body items-center text-center">
        <Icon className="w-10 h-10 text-primary mb-4" />
        <h3 className="card-title text-primary">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
