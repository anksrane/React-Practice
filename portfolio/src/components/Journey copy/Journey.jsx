import React from 'react'
import './Journey.css'
import Timeline from './Timeline';



const events = [
    {
      date: "December 2020 - Present",
      title: "Frontend Developer",
      companyname: "SPAAN IT Solutions Pvt. Ltd.",
      description: ["Developing responsive and interactive WebPages",
        "Converting psd/wireframe to webpage",
        "Developing complex and user driven single page experience with validations and passing data to backend in ajax format"],
      icon: "fa fa-code",
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
    },
    {
      date: "January 2018 - July 2018",
      title: "Software Developer",
      companyname: "Techflux(a Division of Renam Technologies pvt. ltd.",
      description: ["Webapp Development on “Bubble.is” Platform. Customizing those using Web Technologies (HTML, CSS, JavaScript)",
        "Conducted talent review sessions and trained new employees to ensure team success"        
        ],
        icon: "fa fa-code",
    },
    {
      date: "June 2014 - May 2017",
      title: "Mumbai University",
      companyname: "Computer Engineering - 5.88 CGPI",
      description: [],
      icon: "fa fa-graduation-cap",
    },
    {
      date: "June 2010 - May 2014",
      title: "Shreeram Polytechnic, Airoli",
      companyname: "Computer Technology - 62.26%",
      description: [],
      icon: "fa fa-graduation-cap",
    },
    {
      date: "June 2001 - March 2010",
      title: "S.V. Joshi High School, Dombivli",
      companyname: "S. S. C. - 77.09%",
      description: [],
      icon: "fa fa-graduation-cap",
    },
  ];

function Journey() {
  return (
    <div>
      <Timeline title="Work and Education Timeline" events={events} />
    </div>
  )
}

export default Journey
