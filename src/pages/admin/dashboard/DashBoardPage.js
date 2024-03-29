import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import DashBoard from '../../../components/admin_components/dashboard/DashBoard';
import '../../../pages/admin/dashboard/dashboardpage.scss'

const DashBoardPage = () => {
  return (
    <div className="main-admin-div">
      <div className="head-div">
      <Header />
      </div>
      <div className="div1">
       <div className="left-side"> 
       <Sidebar/>
       </div>
        <div className="dashboard-content">
           <DashBoard/> 
         </div>
      </div>
    </div>
  )
}

export default DashBoardPage;