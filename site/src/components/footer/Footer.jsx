import React from 'react'
import "./Footer.scss"
import { NavLink } from 'react-router-dom'
import neysanLogo from "../../assets/image/Neysanlogo.png";
import FaceIcons from '../../assets/icons/FaceIcons';
import XIcon from '../../assets/icons/XIcon';
import YoutubeIcon from '../../assets/icons/YoutubeIcon';
import InstaIcon from '../../assets/icons/InstaIcon';
const Footer = () => {
  return (
    <footer>
      <div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-2">
            <div className="footerLogo">
            <NavLink to="/" className="logo">
              <img src={neysanLogo} alt="" />
            </NavLink>
            <ul>
              <li>Lorem ipsum dolor sit.1</li>
              <li>Lorem ipsum dolor sit.2</li>
              <li>Lorem ipsum dolor sit.3</li>
              <li>Lorem ipsum dolor sit.4</li>
            </ul>
            <div className="socialLogos">
              <FaceIcons/>
              <XIcon/>
              <YoutubeIcon/>
              <InstaIcon/>
            </div>
            </div>
           
          </div>
          <div className="col-2">
            <div className="footerAboutUs">
           <h4>ABOUT US</h4>
              <ul>
                <li>Our Company</li>
                <li>Product</li>
                <li>History</li>
                <li>Media</li>
                <li>Point of Sale</li>
                <li>Useful</li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="footerContactUs">
           <h4>CONTACT US</h4>
              <ul>
                <li>Our Company</li>
                <li>Product</li>
                <li>History</li>
                <li>Media</li>
                <li>Point of Sale</li>
                <li>Useful</li>
              </ul>
            </div>
          </div>
    
          
        </div>
      </div>
    </footer>
  )
}

export default Footer