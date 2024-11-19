import React from 'react'
import "./Header.scss"
import neysanLogo from "../../assets/image/Neysanlogo.png";
import SearchIcon from "../../assets/icons/SearchIcon";
import { Link,NavLink } from 'react-router-dom';
import ArrowBottomIcon from '../../assets/icons/ArrowBottomIcon';
const Header = () => {
  return (
  <header>
    <div className="container-fluid ">
        <div className="row justify-content-around">
            <div className="col-2 ">
              <div className="logo">
                <img src={neysanLogo} alt="" />
              </div>

            </div>
            <div className="col-8">
              <div className="nav_items row align-items-center">
                <div className="col-7">
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
                </div>
                <div className="col-4">
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
    </div>
    
  </header>

  )
}

export default Header