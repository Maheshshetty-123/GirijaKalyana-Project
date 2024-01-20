import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import PromotersManagementUsersData from '../../../components/admin_components/promoter_management/promotersuserdata/PromotersManagementUsersData';
import './promoter_managementpage.scss'

const PromotersManagementUsersPage = () => {
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
           <PromotersManagementUsersData/>
         </div>
      </div>
    </div>
  )
}

export default PromotersManagementUsersPage