// components/FeatureCard.jsx
import React from "react";

const FeatureCard = ({ feature }) => {
  const { icon: Icon, title, description } = feature;
  return (
    <div className="flex items-center space-x-6 p-4 bg-base-200 rounded-lg shadow hover:shadow-md transition">
      {/* Icon */}
      <div className="flex-shrink-0 p-4">
        <Icon size={100}className="text-primary" />
      </div>

      {/* Dashed Divider */}
      <div className="h-14 border-l-2 border-dashed border-base-content opacity-30"></div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-success">{title}</h3>
        <p className="text-neutral-content text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
