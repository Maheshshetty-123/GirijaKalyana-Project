import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import SuccessData from '../../../components/admin_components/Assistenceservicedata/successdata/SuccessData';
import './assistenceservice.scss'
const SuccessPage = () => {
  return (
    <div className="main-admin-div">
      <div className="head-div">
      <Header />
      </div>
      <div className="div1">
       <div className="left-side"> 
       <Sidebar/>
       </div>
        <div className="assistenceservice-side-content">
           <SuccessData/>
         </div>
      </div>
    </div>
  )
}

export default SuccessPage