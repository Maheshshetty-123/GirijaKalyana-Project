import React from 'react'
import Navbar from "../../../components/home_components/nav/Navbar";
import HeadPage from "../../../components/home_components/head/HeadPage";
import FooterPage from "../../../components/home_components/footer/Footer";



const AboutUsPage = () => {
  return (
    <div>
    <HeadPage />
    <Navbar />
   <center><div style={{height:'500px'}}> <h1>about us content...</h1></div></center>
    <FooterPage/>
  </div> 
  )
}

export default AboutUsPage