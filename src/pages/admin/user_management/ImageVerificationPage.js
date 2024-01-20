import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import ImageVerificationData from '../../../components/admin_components/user_management/imageverificationdata.js/ImageVerificationData';

const ImageVerificationPage = () => {
  return (
    <div className="main-admin-div">
    <div className="head-div">
    <Header />
    </div>
    <div className="div1">
     <div className="left-side"> 
     <Sidebar/>
     </div>
      <div className="usermanagement-side-content">
         <ImageVerificationData/>
       </div>
    </div>
  </div>
  )
}

export default ImageVerificationPage