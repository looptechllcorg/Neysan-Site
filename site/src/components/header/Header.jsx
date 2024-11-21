import React, { useState } from 'react'
import "./Header.scss"
import neysanLogo from "../../assets/image/Neysanlogo.png";
import SearchIcon from "../../assets/icons/SearchIcon";
import MenuIcon from "../../assets/icons/MenuIcon";
import { Link,NavLink } from 'react-router-dom';
import CloseIcon from '../../assets/icons/CloseIcon';
// import ArrowBottomIcon from '../../assets/icons/ArrowBottomIcon';
const Header = () => {
  const [navActive,setnavActive] = useState(false)
  return (
    <>
    
    
  <header className='desktopNavbar'>
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
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              Our Company
            </NavLink></li>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              Products
            </NavLink></li>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              Media
            </NavLink></li>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              Point of sale
            </NavLink></li>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              Contact
            </NavLink></li>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#777777"
              })}
            >
              About
            </NavLink></li>
              
              </ul>
               
                
                  <div className="nav_btns">
                    <div className="search">
                      <input type="text" placeholder='Search...' />
                      <div className="icon">

                      <SearchIcon/>
                      </div>
                    </div>
                    <div className="changeLang">
                      {/* <ArrowBottomIcon/> */}
                      <select  name="language">
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
  <header className="mobileNavbar">
    <div className="container d-flex align-items-center justify-content-around">
      <div className="searchIcon">
        <SearchIcon/>
      </div>
      <div className="mobileLogo">
        <img src={neysanLogo} alt="" />
      </div>
     
        {navActive == true ?  <span onClick={()=>{
        setnavActive(false)
        console.log(navActive);
      }} className="openNavbar"><CloseIcon/></span >: <span onClick={()=>{
        setnavActive(true)
        console.log(navActive);
      }} className="openNavbar"><MenuIcon/></span >}
     
      
    </div>
    <div className={`${navActive==true ? "mobileNavbarItems" :"noneMobileNavbar"}`}>
    <div className="straxberry-slice">
    </div>
    <ul className='nav_links'>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
              Our Company
            </NavLink></li>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
              Products
            </NavLink></li>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
              Media
            </NavLink></li>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
              Point of sale
            </NavLink></li>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
              Contact
            </NavLink></li>
                <li>
                <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FFB212" : "#006633"
              })}
            >
              About
            </NavLink></li>
              
              </ul>
  </div>
  </header>
  </>
  )
}

export default Header