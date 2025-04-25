import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import leavesPattern from "../../assets/pattern/leaves2Pattern.png";
import leavesPattern2 from "../../assets/pattern/leavesPattern.png";
// import neysanLogo from "../../assets/image/Neysanlogo.png";
import neysanLogo from "../../assets/Logos/NeysanLogo2.png";
import FaceIcons from "../../assets/icons/FaceIcons";
import InstaIcon from "../../assets/icons/InstaIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import TelephoneIcon from "../../assets/icons/TelephoneIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import FooterBG from "../../assets/image/GroupFooter.png";
import Looptech from "../../assets/Logos/new-looptech2.png"
import { useTranslation } from "react-i18next";
import LooptechLogo from "../../assets/icons/LooptechLogo";
const Footer = () => {
    const {t} = useTranslation()
  return (
    <footer style={{ backgroundImage: `url(${FooterBG})` }}>
      <img src={leavesPattern} alt="" className="leavesPatternLeft" />
      <img src={leavesPattern2} alt="" className="leavesPatternRight" />
     
      <div className="footerHead">
        <div className="container ">
          <div className="row pt-5 pb-2 justify-content-between ">
            <div className="col-xl-2 col-lg-3 col-sm-12 g-3">
            <NavLink to="/" className="logo">
                <img src={neysanLogo} alt="" />
              </NavLink>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 g-3 footerText">
             
             <p>{t("footerText")}</p>
              <div className="socialLogos">
                <a href="https://www.facebook.com/" target="_blank"><FaceIcons /></a>
                <a href="https://www.instagram.com/" target="_blank"><InstaIcon /></a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 g-3">
              <div className="footerAboutUs">
                <h4>{t("aboutUs")}</h4>
                <ul>
                  <li><NavLink to="/our-company">{t("ourCompany")}</NavLink> </li>
                  <li><NavLink to="/product">{t("products")}</NavLink></li>
                  {/* <li>History</li> */}
                  <li> <NavLink to="/photos">{t("photos")}</NavLink></li>
                  <li> <NavLink to="/point-of-sale">{t("PointSales")}</NavLink></li>
                  <li> <NavLink to="/contact">{t("contact")}</NavLink></li>
                  {/*<li>Useful</li>*/}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 g-3">
              <div className="footerContactUs">
                <h4>{t("contactUs2")}</h4>
                <ul>
                  <li></li>
                  <li>
                    <LocationIcon /> Yasamal və Əhmədli filialları
                  </li>
                
                  <li>
                    <TelephoneIcon /> +994 12 404 25 40
                  </li>
                  <li>
                    <MessageIcon /> İnfoziraolives.az
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footerBottomDiv">

               <a href="#" className="copyright">{t("2025copyright")}</a>
               <a  href="https://looptech.az/" target="_blank" className="copyright">
               {t("footerCopyright")} :  
               <img src={Looptech} alt="Looptech Logo" />
               </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
