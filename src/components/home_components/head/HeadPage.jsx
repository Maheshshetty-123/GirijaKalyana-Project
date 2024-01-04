import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";

import "../head/head.scss";

const HeadPage = () => {
  return (
    <div>
      {/* head start  */}

      <div className="head-div">
        <div className="left-head">
          <p>
            {" "}
            <FaPhoneAlt /> 9148824442 | <FaRegEnvelope />{" "}
            enquirygirijakalyana.com
          </p>
        </div>

        <div className="right-head">
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaTwitter />
          </a>
          <a>
            <FaLinkedinIn />
          </a>
          <a>
            <FaYoutube />
          </a>
        </div>
      </div>

      {/*head end*/}

     
    </div>
  );
};

export default HeadPage;
