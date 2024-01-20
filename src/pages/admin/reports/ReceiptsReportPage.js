import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import ReceiptsReportsData from '../../../components/admin_components/reports/receiptsreports/ReceiptsReportsdata';
import './reportspage.scss'

const ReceiptsReportPage = () => {
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
         <ReceiptsReportsData/>
       </div>
    </div>
  </div>
  )
}

export default ReceiptsReportPage