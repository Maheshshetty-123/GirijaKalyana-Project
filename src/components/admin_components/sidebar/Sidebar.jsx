import React, { useState,useEffect } from "react";
import { Nav, Button, Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FaRegCompass } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { FaColumns } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import profile from "../../../images/adminprofile.JPG";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./sidebar.scss";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    section1: false,
    section2: false,
    section3: false,
  });
  
  const [showprofile, setShowProfile] = useState(false);
  const handleCloseProfile = () => setShowProfile(false);
  const handleShowProfile = () => setShowProfile(true);

  const handleToggle = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  const navigate = useNavigate();
  const showdashboardpage = () => {
    navigate("/admin/dashboard");
  };
  const shownotification = () => {
    navigate("/admin/notification");
  };

 

  return (
    <>
      <div className="multi-button-dashboard">
      <div className="sidebar">
        <div className="profile-div">
          <img
            src={profile}
            alt=""
            style={{
              width: "60px",
              height: "70px",
              borderRadius: "90px",
              marginLeft: "20px",
            }}
          />
          <h6>Admin123@gmail.com</h6>
          <Link id="edit" onClick={handleShowProfile}>Edit Profile</Link>
        </div>

        <Button className="btn-dash" onClick={showdashboardpage}>
          <FaRegCompass
            style={{
              margin: "0 10px 5px 10px",
              position: "relative",
              top: "4px",
            }}
          />
          Dashboard
        </Button>

        <Button variant="white" onClick={() => handleToggle("section1")}>
          <IoIosListBox
            style={{
              margin: "0 10px 5px 10px",
              position: "relative",
              top: "4px",
              color: "#626262",
            }}
          />
          User Managemnet
          <FontAwesomeIcon
            icon={openSections.section1 ? faMinus : faPlus}
            className="plus-minus-icon"
          />
        </Button>
        <Collapse in={openSections.section1}>
          <div>
            <Nav className="flex-column">
              <Link to="/admin/user">User</Link>
              <Link to="/admin/upgrade">Upgrade Users</Link>
              <Link to="/admin/renewals">Renewals</Link>
              <Link to="/admin/resetpassword">Reset Password</Link>
              <Link to="/admin/imageverification">Image Verification</Link>
            </Nav>
          </div>
        </Collapse>

        <Button variant="white" onClick={() => handleToggle("section2")}>
          <IoIosListBox
            style={{
              margin: "0 10px 5px 10px",
              position: "relative",
              top: "4px",
              color: "#626262",
            }}
          />
          Assistance Service
          <FontAwesomeIcon
            icon={openSections.section2 ? faMinus : faPlus}
            className="plus-minus-icon"
          />
        </Button>
        <Collapse in={openSections.section2}>
          <div>
            <Nav className="flex-column">
              <Link to="/admin/assistencepending">Pending</Link>
              <Link to="/admin/assistencesuccess">Success</Link>
              <Link to="/admin/promotersusers">Promoter Users</Link>
            </Nav>
          </div>
        </Collapse>

        <Button variant="white" onClick={() => handleToggle("section3")}>
          <FaUsers
            style={{
              margin: "0 10px 5px 10px",
              position: "relative",
              top: "4px",
              color: "#626262",
            }}
          />
          Promoter Management
          <FontAwesomeIcon
            icon={openSections.section3 ? faMinus : faPlus}
            className="plus-minus-icon"
          />
        </Button>
        <Collapse in={openSections.section3}>
          <div>
            <Nav className="flex-column">
              <Link to="/admin/promoters">Promoters</Link>
              <Link to="/admin/promocodeusers">Promoters Users</Link>
              <Link to="/admin/promotersearnings">Promoters Earning</Link>
              <Link to="/admin/paytopromoters">Pay to Promoters</Link>
            </Nav>
          </div>
        </Collapse>

        <Button variant="white" onClick={() => handleToggle("section4")}>
          <FaColumns
            style={{
              margin: "0 10px 5px 10px",
              position: "relative",
              top: "4px",
              color: "#626262",
            }}
          />
          Receipts
          <FontAwesomeIcon
            icon={openSections.section4 ? faMinus : faPlus}
            className="plus-minus-icon"
          />
        </Button>
        <Collapse in={openSections.section4}>
          <div>
            <Nav className="flex-column">
              <Link to="/admin/onlinetransaction">Online Transaction</Link>
              <Link to="/admin/assistanceonlinetransaction">
                Assistance Online Transaction
              </Link>
              <Link to="/admin/receiptvoucher">Receipt Voucher</Link>
            </Nav>
          </div>
        </Collapse>

        <Button variant="white" onClick={() => handleToggle("section5")}>
          <FaEnvelope
            style={{
              margin: "0 10px 5px 10px",
              position: "relative",
              top: "4px",
              color: "#626262",
            }}
          />
          Reports
          <FontAwesomeIcon
            icon={openSections.section5 ? faMinus : faPlus}
            className="plus-minus-icon"
          />
        </Button>
        <Collapse in={openSections.section5}>
          <div>
            <Nav className="flex-column">
              <Link to="/admin/usersreports">Users </Link>
              <Link to="/admin/renewalsreports">Renewals</Link>
              <Link to="/admin/receiptsreports">Receipts</Link>
            </Nav>
          </div>
        </Collapse>

        <Button
          className="nati-button"
          variant="white"
          onClick={shownotification}
        >
          <IoIosNotifications
            style={{
              margin: "0 10px 5px 10px",
              position: "relative",
              top: "4px",
              color: "#626262",
            }}
          />
          Notification
        </Button>
      </div>
    </div>

    
      {/* pop for profile */}

      <Modal
        show={showprofile}
        onHide={handleCloseProfile}
        className="main-div-popup"
      >
        <Modal.Header closeButton className="popup-head">
          <Modal.Title className="popup-tittle">
            Change Profile Image
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="popup-body">
          <div className="profile-div">
            <div>
              <img src={profile} alt="" />
            </div>
            <div className="file-div">
              <input type="file" />
              <div id="btn-div">
                <Button id="submit-btn" onClick={handleCloseProfile}>
                  SUBMIT
                </Button>
                <Button id="close-btn" onClick={handleCloseProfile}>
                  CLOSE
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Sidebar;
