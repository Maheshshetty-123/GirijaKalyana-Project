import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../body/section.scss";
import img1 from "../../../images/CarouselsImages/img1.jpg";
import img2 from "../../../images/CarouselsImages/img2.jpg";
import img3 from "../../../images/CarouselsImages/img3.jpg";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";

const Section = () => {
  const [key, setKey] = useState("1");
  const navigation = useNavigate();

  const [showerror, setShowError] = useState(false);

  const [username, setUsername] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "mahi1@gmail.com" && password === "4321") {
      navigation("admin/dashboard");
    } else if (password === "4321" && mobilenumber === "8073434727") {
      navigation("admin/dashboard");
    } else {
      setShowError(true);
    }
  };

  const handleTabSelect = () => {
    setKey();
  };
  return (
    // Carousel part

    <div className="main-sec-div">
      <div className="img-sec">
        <Carousel className="Carousel-img-div">
          <Carousel.Item interval={1000}>
            <img src={img1} alt="firstimg" />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img src={img2} alt="secondimg" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} alt="thirdimg" />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* // form portion */}

      <div className="main-form-div">
        <div className="login-sec">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={() => handleTabSelect()}
            className="tabs"
          >
            <Tab eventKey="1" title="Email ID" className="tab">
              <div className="form-div">
                <form onSubmit={handleLogin}>
                  <h2>USER LOGIN</h2>
                  {showerror && (
                    <div>
                      <p style={{ color: "red" }}>
                        User name and password is not valid
                      </p>
                    </div>
                  )}
                  <input
                    type="email"
                    placeholder="Email"
                    id="mail"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="submit">Login</button> <br />
                  <Link to="/forgotpasswordpage">Forgot Password?</Link>
                </form>
              </div>
            </Tab>

            <Tab eventKey="2" title="Mobile" className="tab">
              <div className="form-div">
                <form onSubmit={handleLogin}>
                  <h2>USER LOGIN</h2>
                  {showerror && (
                    <div>
                      <p style={{ color: "red" }}>
                        User name and password is not valid
                      </p>
                    </div>
                  )}
                  <input
                    type="number"
                    placeholder="Mobile No"
                    id="mail"
                    value={mobilenumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button>SUBMIT</button> <br />
                  <Link to="/forgotpasswordpage">Forgot Password?</Link>
                </form>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

      {/* // data portion */}
      <div className="main-data-update-div">
        <div className="data-update-div">
          <h3>3901+</h3>
          <p>Profiles</p>
        </div>
        <div className="data-update-div">
          <h3>15+</h3>
          <p>This week Registrations</p>
        </div>
        <div className="data-update-div">
          <h3>2+</h3>
          <p>This Month Registrations</p>
        </div>
      </div>
    </div>
  );
};

export default Section;
