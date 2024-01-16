import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import PendingData from '../../../components/admin_components/Assistenceservicedata/pendingdata/PendingData';
import '../style/usermanagement.scss'

const PendingPage = () => {
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
          <PendingData/>
         </div>
      </div>
    </div>
  )
}

export default PendingPage