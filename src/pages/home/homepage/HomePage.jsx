import React from "react";
import HeadPage from "../../../components/home_components/head/HeadPage.jsx";
import Navbar from "../../../components/home_components/nav/Navbar.jsx";
import Section from "../../../components/home_components/body/Section.jsx";
import RecentRegisters from "../../../components/home_components/recent register/RecentRegisters.jsx";
import Section1 from "../../../components/home_components/recent register/Section1.jsx";
import FooterPage from "../../../components/home_components/footer/Footer.jsx";
import LogoHeaderpage from "../../../components/home_components/logoheader/LogoHeader.jsx";

const HomePage = ({open}) => {
  return (
    <div>
      <HeadPage />
      <LogoHeaderpage />
      <Navbar />
      <Section />
      <RecentRegisters />
      <Section1 />
      <FooterPage />
    </div>
  );
};

export default HomePage;
