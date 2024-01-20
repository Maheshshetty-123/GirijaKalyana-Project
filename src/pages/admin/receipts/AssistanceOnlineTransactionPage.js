import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import AssistanceOnlineTransactionData from '../../../components/admin_components/receipts/assistanceonlinetransaction/AssistanceOnlineTransactionData';
import './receipts.scss'
const AssistanceOnlineTransactionPage = () => {
  return (
    <div className="main-admin-div">
      <div className="head-div">
      <Header />
      </div>
      <div className="div1">
       <div className="left-side"> 
       <Sidebar/>
       </div>
        <div className="receipts-side-content">
          <AssistanceOnlineTransactionData/>
         </div>
      </div>
    </div>
  )
}

export default AssistanceOnlineTransactionPage