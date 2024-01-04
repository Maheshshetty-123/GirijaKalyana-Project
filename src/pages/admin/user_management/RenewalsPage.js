import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';

const RenewalsPage = () => {
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
         <h1>RenewalsPage content</h1>
       </div>
    </div>
  </div>
  )
}

export default RenewalsPage