import React from "react"
import Nav from "../../assets/images/samples/Logo+text_wide.png"
import profile from "../../assets/icons/Profile.svg"
import Search from "../../assets/icons/Search.svg"
// import drop from "../../assets/icons/Arrow Down.svg"
// import ThemeSwitcher from "../common/ThemeSwitcher"
import "./Header.css"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="header">
      <div className="left-nav">
        <div className="logo">
          <img src={Nav} alt="" />
        </div>
        <div className="search-box">
          <input type="text" />
          <span>
            {/* <i className="M  ri-search"></i> */}
            <img src={Search} alt="nav search" />
          </span>
        </div>
      </div>
      <div className="right-nav">
        <div className="auth-path">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              {" "}
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
        {/* <span className="light"><ThemeSwitcher /></span> */}
        <span className="notification">
          <i className="ri-notification-line"></i>
        </span>

        <span className="profile-menu">
          <img src={profile} alt="" />
        </span>
        <label htmlFor="drop">
          <i class="ri-arrow-drop-down-line"></i>
        </label>
      </div>
    </div>
  )
}

export default Header
