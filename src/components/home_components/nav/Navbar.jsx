import React from 'react'
import "./nav.scss";
// import Section from '../body/Section';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (

    <>
    <div className='div-nav'>
    <nav className='nav'>
        <Link className='home-btn' to="/">Home</Link>
        <Link to="/ServicePage" >Service</Link>
        <Link to="/aboutus" >About us</Link>
        <Link to="/privacypolicy">privacy policy</Link>
        <Link to="/contact">Contact us</Link>
    </nav>
    
    
    
    </div>
    
</>

  )
}

export default Navbar;