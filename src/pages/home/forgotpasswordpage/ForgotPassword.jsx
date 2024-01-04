import React from "react";
import HeadPage from "../../../components/home_components/head/HeadPage";
import LogoHeaderpage from "../../../components/home_components/logoheader/LogoHeader";
import images1 from "../../../images/logo.png";
import FooterPage from "../../../components/home_components/footer/Footer";
import { useNavigate } from "react-router-dom";
import "../forgotpasswordpage/forgotpage.scss";
const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeadPage />

      {/* logo head start*/}

      <div className="logo-div">
        <div className="logo-div-lift">
          <img src={images1} alt="logo" />
        </div>

        <div className="logo-div-right">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Login
          </button>
        </div>
      </div>

      {/* logo head end*/}
      <div className="forgot-password">
        <form onSubmit="">
          <h2>Forgot Password ?</h2>
          <input type="email" placeholder="enter Email id" id="mail" />
          <button type="submit">Submit</button> <br />
        </form>
      </div>

      <FooterPage />
    </div>
  );
};

export default ForgotPassword;
