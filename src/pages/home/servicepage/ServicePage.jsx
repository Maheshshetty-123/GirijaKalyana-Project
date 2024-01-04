import React from "react";
import Navbar from "../../../components/home_components/nav/Navbar";
import HeadPage from "../../../components/home_components/head/HeadPage";
import FooterPage from "../../../components/home_components/footer/Footer";
import ServiceBodySection from "../../../components/home_components/services/ServiceBodySection";

const ServicePage = () => {
  return (
    <div>
      <HeadPage />
      <Navbar />
      <ServiceBodySection/>
      <FooterPage/>
    </div> 
    
  );
};

export default ServicePage;
