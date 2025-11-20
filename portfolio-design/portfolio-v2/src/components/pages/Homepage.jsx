import React, { useEffect } from 'react'
import {Header} from '../../components';
import {Hero} from '../../components';
import {Skills} from '../../components';
import {Journey} from '../../components';
import {Projects} from '../../components';

function Homepage() {
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 150);
    }
  }, [location]);  
  return (
    <>
        <div><Header /></div>
        <section id="hero"><Hero /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects/></section>
        <section id="journey"><Journey /></section>
    </>
  )
}

export default Homepage
