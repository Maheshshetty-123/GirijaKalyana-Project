import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import PromotersEarningData from '../../../components/admin_components/promoter_management/promotersearningdata/PromotersEarningData';
import './promoter_managementpage.scss'

const PromotersEarningsPage = () => {
  return (
    <div className="main-admin-div">
      <div className="head-div">
      <Header />
      </div>
      <div className="div1">
       <div className="left-side"> 
       <Sidebar/>
       </div>
        <div className="promotermanagement-side-content">
           <PromotersEarningData/>
         </div>
      </div>
    </div>
  )
}

export default PromotersEarningsPage