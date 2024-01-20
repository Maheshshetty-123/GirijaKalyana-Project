import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import PromotersData from '../../../components/admin_components/promoter_management/promotersdata/PromotersData';
import './promoter_managementpage.scss'

const PromotersPage = () => {
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
           <PromotersData/>
         </div>
      </div>
    </div>
  )
}

export default PromotersPage