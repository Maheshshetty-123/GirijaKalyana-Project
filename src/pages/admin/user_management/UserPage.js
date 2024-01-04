import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import UserData from '../../../components/admin_components/user_management/userdata/UserData'
import './usermanagement.scss'


const UserPage = () => {
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
           <UserData/>
         </div>
      </div>
    </div>
  )
}

export default UserPage