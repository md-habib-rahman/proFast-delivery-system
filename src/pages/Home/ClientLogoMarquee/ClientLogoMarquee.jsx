import React from "react";
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";
import Marquee from "react-fast-marquee";

const ClientLogoMarquee = () => {
  const clientLogo = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <div className="py-12">
      <h2 className="text-4xl text-center text-primary font-bold mb-8">
        We haved thousands of team
      </h2>
      <div className="bg-neutral-content py-12">
        <Marquee speed={100}>
          {clientLogo.map((logo, index) => (
            <div key={index} className="w-70 h-10">
              <img src={logo} alt="" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ClientLogoMarquee;
