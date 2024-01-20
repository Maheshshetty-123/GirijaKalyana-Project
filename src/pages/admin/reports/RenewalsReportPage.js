import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import RenewalsReportsData from '../../../components/admin_components/reports/renewalsreports/RenewalsReportsData';
import './reportspage.scss'

const RenewalsReportPage = () => {
  return (
    <div className="main-admin-div">
    <div className="head-div">
    <Header />
    </div>
    <div className="div1">
     <div className="left-side"> 
     <Sidebar/>
     </div>
      <div className="reportspage-side-content">
       <RenewalsReportsData/>
       </div>
    </div>
  </div>
  )
}

export default RenewalsReportPage;