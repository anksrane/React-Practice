import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import projectsData from "./projectsData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);
  useEffect(() => {
    console.log(project);
  }, [slug, project]);

  if (!project) {
    return (
      <div style={{ color: "#000", textAlign: "center", marginTop: "100px" }}>
        Project not found.
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <div className="split-container">   
          {/* <div className="right-panel">
            <img src="https://placehold.co/1920x1080" alt="Project 1" />
          </div>   */}
          <div className="right-panel">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              // navigation={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false
              }}              
              modules={[Pagination, Autoplay, Navigation ]}
            >
              {project.images?.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt={`Project Slide ${i + 1}`} className="img-responsive"/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>                      
          <div className="left-panel">
            <div>
              <h1 className="proj-det-heading">{project.title}</h1>   
              <div className="proj-det-desc-container">{project.longDesc ? (
                project.longDesc.map((para,index)=>(
                  <p key={index} className="proj-det-desc">{para}</p>
                ))
              ):""}</div> 
              <h4 className="tech-title">Techonologies: </h4>
              <div className="skills-container-icons">
                  {project.skillsIcons.map((skill, i) => (
                    i < project.skillsIcons.length 
                      ? <img key={i} src={skill} alt="" className="img-responsive proj-det-icon" />:""
                  ))}
              </div> 
              <div className="btns-container">
                {/* {project.projLink?(<a href={project.projLink} className="proj-links" target="_blank"><FaLink /> Live Demo</a>):""}    */}
                {project.projLink ? (
                  project.projLink.map((link, index) => (
                    <a key={index} href={link} className="proj-links" target="_blank" rel="noopener noreferrer">
                      <FaLink /> Live Demo {project.projLink.length > 1 ? index + 1 : ""}
                    </a>
                  ))
                ) : ""}                              
                {project.gitHub?(<a href={project.gitHub} className="proj-links" target="_blank"><FaGithub /> Github Repo</a> ):""} 
              </div>                 
            </div>       
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
