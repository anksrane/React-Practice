import React from 'react'
import './Journey.css'


const professional = [
    {
      date: "December 2020 - Present",
      title: "Frontend Developer",
      companyname: "SPAAN IT Solutions Pvt. Ltd.",
      description: ["Developing responsive and interactive WebPages",
        "Converting psd/wireframe to webpage",
        "Developing complex and user driven single page experience with validations and passing data to backend in ajax format"],
      icon: "fa fa-code",
      color: "bg-blue-800",
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
      color: "bg-yellow-500", 
    },
    {
      date: "January 2018 - July 2018",
      title: "Software Developer",
      companyname: "Techflux(a Division of Renam Technologies pvt. ltd.",
      description: ["Webapp Development on “Bubble.is” Platform. Customizing those using Web Technologies (HTML, CSS, JavaScript)",
        "Conducted talent review sessions and trained new employees to ensure team success"        
        ],
        icon: "fa fa-code",
      color: "bg-red-500",
    },
  ];

const academics=[
  {
    date: "June 2014 - May 2017",
    title: "Mumbai University",
    companyname: "Computer Engineering - 5.88 CGPI",
    description: [],
    icon: "fa fa-graduation-cap",
    color: "bg-blue-600"
  },
  {
    date: "June 2010 - May 2014",
    title: "Shreeram Polytechnic, Airoli",
    companyname: "Computer Technology - 62.26%",
    description: [],
    icon: "fa fa-graduation-cap",
    color: "bg-teal-500",
  },
  {
    date: "June 2001 - March 2010",
    title: "S.V. Joshi High School, Dombivli",
    companyname: "S. S. C. - 77.09%",
    description: [],
    icon: "fa fa-graduation-cap",
    color: "bg-blue-800",
  }
]

function Journey() {
  return (
    <>
    <div className="custom-container flex flex-col items-center py-10 px-5 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Professional Journey</h2>
      <div className="relative w-full max-w-5xl">
        <div className="absolute left-1/2 top-0 w-1 bg-gray-500 h-full transform -translate-x-1/2 hidden md:block"></div>
        {professional.map((item, index) => (
          <div key={index} className={`relative flex flex-col gap-1 md:gap-2 sm:flex-col items-center w-full mb-10`}>
            <div className="absolute left-1/2 w-4 h-4 bg-white border-4 border-gray-500 rounded-full transform -translate-x-1/2 hidden md:block"></div>
            <div className={`${index % 2 == 0 ? "md:me-auto" : "md:ms-auto"}`}>
              <div className={`relative ${item.color} text-white px-4 py-2 font-bold rounded-md mb-2 md:mb-3 w-fit`}>{item.date}</div>
              <div className="bg-white text-black p-5 rounded-lg shadow-md w-full md:max-w-md">
                <h3 className="font-bold text-xl">{item.title}</h3>
                <h4 className="font-bold text-lg">{item.companyname}</h4>
                <h5 className="font-bold text-lg">{item.title}</h5>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="custom-container flex flex-col items-center py-10 px-5 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Academics Journey</h2>
      <div className="relative w-full max-w-3xl">
        <div className="absolute left-1/2 top-0 w-1 bg-gray-500 h-full transform -translate-x-1/2 hidden md:block"></div>
        {academics.map((item, index) => (
          <div key={index} className={`relative flex flex-col gap-1 md:gap-2 sm:flex-col items-center w-full mb-10`}>
            <div className="absolute left-1/2 w-4 h-4 bg-white border-4 border-gray-500 rounded-full transform -translate-x-1/2 hidden md:block"></div>
            <div className={`${index % 2 == 0 ? "md:me-auto" : "md:ms-auto"} w-full md:w-fit`}>
              <div className={`relative ${item.color} text-white px-4 py-2 font-bold rounded-md mb-2 md:mb-3 w-fit`}>{item.date}</div>
              <div className="bg-white text-black p-5 rounded-lg shadow-md w-full md:max-w-md">
                <h3 className="font-bold text-xl">{item.title}</h3>
                <h3 className="font-bold text-lg">{item.companyname}</h3>
                {/* <h3 className="font-bold text-lg">{item.title}</h3> */}
                <p className="text-gray-600 mt-2">{item.title}</p>
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
