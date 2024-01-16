import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import PromotersUsersData from '../../../components/admin_components/promoter_management/promotersuserdata/PromotersUsersData';
import '../style/usermanagement.scss'
const PromotersUsersPage = () => {
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
           <PromotersUsersData/>
         </div>
      </div>
    </div>
  )
}

export default PromotersUsersPage