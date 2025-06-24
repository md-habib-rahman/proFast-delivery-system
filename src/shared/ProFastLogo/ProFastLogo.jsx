import React from "react";
import logo from "../../assets/logo.png";

const ProFastLogo = () => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="" className="mb-2" />
	  <p className=" -ms-4 text-3xl font-bold">ProFast</p>
    </div>
  );
};

export default ProFastLogo;
