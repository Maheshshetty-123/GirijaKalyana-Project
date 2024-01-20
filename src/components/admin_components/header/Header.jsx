import React from "react";
import { useState } from "react";
import logo from "../../../images/logo.png";
import profile from "../../../images/adminprofile.JPG";
import { useNavigate } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./header.scss";

const Header = () => {
  const [showsetting, setShowSetting] = useState(false);
  const [showprofile, setShowProfile] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const navigate = useNavigate();
  const handleCloseSetting = () => setShowSetting(false);
  const handleShowSetting = () => setShowSetting(true);

  const handleCloseProfile = () => setShowProfile(false);
  const handleShowProfile = () => setShowProfile(true);

  const shownotification = () => {
    setShowNotification((prev) => !prev);
  };

  return (
    <>
      <div className="dashboard-main-div">
        <div className="dasboard-logo-div">
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/admin/dashboard");
            }}
          />
        </div>

        <div className="dashboard-right-div">
          <div className="notification-div">
            <span>
              <IoIosNotifications
                style={{ color: "black", fontSize: "25px", zIndex: "3" }}
                onClick={shownotification}
              />
            </span>
            <p id="show-count" onClick={shownotification}>
              10
            </p>
          </div>
          {showNotification ? (
            <div className="notification-disp">
              <p
                id="show"
                onClick={() => {
                  navigate("/admin/imageverification");
                }}
              >
                notification
              </p>
            </div>
          ) : (
            ""
          )}
          <div>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{
                  backgroundColor: "orange",
                  border: "none",
                  color: "#252328",
                }}
              >
                <img
                  src={profile}
                  alt=""
                  style={{
                    width: "20px",
                    height: "30px",
                    borderRadius: "90px",
                    marginRight: "5px",
                  }}
                />
                Admin123@gmail.com
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className="drop-ietm"
                  onClick={handleShowSetting}
                >
                  <IoIosSettings style={{ marginRight: "5px" }} /> Setting
                </Dropdown.Item>
                <Dropdown.Item
                  className="drop-ietm"
                  onClick={handleShowProfile}
                >
                  <CgProfile style={{ marginRight: "5px" }} /> Profile
                </Dropdown.Item>
                <Dropdown.Item
                  className="drop-ietm"
                  onClick={() => {
                    navigate("/admin/logout");
                  }}
                >
                  <FiLogOut style={{ marginRight: "5px" }} /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* pop for setting */}

      <Modal
        show={showsetting}
        onHide={handleCloseSetting}
        className="main-div-popup"
      >
        <Modal.Header closeButton className="popup-head">
          <Modal.Title className="popup-tittle">Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className="popup-body">
          <Form onSubmit={""}>
            <input type="text" placeholder="Admin123@gmail.com" />
            <input type="text" placeholder="**********" />
            <input type="text" placeholder="New Password" />
            <input type="text" placeholder="Confirm Password" />
          </Form>
        </Modal.Body>
        <Modal.Footer className="popup-footer">
          <Button id="submit-btn" onClick={handleCloseSetting}>
            SUBMIT
          </Button>
          <Button id="close-btn" onClick={handleCloseSetting}>
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>

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

export default Header;
