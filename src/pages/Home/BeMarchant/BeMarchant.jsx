import React from "react";
import merchant from "../../../assets/location-merchant.png";
import merchantbg from "../../../assets/be-a-merchant-bg.png";

const BeMarchant = () => {
  return (
    <div style={{backgroundImage:`url(${merchantbg})`}} className="  bg-success-content p-20 rounded-4xl  bg-no-repeat  bg-top " data-aos="zoom-in-up">
		
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={merchant} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-6 text-neutral-content">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <button className="btn btn-info rounded-full mr-6 p-6">
            Become a Merchant
          </button>
          <button className="btn btn-info btn-outline rounded-full p-6">
            Earn with ProFast
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeMarchant;
