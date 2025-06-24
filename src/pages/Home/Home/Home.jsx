import React from "react";
import Banner from "../Banner/Banner";
import Services from "../services/Services";
import ClientLogoMarquee from "../ClientLogoMarquee/ClientLogoMarquee";
import FeatureCard from "../FeatureSection/FeatureCard";
import FeaturesSection from "../FeatureSection/FeatureSection";
import BeMarchant from "../BeMarchant/BeMarchant";
import CustomerReview from "../customerReview/CustomerReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ClientLogoMarquee />
      <FeaturesSection />
      <BeMarchant />
      <CustomerReview />
    </div>
  );
};

export default Home;
