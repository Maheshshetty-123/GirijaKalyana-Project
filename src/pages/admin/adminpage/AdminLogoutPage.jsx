import React from "react";
import logo from "../../../../src/images/logo.png";
import { useNavigate } from "react-router-dom";
import "../../../pages/admin/adminpage/adminpagedesign.scss";

const AdminLogoutPage = () => {
  const navigate = useNavigate();

  const openhomepage = () => {
    navigate("/");
    // navigate to Home page return
  };

  return (
    <div className="logout-main-div">
      <img src={logo} alt="" />
      <div className="logout-sec-div">
        <div className="logout1">
          <h5>Logout</h5>
        </div>
        <div className="logout2">
          <p>You have successfully logged out</p>
          <button type="submit" onClick={openhomepage}>
            CLICK HERE TO LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogoutPage;
