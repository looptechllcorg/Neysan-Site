import React from 'react'
import "./Footer.scss"
import { NavLink } from 'react-router-dom'
import neysanLogo from "../../assets/image/Neysanlogo.png";
import FaceIcons from '../../assets/icons/FaceIcons';
import XIcon from '../../assets/icons/XIcon';
import YoutubeIcon from '../../assets/icons/YoutubeIcon';
import InstaIcon from '../../assets/icons/InstaIcon';
import LocationIcon from '../../assets/icons/LocationIcon';
import TelephoneIcon from '../../assets/icons/TelephoneIcon';
import MessageIcon from '../../assets/icons/MessageIcon';
const Footer = () => {
  return (
    <footer>
      <div className="overlay"></div>
   <div className="footerHead">
   <div className="container ">
        <div className="row justify-content-center align-items-center">
  
            <div className="footerLogo">
            <NavLink to="/" className="logo">
              <img src={neysanLogo} alt="" />
            </NavLink>
            <ul>
              <li>umumi textumumi textumumi textumumi1</li>
              <li>umumi textumumi textumumi textumumi2</li>
              <li>umumi textumumi textumumi textumumi3</li>
              <li>umumi textumumi textumumi textumumi4</li>
            </ul>
            <div className="socialLogos">
              <FaceIcons/>
              <XIcon/>
              <YoutubeIcon/>
              <InstaIcon/>
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
          <div className="col-3">
            <div className="footerContactUs">
           <h4>CONTACT US</h4>
              <ul>
                <li><LocationIcon/> Yasamal və Əhmədli filialları</li>
                <li></li>
                <br /><br />
                <li><TelephoneIcon/> +994 50 339 13 93</li>
                <li><MessageIcon/> Neysan@example.com</li>
                
              </ul>
            </div>
          </div>
    
          
        </div>
      </div>
   </div>
      <div className="footerBottom">
       <div className="container">
        <div className="row">
          <div className="col-3">
            <p className="copyright">Copyright © 2024</p>
          </div>
        </div>
       </div>
      </div>
    </footer>
  )
}

export default Footer