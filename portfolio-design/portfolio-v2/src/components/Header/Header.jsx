import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import logo from "../../assets/images/AR-crop.png";
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseCircle } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/ui/themeSlice";
import { toggleMenu } from "../../features/ui/mobMenuSlice";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import "./Header.css";

function Header() {
  const [activeSection, setActiveSection] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();  
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);  
  const menuOpen = useSelector((state) => state.menuMobile.isMenuOpen);
  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Journey", id: "journey" },
  ];

  // animation using gsap
  useGSAP(()=>{
    const links = document.querySelectorAll(".nav-link");

    // screen width
    const isMobile=window.innerWidth<=769;

    // Mobile Animation
    if(isMobile && links.length){
      setTimeout(()=>{
        gsap.fromTo(
          links,
          {opacity:0, y:20},
          {
            opacity:1,
            y:0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",          
          }
        );
        return;
      },50);        
    }

    // Desktop Animation
    if(!isMobile && !menuOpen && links.length){
      setTimeout(()=>{
        gsap.fromTo(
          links,
          {opacity:0, y:20},
          {
            opacity:1,
            y:0,
            duration: 0.8,
            stagger: 0.07,
            ease: "power2.out",          
          }
        );
        return; 
      },50);
    }

  },{dependencies:[menuOpen]})

  // handle navigation and scroll
  const handleNavigation = (id) => {
    if (location.pathname === "/") {
      window.location.hash = id;
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate(`/#${id}`);
      setIsHidden(false);
    }

    if (menuOpen) dispatch(toggleMenu());
  };

  useEffect(()=>{
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      // Don't hide if mobile menu is open
      if (menuOpen) return;

      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll) {
        // scrolling down
        setIsHidden(true);
      } else {
        // scrolling up
        setIsHidden(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);    
  })
  
  return (
    <div className={`header-container-outer ${isHidden ? "off-canvas" : "fixed"}`}>
      <div className="container">
        <div className="navbar-container">
          <NavLink to={"/"} className='logo-link'>
            <img
              src={logo}
              alt="home"
              className="img-responsive logo-img"
            ></img>
          </NavLink>

          <div className={`nav-items ${menuOpen? "open" : ""}`}>
            <div className="mobile-head">
              <NavLink to={"/"} className='logo-link logo-link-mobile'>
                <img
                  src={logo}
                  alt="home"
                  className="img-responsive logo-img"
                ></img>
              </NavLink>  
              
              <button className="close-mob-menu-btn" onClick={() => dispatch(toggleMenu())}>
                <IoCloseCircle className="close-mob-menu-icon" />
              </button>                             
            </div>
            {navItems.map((item) => {
              return (
                <button
                  key={item.name}
                  className={`nav-link ${location.hash === "#" + item.id ? "active" : ""}`}
                  onClick={() => handleNavigation(item.id)}
                >
                  {item.name}
                </button>                
              );
            })}            
          </div>

          <div className="mode-btns">
            <button
              className={theme === "dark" ? "btn-mode-change dark-md-btn" : "btn-mode-change light-md-btn"}
              onClick={() => dispatch(toggleTheme())}
            >{theme === "dark" ? <MdDarkMode className="icon dark-icon"/> : <IoSunny className="icon light-icon"/>}
            </button>   

            <button className="ham-btn" onClick={() => dispatch(toggleMenu())}>
              <CgMenuRightAlt className="ham-icon" />
            </button>                    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
