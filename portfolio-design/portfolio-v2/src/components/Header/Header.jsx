import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/ui/themeSlice";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/AR-crop.png";
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Journey", path: "/journey" },
  ];
  return (
    <div className="header-container-outer">
      <div className="container">
        <div className="navbar-container">
          <NavLink to={"/"} className='logo-link'>
            <img
              src={logo}
              alt="home"
              className="img-responsive logo-img"
            ></img>
          </NavLink>

          <div className="nav-items">
            {navItems.map((item) => {
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>`nav-link ${isActive ? 'active' : ''}`
                  }
                >{item.name}             
                </NavLink>
              );
            })}            
          </div>

          <div className="mode-btns">
            <button
              className={theme === "dark" ? "btn-mode-change dark-md-btn" : "btn-mode-change light-md-btn"}
              onClick={() => dispatch(toggleTheme())}
            >{theme === "dark" ? <MdDarkMode className="icon dark-icon"/> : <IoSunny className="icon light-icon"/>}
            </button>   

            <button className="ham-btn">
              <HiOutlineMenu className="ham-icon" />
            </button>                    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
