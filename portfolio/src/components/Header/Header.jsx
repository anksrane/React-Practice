import React, {useEffect, useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {gsap} from 'gsap';
import './Header.css';

function Header() {
  const navColRef=useRef(null);
  const tl=useRef(null);
  const [menuOpen,setMenuOpen]=useState(false);
  const navigate=useNavigate();

  // Animation with timeline
  useEffect(()=>{
    const navLinks = navColRef.current.querySelectorAll('.nav-link');
    
    gsap.set(navLinks, { y: 100, opacity: 0 });

    tl.current = gsap.timeline({ paused: true })
    .to(navColRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out"
    })
    .to(navLinks, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
      ease: "power3.out",
    });    
  },[])

  // Open Menu
  const openMenu=()=>{
    tl.current.play();
    setMenuOpen(true);
  }

  // Close Menu
  const closeMenu=()=>{
    tl.current.reverse();
    const totalDuration = tl.current.duration() * 1000;
    setTimeout(() => {
      setMenuOpen(false);
    }, totalDuration);
  }


  const handleNavClick = (path) => {
    tl.current.reverse();
    setMenuOpen(false);
    const totalDuration = tl.current.duration() * 1000;
  
    setTimeout(() => {
      navigate(path);
    }, totalDuration);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link className="navbar-brand" to="/">
          @nkit
        </Link>

        <button className={`hamButton ${menuOpen ? 'hidden' : ''}`}
        onClick={openMenu}
        ><i className="ri-menu-line"></i></button>

        <div className="nav-collapse" ref={navColRef}>
          <button className='closeButton'
          onClick={closeMenu}
          ><i className="ri-close-circle-fill"></i></button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" onClick={()=>handleNavClick('/')}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={()=>handleNavClick('/about')}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={()=>handleNavClick('/skills')}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={()=>handleNavClick('/work')}>
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={()=>handleNavClick('/Journey')}>
                Journey
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
