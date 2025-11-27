import React, { useState, useEffect } from "react";
import {Header} from '../../components';
import {Hero} from '../../components';
import {Journey} from '../../components';
import {Projects} from '../../components';
import {About} from '../../components';
import {Loader as Loading} from '../../components';

function Homepage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

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

  if (loading) {
    return (
      <section className="loader-wrapper">
        <Loading />
      </section>
    );
  }

  return (
    <>
        <div><Header /></div>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects/></section>
        <section id="journey"><Journey /></section>
    </>
  )
}

export default Homepage
