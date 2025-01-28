import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import neysanLogo from "../../assets/image/Neysanlogo.png";
import FaceIcons from "../../assets/icons/FaceIcons";
import XIcon from "../../assets/icons/XIcon";
import YoutubeIcon from "../../assets/icons/YoutubeIcon";
import InstaIcon from "../../assets/icons/InstaIcon";
import LocationIcon from "../../assets/icons/LocationIcon";
import TelephoneIcon from "../../assets/icons/TelephoneIcon";
import MessageIcon from "../../assets/icons/MessageIcon";
import FooterBG from "../../assets/image/GroupFooter.png";
import { useTranslation } from "react-i18next";
const Footer = () => {
    const {t} = useTranslation()
  return (
    <footer style={{ backgroundImage: `url(${FooterBG})` }}>
      <div className="footerHead">
        <div className="container ">
          <div className="row py-5 justify-content-center align-items-center ">
            <div className="col-lg-3 col-sm-12 g-3">
            <NavLink to="/" className="logo">
                <img src={neysanLogo} alt="" />
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-6 g-3 footerText">
             
             <p>Our fruit jams are crafted with the finest, hand-picked fruits to deliver a burst of natural flavor in every spoonful. Made with simple, high-quality ingredients.</p>
              <div className="socialLogos">
                <FaceIcons />
                <XIcon />
                <YoutubeIcon />
                <InstaIcon />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 g-3">
              <div className="footerAboutUs">
                <h4>ABOUT US</h4>
                <ul>
                  <li> {t("ourCompany")}</li>
                  <li>{t("products")}</li>
                  <li>History</li>
                  <li>{t("media")}</li>
                  <li>{t("PointSales")}</li>
                  <li>Useful</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 g-3">
              <div className="footerContactUs">
                <h4>{t("contactUs")}</h4>
                <ul>
                  <li></li>
                  <li>
                    <LocationIcon /> Yasamal və Əhmədli filialları
                  </li>
                
                  <li>
                    <TelephoneIcon /> +994 50 339 13 93
                  </li>
                  <li>
                    <MessageIcon /> Neysan@example.com
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
            <div className="col-6">
              <p className="copyright">Copyright © 2024</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
