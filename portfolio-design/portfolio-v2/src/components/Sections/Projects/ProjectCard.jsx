import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Projects.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ProjectCard({ data, index }) {

  const cardRef = useRef(null);
  const overlayRef = useRef(null);
  const textRefs = useRef([]);  

  useGSAP(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;    

    // Hover timeline
    // const hoverAnim = gsap.to(card, {
    //   scale: 1.01,
    //   duration: 0.3,
    //   paused: true,
    //   ease: "power2.out",
    // });

    // const overlayAnim = gsap.to(overlay, {
    //   opacity: 1,
    //   y: 0,
    //   duration: 0.4,
    //   paused: true,
    //   ease: "power2.out",
    // });

    // const staggerTextAnim = gsap.from(
    //   textRefs.current,
    //   {
    //     opacity: 0,
    //     scale: 0.1,
    //     stagger: 0.08,
    //     paused: true,
    //     ease: "power2.out",
    //     duration: 0.3,
    //   }
    // );

    // const element = document.querySelector(card);

    // card.addEventListener("mouseenter", () => {
    //   hoverAnim.play();
    //   overlayAnim.play();
    //   staggerTextAnim.restart();
    // });

    // card.addEventListener("mouseleave", () => {
    //   hoverAnim.reverse();
    //   overlayAnim.reverse();
    // });

    const hoverTl = gsap.timeline({ paused: true });

    hoverTl
      .to(card, {
        scale: 1.01,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(
        overlay,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(
        textRefs.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.9,
          stagger: 0.3,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.2"
      ); 
      
      card.addEventListener("mouseenter", () => hoverTl.play());
      card.addEventListener("mouseleave", () => hoverTl.reverse());
  });
  
  return (
    <div className="projectCard-inner-section" ref={cardRef}>
      <div className="projectCard-all-content">
          <img src={data.image} alt={data.slug} className="img-responsive prod-img"/>    
        <div className="proj-data-container">
          <pre className="code-block">
            <span className="keyword">const</span> <span className="variable">project</span> <span className="operator">=</span> <span className="bracket">&#123;</span>
            {"\n"}  <span className="property">id</span>: <span className="number">{index+1}</span>,
            {"\n"}  <span className="property">title</span>: <span className="string">"{data.title}"</span>,
            {"\n"}  <span className="property">status</span>: <span className="string">"{data.status}"</span>
            {"\n"}<span className="bracket">&#125;</span>;
          </pre>         
        </div>
      </div>
      <div className="projectCard-hover-content" ref={overlayRef}>
        <div>
          <h3 className="project-hover-heading" ref={(el) => (textRefs.current[0] = el)}>
            {data.title}
          </h3>
          <p className="short-desc" ref={(el) => (textRefs.current[1] = el)}>{data.shortDesc}</p>
        </div>
        <NavLink
          to={data.link}
          className='more-link'
          ref={(el) => (textRefs.current[2] = el)}
        >More Details          
        </NavLink>         
      </div>
    </div>
  );
}

export default ProjectCard;
