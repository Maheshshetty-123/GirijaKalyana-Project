import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';

const SuccessPage = () => {
  return (
    <div className="main-admin-div">
      <div className="head-div">
      <Header />
      </div>
      <div className="div1">
       <div className="left-side"> 
       <Sidebar/>
       </div>
        <div className="content">
           <h1>SuccessPage content</h1>
           {/* here we need to call content */}
         </div>
      </div>
    </div>
  )
}

export default SuccessPage