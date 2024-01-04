import React from "react";
import { FaNewspaper } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { GrBook } from "react-icons/gr";
import { LuCoffee } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import arrowmark from "../../../images/serviceImages/arrowdown.png";
import "./servicepage.scss";

const ServiceBodySection = () => {
  return (
    <>
      <div className="servicebody">
        <h2>ASSISTED SERVICE ADVANTAGES</h2>

        <div>
          <div className="newspaperdiv">
            <a>
              <LuNewspaper style={{ fontSize: "45px", color: "white" }} />
            </a>{" "}
            <br />
            <p className="pfontsize">SHARE YOUR RESPONSIBILITY</p>
            <p>
              A highly involved Relationship Manager understands your
              expectations and provides personalised assistance.
            </p>
          </div>
        </div>

        <img src={arrowmark} />

        <div>
          <div className="searchdiv">
            <a>
              <IoSearchOutline style={{ fontSize: "45px", color: "white" }} />
            </a>{" "}
            <br />
            <p className="pfontsize">EXPERT SEARCH WITHIN REACH</p>
            <p>
              Your Relationship Manager employs advanced tools and expert
              knowledge to find matching members from thousands of profiles.
            </p>
          </div>
        </div>
        <img src={arrowmark} />

        <div>
          <div className="shortlistdiv">
            <a>
              <GrBook style={{ fontSize: "45px", color: "white" }} />
            </a>{" "}
            <br />
            <p className="pfontsize">SHORTLISTED MATCHES</p>
            <p>
              Your Relationship Manager contacts prospects on your behalf and
              ensures effective communication between you and your matches.
            </p>
          </div>
        </div>
        <img src={arrowmark} />

        <div>
          <div className="initiatediv">
            <a>
              <IoCallOutline style={{ fontSize: "45px" }} />
            </a>{" "}
            <br />
            <p className="pfontsize">INITIATE COMMUNICATION</p>
            <p>
              Your Relationship Manager carefully handpicks profiles that are
              most suitable for you and sends them for your review.
            </p>
          </div>
        </div>
        <img src={arrowmark} />

        <div>
          <div className="meetdiv">
            <a>
              <LuCoffee style={{ fontSize: "45px", color: "white" }} />
            </a>{" "}
            <br />
            <p className="pfontsize">MEET THE PROSPECTS</p>
            <p>
              Your Relationship Manager contacts prospects and facilitates a
              meeting based on mutual interest.
            </p>
          </div>
        </div>
        <img src={arrowmark} />

        <div>
          <div className="user">
            <a>
              <TbUsers style={{ fontSize: "45px", color: "white" }} />
            </a>
            <img src={arrowmark} />
          </div>
        </div>
      </div>
      <div className="happydiv">
        <p id="happy">Happy Assisted Marriages</p>
        <p>Assistance Service will be Started Shortly!</p>
      </div>
    </>
  );
};

export default ServiceBodySection;
