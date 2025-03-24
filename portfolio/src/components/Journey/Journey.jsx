import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './Journey.css'

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

const professional = [
    {
      date: "December 2020 - Present",
      title: "Frontend Developer",
      companyname: "SPAAN IT Solutions Pvt. Ltd.",
      description: ["Developing responsive and interactive WebPages",
        "Converting psd/wireframe to webpage",
        "Developing complex and user driven single page experience with validations and passing data to backend in ajax format"],
      icon: "fa fa-code",
      color: "#00bcd4",
    },
    {
      date: "June 2019 - December 2022",
      title: "Spatial Data Specialist",
      companyname: "Here Technologies Pvt. Ltd.",
      description: ["Responsible for analysing and editing Geo-Spatial Data points in Highly Automated Driving (HAD) project",
        "Developed highly responsive user interfaces ensuring best experience on various screen sizes",
        "Maintained Validations using Java based Code"
        ],
      icon: "fa fa-code",
      color: "#cd7866", 
    },
    {
      date: "January 2018 - July 2018",
      title: "Software Developer",
      companyname: "Techflux(a Division of Renam Technologies pvt. ltd.",
      description: ["Webapp Development on “Bubble.is” Platform. Customizing those using Web Technologies (HTML, CSS, JavaScript)",
        "Conducted talent review sessions and trained new employees to ensure team success"        
        ],
        icon: "fa fa-code",
      color: "#00bcd4",
    },
  ];

const academics=[
  {
    date: "June 2014 - May 2017",
    title: "Mumbai University",
    companyname: "Computer Engineering - 5.88 CGPI",
    description: [],
    icon: "fa fa-graduation-cap",
    color: "#cd7866"
  },
  {
    date: "June 2010 - May 2014",
    title: "Shreeram Polytechnic, Airoli",
    companyname: "Computer Technology - 62.26%",
    description: [],
    icon: "fa fa-graduation-cap",
    color: "#00bcd4",
  },
  {
    date: "June 2001 - March 2010",
    title: "S.V. Joshi High School, Dombivli",
    companyname: "S. S. C. - 77.09%",
    description: [],
    icon: "fa fa-graduation-cap",
    color: "#cd7866",
  }
]

function Journey() {
  const containerRefs = useRef([]);
  containerRefs.current = [];

  useEffect(() => {
    // console.log("GSAP Version:", gsap.version);
    // console.log("Is ScrollTrigger Registered?", gsap.core.globals().ScrollTrigger ? "Yes" : "No");
  
    // ✅ Page Load Animation
    gsap.timeline()
      .from(".sub-heading", { opacity: 0, y: -20, duration: 0.8, ease: "power2.out" }) // Title animation
      .from(".line", { scaleX: 0, transformOrigin: "center", duration: 1, ease: "power2.out" }, "-=0.6"); // Line scaling
  
    let ctx = gsap.context(() => {
      containerRefs.current.forEach((el, index) => {
        if (!el) return; // ✅ Prevents errors if ref is not attached
  
        const rightMargin = el.querySelector(".right-margin");
        const leftMargin = el.querySelector(".left-margin");

        let startValue = window.innerWidth < 768 ? "top 90%" : "top 85%"; 
        let endValue = window.innerWidth < 768 ? "top 70%" : "top 50%"; 
        let animationDuration = window.innerWidth < 768 ? 0.8 : 1;        
  
        // ✅ Scroll Animation - Main Container
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: animationDuration,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: startValue,
              end: endValue,
              toggleActions: "play none none reverse",
              scroller: "body", 
              //markers: true, 
            },
          }
        );
  
        // ✅ Right Margin Animation
        if (rightMargin) {
          gsap.fromTo(
            rightMargin,
            { x: window.innerWidth < 768 ? 0 : -100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: animationDuration,
              ease: "power2.out",
              delay: 0.2,
              scrollTrigger: {
                trigger: el,
                start: startValue,
                end: endValue,
                toggleActions: "play none none reverse",
                scroller: "body", 
                //markers: true, 
              },
            }
          );
        }
  
        // ✅ Left Margin Animation
        if (leftMargin) {
          gsap.fromTo(
            leftMargin,
            { x: window.innerWidth < 768 ? 0 : 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: animationDuration,
              ease: "power2.out",
              delay: 0.2,
              scrollTrigger: {
                trigger: el,
                start: startValue,
                end: endValue,
                toggleActions: "play none none reverse",
                scroller: "body", 
                //markers: true, 
              },
            }
          );
        }
      });
  
      ScrollTrigger.refresh(); // ✅ Ensure ScrollTrigger updates
    }, containerRefs); // ✅ Attach animations to refs
  
    return () => ctx.revert(); // ✅ Cleanup GSAP animations properly
  }, []);
  
  return (
    <>
    <div className="custom-container journey-container">
      <div className="page-info-journey">
          <h2 className="sub-heading">Professional Journey</h2>
          <div className="line"></div>
      </div>      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {professional.map((item, index) => (
          <div key={index} 
          ref={(el) => (containerRefs.current[index] = el)}
          className={`timeline-main-container`}>
            <div className="dot"></div>
            <div className={`${index % 2 == 0 ? "right-margin" : "left-margin"}`}>
              <div className="year-label" style={{ backgroundColor: item.color }}>{item.date}</div>
              <div className="journey-info-container">
                <h3 className="info-title">{item.title}</h3>
                <h4 className="info-subtitle">{item.companyname}</h4>
                <h5 className="info-subtitle">{item.title}</h5>
                <p className="info-para">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="custom-container journey-container">
      <div className="page-info-journey">
          <h2 className="sub-heading">Academics Journey</h2>
          <div className="line"></div>
      </div>        
      <div className="timeline-container edu-container">
        <div className="timeline-line"></div>
        {academics.map((item, index) => (
          <div key={index + professional.length}
          ref={(el) => (containerRefs.current[index + professional.length] = el)}
          className={`timeline-main-container`}>
            <div className="dot"></div>
            <div className={`${index % 2 == 0 ? "right-margin" : "left-margin"}`}>
              <div className="year-label" style={{ backgroundColor: item.color }}>{item.date}</div>
              <div className="journey-info-container">
                <h3 className="info-title">{item.title}</h3>
                <h3 className="info-subtitle">{item.companyname}</h3>
                {/* <h3 className="info-subtitle">{item.title}</h3> */}
                <p className="info-para">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Journey
