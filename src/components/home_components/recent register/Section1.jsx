import React from "react";
import "../../home_components/recent register/recent.scss";
import { BsEmojiSmile  } from "react-icons/bs";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { ImUsers } from "react-icons/im";



const Section1 = () => {
  return (
    <>

<div className="main-div-sec">

<div className="div-sec">
  <h1>How it Work?</h1>
  <p>
    Register and Find your Special Someone Matches Within Your Community.
  </p>
</div>

<div className="div-sec1">

  <div>
  <a><BsEmojiSmile style={{color:"#f8cd35", fontSize:"40px"}}/></a>
    <p>SIGN UP</p>
    <p>Register for free & put up your Profile.</p>
  </div>
  <div>
  
  <a><LiaNotesMedicalSolid  style={{color:"#f8cd35", fontSize:"40px"}}/></a>
    <p>CONNECT</p>
    <p>Select & Connect with Matches you like.</p>
  </div>
  <div style={{marginTop:"25px"}}>
  
  <a><ImUsers style={{color:"#f8cd35", fontSize:"40px"}}/></a>
    <p>INTERACT</p>
    <p>Become a Premium Member & Start a Conversation.</p>
  </div>

</div>
</div>


<div className="reg-div">
  <span><p>REGISTER</p><p id="now">NOW</p></span>
  <div>
    <p>Register and Update Your Profile Right Now!</p>
    <button>REGISTER</button>
  </div>
</div>





    </>
  );
};

export default Section1;
