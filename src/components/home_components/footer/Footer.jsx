import React from "react";
import images1 from "../../../images/logo.png";
import "./footer.scss";
import {FaPhoneAlt,FaRegEnvelope} from 'react-icons/fa';

const Footer = () => {
  return (
<>
<div className="footer-div">
      <div className="footer-sub-div1">
        <img src={images1} alt="logo" />
        <p>
          A Superior Matrimony Service. Register and Find your Special Someone
          Matches Within Your Community.
        </p>
      </div>
      <div className="footer-sub-div2">
        <p>About Company</p>
        <a>About Us</a>
        <a>Promoter</a>
        <a>Contact Us</a>
        <a>Privacy Policy</a>
        <a>Terms & Conditions</a>
        <a>Cancellation Policy</a>
      </div>
      <div className="footer-sub-div3">
        <p>Contact Us</p>
        <i><FaRegEnvelope/></i>
        <a style={{ color: "#f8cd35", borderBottom: "1px dotted black" }}>
        
        contactusgirijakalyana@gmail.com
        </a>
        <br />
        <a style={{ color: "#f8cd35", borderBottom: "1px dotted black" }}>
        <FaRegEnvelope/> enquirygirijakalyana.com
        </a>
        <br /> <br />
        <a>Call Us Now</a> <br />
        <a> <FaPhoneAlt/> 9148824442</a>
      </div>
      <div className="footer-sub-div4">
        <p>SUBSCRIBE TO NEWS LETTER</p>
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe</button>
      </div>


      
    </div>
    <div className="foot-last"><p>Copyright ©2021 Kiran Computers Pvt Ltd.</p></div>
</>
  );
};

export default Footer;
