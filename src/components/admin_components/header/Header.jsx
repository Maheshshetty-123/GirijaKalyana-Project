import React from "react";
import { useState } from "react";
import logo from "../../../images/logo.png";
import profile from "../../../images/adminprofile.JPG";
import { useNavigate } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import Noty from "../dashboard/Noty";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import { FaUser } from "react-icons/fa";
import './header.scss'

const Header = () => {
  const navigate = useNavigate();

  const [showsetting, setShowSetting] = useState(false);
  const [showprofile, setShowProfile] = useState(false);

  const handleCloseSetting = () => setShowSetting(false);
  const handleShowSetting = () => setShowSetting(true);

  const handleCloseProfile = () => setShowProfile(false);
  const handleShowProfile = () => setShowProfile(true);

  return (
    <>
      <div className="dashboard-main-div">
        <div className="dasboard-logo-div">
          <img src={logo} alt="logo" onClick={()=>{navigate("/admin/dashboard");}}/>
        </div>

        <div className="dashboard-right-div">
          <Noty width={"30px"} color={"#122C34"} count={10} />
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
              <div>
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
