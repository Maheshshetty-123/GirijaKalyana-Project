import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import NotificationData from '../../../components/admin_components/notification/NotificationData';

const NotificationPage = () => {
  return (
    <div className="main-admin-div">
    <div className="head-div">
    <Header />
    </div>
    <div className="div1">
     <div className="left-side"> 
     <Sidebar/>
     </div>
      <div className="content">
         <NotificationData/>
       </div>
    </div>
  </div>
  )
}

export default NotificationPage