import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import OnlineTransactionData from '../../../components/admin_components/receipts/onlinetransaction/OnlineTransactionData';

const OnlineTransactionPage = () => {
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
           <OnlineTransactionData/>
         </div>
      </div>
    </div>
  )
}

export default OnlineTransactionPage