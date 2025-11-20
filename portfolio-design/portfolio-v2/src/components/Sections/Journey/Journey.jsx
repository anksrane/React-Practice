import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import './Journey.css';

const professional = [
    {
      date: "December 2022 - Present",
      title: "Frontend Developer",
      companyname: "SPAAN IT Solutions Pvt. Ltd.",
      description: ["Created responsive, cross-browser compatible web pages utilizing React.js, JavaScript and other web technologies.",
        "Transformed PSD and wireframes into pixel-perfect web pages.",
        "Created dynamic, single-page applications with React.js, Redux Toolkit, form validation and real-time dataprocessing",
        "Implemented RESTful APIs and integrated them with frontend applications using Axios",
        "Collaborated with backend developers to integrate RESTful APIs and ensure seamless data flow between frontend and backend systems",
        "Worked with version control systems like Git and GitHub to manage code repositories and collaborate with team members",
        "Participated in code reviews and provided constructive feedback to team members to improve code quality and maintainability",],
      icon: "fa fa-code",
      color: "#00bcd4",
    },
    {
      date: "June 2019 - December 2022",
      title: "Spatial Data Specialist",
      companyname: "Here Technologies Pvt. Ltd.",
      description: ["Analyzed and enhanced geospatial data for Highly Automated Driving (HAD) project.",
        "Developed and supported the internal dashboards and UI components using HTML/CSS and JavaScript.",
        "Worked with cross-functional teams to gather requirements and deliver high-quality solutions.",
        "Worked with teams to integrate GIS data into web platforms.",
        "Utilized GIS tools and software to analyze and visualize geospatial data.",
        "A variety of JavaScript libraries were used for visualizing the spatial data.",
        "Conducted data quality checks and validation to ensure accuracy and reliability of geospatial data.",
        ],
      icon: "fa fa-code",
      color: "#cd7866", 
    },
    {
      date: "January 2018 - July 2018",
      title: "Software Developer",
      companyname: "Techflux(a Division of Renam Technologies pvt. ltd.",
      description: ["Developed and maintained web applications using Bubble.io and cutomized with JavaScript, HTML, CSS, and PHP.",
        "Worked with cross-functional teams to gather requirements and deliver high-quality solutions.",

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
  return (
    <div className="timeline-section">
        <div className="timeline-inner-container">
          <h2 className="timeline-heading">My Journey</h2>

          <VerticalTimeline lineColor="rgba(255,255,255,0.2)">
            {/* Professional Timeline */}
            {professional.map((item, index) => (
              <VerticalTimelineElement
                key={`pro-${index}`}
                className="vertical-timeline-element--work"
                date={item.date}
                iconClassName="timeline-icon-work"
                icon={<FaBriefcase className="icon-journey" />}
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.companyname}</h4>
                {item.description.length > 0 && (
                  <ul className="vertical-timeline-list">
                    {item.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                )}
              </VerticalTimelineElement>
            ))}

            {/* Academics Timeline */}
            {academics.map((item, index) => (
              <VerticalTimelineElement
                key={`edu-${index}`}
                className="vertical-timeline-element--education"
                date={item.date}
                iconClassName="timeline-icon-edu"
                icon={<FaGraduationCap className="icon-journey"/>}
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.companyname}</h4>
                {item.description.length > 0 && (
                  <ul className="vertical-timeline-list">
                    {item.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
    </div>
  )
}

export default Journey