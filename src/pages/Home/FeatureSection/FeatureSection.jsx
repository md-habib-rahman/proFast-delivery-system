// components/FeaturesSection.jsx
import React from "react";
import { FaMapMarkedAlt, FaShieldAlt, FaHeadset } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    icon: FaMapMarkedAlt,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    icon: FaShieldAlt,
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    icon: FaHeadset,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-base-100" id="features">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl text-primary font-bold text-neutral-content mb-8 text-center">Our Features</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
