import React from "react";
import images1 from "../../../images/logo.png";
import "./logohead.scss";
const LogoHeader = () => {
  return (
    <div>
      {/* logo head start*/}

      <div className="logo-div">
        <div className="logo-div-lift">
          <img src={images1} alt="logo" />
        </div>

        <div className="logo-div-right">
          <button>FREE REGISTER</button>
          <button className="btn2">REGISTER</button>
        </div>
      </div>

      {/* logo head end*/}
    </div>
  );
};

export default LogoHeader;
