import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import ResetPasswordData from '../../../components/admin_components/user_management/resetpassworddata/ResetPasswordData';

const ResetPasswordPage = () => {
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
          <ResetPasswordData/>
         </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage