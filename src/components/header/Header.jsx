import React, { useEffect, useRef, useState } from 'react'
import "./Header.scss"
import neysanLogo from "../../assets/image/Neysanlogo.png";
import SearchIcon from "../../assets/icons/SearchIcon";
import MenuIcon from "../../assets/icons/MenuIcon";
import { Link,NavLink, useNavigate } from 'react-router-dom';
import CloseIcon from '../../assets/icons/CloseIcon';

import { useDataContext } from '../../Contexts/SearchContext';
import { LanguageContext } from '../../Contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const {t} = useTranslation()
  const { siteLang,onClickChangeLang, inputChangeLang } = LanguageContext();
  const [navActive,setnavActive] = useState(false)
  const [mobiLListActive,setmobilListActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledFar, setIsScrolledFar] = useState(false);
  const {searchInputValue,setSearchInputValue ,searchFunctions}= useDataContext()
  
  
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search")
  };

const openActiveList = ()=>{
  setmobilListActive(!mobiLListActive)
}

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (scrollTop > 100) {
        setIsScrolledFar(true);
      } else {
        setIsScrolledFar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    
    
  <header className={`desktopNavbar ${isScrolledFar ? "navbaractive" : ""}`}
        style={{
          transform: isScrolled && !isScrolledFar ? "translateY(-200px)" : "translateY(0px)",
        }}>
    <div className="container">
        <div className="row justify-content-around">
            <div className="col-3">
            <NavLink to="/" >
            <div className="logo">
                <img src={neysanLogo} alt="" />
              </div>
            </NavLink>
              
            </div>
            <div className="col-9">
              <div className="nav_items justify-content-around row align-items-center">
             
                <ul className='nav_links'>
                <li>
                <NavLink
              to="/our-company"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              {t("ourCompany")}
            </NavLink></li>
                <li>
                <NavLink
              to="/product"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              {t("products")}
            </NavLink></li>
                <li>
                <NavLink to="/photos">{t("photos")}</NavLink>
                {/* <a >{t("media")}</a>
                <ul className='hoverList'>
                  <li>
                    <NavLink to="/photos">{t("photos")}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/videos">{t("videos")}</NavLink>
                  </li>
                </ul> */}
                </li>
                <li>
                <NavLink
              to="/point-of-sale"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              {t("PointSales")}
            </NavLink></li>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              {t("contact")}
            </NavLink></li>

              
              </ul>
               
                
                  <div className="nav_btns">
                    <div className="search">
                     <form  onSubmit={handleSearch}>
                     <input
                      onChange={(e)=>{
                        setSearchInputValue(e.target.value)
                        searchFunctions()
                      }
                      }
                      value={searchInputValue || ""}  
                      type="text" placeholder={`${t("search")}...` } 
                      />
                     </form>
                      <div className="icon">

                      <SearchIcon/>
                      </div>
                    </div>
                    <div className="changeLang">
                      {/* <ArrowBottomIcon/> */}
                      <select onChange={inputChangeLang} value={siteLang} name="language">
                            <option value="az">AZ</option>
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                        </select>
                    </div>
                  </div>
                
              </div>
            
            </div>
        </div>
    </div>
    
  </header>
  <header className={`mobileNavbar ${isScrolledFar ? "navbaractive" : ""}`}
        style={{
          transform: isScrolled && !isScrolledFar ? "translateY(-200px)" : "translateY(0px)",
        }}
  >
    <div className="container">
      <div className="row align-items-center justify-content-around">
        <div className="col-2"><div className="searchIcon">
          <SearchIcon/>
        </div></div>
        <div className="col-6">
        <div className="mobileLogo">
          <NavLink  
          to="/"
          onClick={()=>{setnavActive(false);}}>

          <img src={neysanLogo} alt="Logo" />
          </NavLink>
        </div>
        </div>
        <div className="col-3">
        {navActive == true ?  <span 
          onClick={()=>{setnavActive(false);}}
          className="openNavbar"><CloseIcon/></span >: <span onClick={()=>{
          setnavActive(true)
          console.log(navActive);
        }} className="openNavbar"><MenuIcon/></span >}
        </div>

        
     
      
          
      </div>
     
      
    </div>
    <div className={`${navActive==true ? "mobileNavbarItems" :"noneMobileNavbar"}`}>
    <div className="straxberry-slice my-3">
    {["az", "en", "ru"].map((lang,idx) => (
        <button
          key={idx}
          onClick={() =>{
            onClickChangeLang(lang)
            setnavActive(false)}
           } 
          className={`${
            siteLang === lang ? "activebtn" : "deactivebtn"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
    <ul className='nav_links'>
                <li>
                <NavLink
                onClick={()=>{setnavActive(false);}}
              to="/our-company"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
            {t("ourCompany")}
            </NavLink></li>
                <li>
                <NavLink
              to="/product"
                onClick={()=>{setnavActive(false);}}
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
             {t("products")}
            </NavLink></li>
                {/* <li onClick={ ()=>openActiveList()}>
                <a>{t("media")}</a>
                  <ul style={{
                    "--listHeight" : mobiLListActive == true ? "auto" : "0"
                  }} className="activeList">
                    <li>
                      <NavLink
                      onClick={()=>{setnavActive(false);}}
                      style={({ isActive }) => ({
                        color: isActive ? "#FFB212" : "#006633"
                      })} to="/photos">{t("photos")}</NavLink>
                    </li>
                    <li>
                      <NavLink
                      onClick={()=>{setnavActive(false);}}
                      style={({ isActive }) => ({
                        color: isActive ? "#FFB212" : "#006633"
                      })}
                       to="/videos">{t("videos")}</NavLink>
                    </li>
                  </ul>
                </li> */}
                <li>
                <NavLink
              to="/photos"
                onClick={()=>{setnavActive(false);}}
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
             {t("photos")}
            </NavLink></li>
                <li>
                <NavLink
                onClick={()=>{setnavActive(false);}}
              to="/point-of-sale"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
              {t("PointSales")}
            </NavLink></li>
                <li>
                <NavLink
                onClick={()=>{setnavActive(false);}}
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
              {t("contact")}
            </NavLink></li>
               
              
              </ul>
  </div>
  </header>
  </>
  )
}

export default Header