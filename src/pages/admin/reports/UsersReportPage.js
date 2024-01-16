import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import UsersReportsData from '../../../components/admin_components/reports/userreports/UsersReportsData';

const UsersReportPage = () => {
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
          <UsersReportsData/>
         </div>
      </div>
    </div>
  )
}

export default UsersReportPage