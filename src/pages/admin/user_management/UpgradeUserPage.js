import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import UpGradeUserData from '../../../components/admin_components/user_management/upgradeuserdata/UpGradeUserData';

const UpgradeUserPage = () => {
  return (
    <div className="main-admin-div">
      <div className="head-div">
      <Header />
      </div>
      <div className="div1">
       <div className="left-side"> 
       <Sidebar/>
       </div>
        <div className="side-content">
          <UpGradeUserData/>
         </div>
      </div>
    </div>
  )
}

export default UpgradeUserPage