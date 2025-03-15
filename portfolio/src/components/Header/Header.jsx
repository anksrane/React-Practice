import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import {gsap} from 'gsap';
import './Header.css';
import { Timeline } from 'gsap/gsap-core';

function Header() {
  const navColRef=useRef(null);
  const tl=useRef(null);

  // Animation with timeline
  useEffect(()=>{
    tl.current=gsap.timeline({paused:true})
    .to(navColRef.current,{
      x:0,
      opacity:1,
      duration:0.5,
      ease:"power3.out"
    });
  },[])

  // Open Menu
  const openMenu=()=>{
    console.log("clicked",Math.random());
    tl.current.play();
  }

  // Close Menu
  const closeMenu=()=>{
    console.log("clicked",Math.random());
    tl.current.reverse();
  }

  return (
    <header>
    <nav className="navbar">
      <div className="nav-container">
        <Link className="navbar-brand" to="/">
          @nkit
        </Link>
        <button className='hamButton'
        onClick={openMenu}
        ><i className="ri-menu-line"></i></button>
        <div className="nav-collapse" ref={navColRef}>
          <button className='closeButton'
          onClick={closeMenu}
          ><i className="ri-close-circle-fill"></i></button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/work">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Journey">
                Journey
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Header
