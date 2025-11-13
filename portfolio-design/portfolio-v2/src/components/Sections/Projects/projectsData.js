import taskImage from "../../../assets/images/projects-main/tasklytics.jpg";
import gmmcoImage from "../../../assets/images/projects-main/gmmco.jpg";
import g20Image from "../../../assets/images/projects-main/g20.jpg";
import vijayImage from "../../../assets/images/projects-main/vijay-tanks.jpg";
import birlaImage from "../../../assets/images/projects-main/birla.jpg";
import stockholdingImage from "../../../assets/images/projects-main/stockholding.jpg";
import zuarifarmhubImage from "../../../assets/images/projects-main/zuarifarmhub.jpg";
import hansaImage from "../../../assets/images/projects-main/hansa-gcr.jpg";

// taskScreenshots
import taskImage1 from "../../../assets/images/projects-main/screenshot/tasklytics1.jpg";
import taskImage2 from "../../../assets/images/projects-main/screenshot/tasklytics2.jpg";
import taskImage3 from "../../../assets/images/projects-main/screenshot/tasklytics3.jpg";
import taskImage4 from "../../../assets/images/projects-main/screenshot/tasklytics3.jpg";

// Gmmco Screenshots
import gmmcoImage1 from "../../../assets/images/projects-main/screenshot/gmmcoImage1.jpg";
import gmmcoImage2 from "../../../assets/images/projects-main/screenshot/gmmcoImage2.jpg";
import gmmcoImage3 from "../../../assets/images/projects-main/screenshot/gmmcoImage3.jpg";
import gmmcoImage4 from "../../../assets/images/projects-main/screenshot/gmmcoImage4.jpg";

// G20 Screenshot
import g20Img1 from '../../../assets/images/projects-main/screenshot/g20Img1.jpg';
import g20Img2 from '../../../assets/images/projects-main/screenshot/g20Img2.jpg';
import g20Img3 from '../../../assets/images/projects-main/screenshot/g20Img3.jpg';
import g20Img4 from '../../../assets/images/projects-main/screenshot/g20Img4.jpg';

// 

import { icons } from '../../../assets/images/icons';

const projectsData = [
  {
    id: 1,
    title: "Tasklytics",
    slug: "tasklytics",
    image: taskImage,
    link: "/projects/tasklytics",
    shortDesc: "Tasklytics is a powerful task management and productivity tracker that helps teams and individuals organize, analyze, and optimize their workflow through smart insights and clean design",
    longDesc:"Tasklytics is an advanced productivity and task analytics platform built to streamline workflow management. It combines intuitive task tracking, performance visualization, and intelligent analytics to help users make data-driven decisions about their daily productivity. With features like progress dashboards, deadline tracking, and team performance insights, Tasklytics empowers users to stay organized, focused, and efficient. Designed with a responsive, modern UI and powered by smooth interactions, it delivers both functionality and an exceptional user experience.",
    projLink:"https://tasklytics-six.vercel.app/login",
    gitHub:"https://github.com/anksrane/tasklytics",
    skills:["React.js", "Redux Toolkit", "Firebase (Auth & Firestore)", "Tailwind CSS", "Vite", "HTML", "CSS", "JavaScript"],
    skillsIcons:[icons.reactIcon, icons.reduxIcon, icons.firebaseIcon, icons.tailwindIcons, icons.viteIcon, icons.htmlIcons, icons.cssIcons, icons.jsIcon],
    images: [
      taskImage1,
      taskImage2,
      taskImage3,
      taskImage4,
    ],
    status:"Ongoing"
  },
  // {
  //    id: 2,
  //    title: "Gmmco",
  //    slug: "gmmco",
  //    image: gmmcoImage,
  //    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     longDesc:"Tasklytics is an advanced productivity and task analytics platform built to streamline workflow management. It combines intuitive task tracking, performance visualization, and intelligent analytics to help users make data-driven decisions about their daily productivity. With features like progress dashboards, deadline tracking, and team performance insights, Tasklytics empowers users to stay organized, focused, and efficient. Designed with a responsive, modern UI and powered by smooth interactions, it delivers both functionality and an exceptional user experience.",
  //    link: "/projects/gmmco",
  //    projLink:"",
  //    gitHub:"",
  //    skills:["React.js", "Redux Toolkit", "Tailwind CSS", "Vite", "HTML", "CSS", "JavaScript"],
  //   skillsIcons:[icons.reactIcon, icons.reduxIcon, icons.tailwindIcons, icons.viteIcon, icons.htmlIcons, icons.cssIcons, icons.jsIcon],
  //   images: [
  //     gmmcoImage1,
  //     gmmcoImage2,
  //     gmmcoImage3,
  //     gmmcoImage4,
  //   ],     
  //    status:"Completed"
  // },
  {
    id: 3,
    title: "G20",
    slug: "g20",
    image: g20Image,
    link: "/projects/g20",
    shortDesc: "Tasklytics is a powerful task management and productivity tracker that helps teams and individuals organize, analyze, and optimize their workflow through smart insights and clean design",  
    longDesc:"Tasklytics is an advanced productivity and task analytics platform built to streamline workflow management. It combines intuitive task tracking, performance visualization, and intelligent analytics to help users make data-driven decisions about their daily productivity. With features like progress dashboards, deadline tracking, and team performance insights, Tasklytics empowers users to stay organized, focused, and efficient. Designed with a responsive, modern UI and powered by smooth interactions, it delivers both functionality and an exceptional user experience.",    
    projLink:"https://www.motherofdemocracyg20.com/",
    gitHub:"",
    skills: ["Bootstrap", "XML", "JavaScript", "HTML5", "CSS3"],
    skillsIcons:[icons.bootstrapIcons, icons.xmlIcon, icons.jsIcon, icons.htmlIcons, icons.cssIcons],
    images: [
      g20Img1,
      g20Img2,
      g20Img3,
      g20Img4,
    ],    
    status:"Completed"
  },
  {
    id: 4,
    title: "Vijay Tanks",
    slug: "vijay-tanks",
    image: vijayImage,
    link: "/projects/vijay-tanks",
    shortDesc: "Tasklytics is a powerful task management and productivity tracker that helps teams and individuals organize, analyze, and optimize their workflow through smart insights and clean design",  
    longDesc:"Tasklytics is an advanced productivity and task analytics platform built to streamline workflow management. It combines intuitive task tracking, performance visualization, and intelligent analytics to help users make data-driven decisions about their daily productivity. With features like progress dashboards, deadline tracking, and team performance insights, Tasklytics empowers users to stay organized, focused, and efficient. Designed with a responsive, modern UI and powered by smooth interactions, it delivers both functionality and an exceptional user experience.",   
    projLink:"https://vijaytanks.com/",
    gitHub:"",
    skills:["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    skillsIcons:[icons.bootstrapIcons, icons.xmlIcon, icons.jsIcon, icons.htmlIcons, icons.cssIcons],
    images: [
      g20Img1,
      g20Img2,
      g20Img3,
      g20Img4,
    ],     
    status:"Completed"
  },
  {
    id: 5,
    title: "Hansa GCR",
    slug: "hansa-gcr",
    image: hansaImage,
    link: "/projects/hansa-gcr",
    shortDesc: "Tasklytics is a powerful task management and productivity tracker that helps teams and individuals organize, analyze, and optimize their workflow through smart insights and clean design",  
    longDesc:"Tasklytics is an advanced productivity and task analytics platform built to streamline workflow management. It combines intuitive task tracking, performance visualization, and intelligent analytics to help users make data-driven decisions about their daily productivity. With features like progress dashboards, deadline tracking, and team performance insights, Tasklytics empowers users to stay organized, focused, and efficient. Designed with a responsive, modern UI and powered by smooth interactions, it delivers both functionality and an exceptional user experience.",       
    projLink:"https://hansagcr.com/",
    gitHub:"",
    skills: ["HTML5", "CSS3", "JavaScript", "XML", "Bootstrap", "GSAP"],
    skillsIcons:[icons.bootstrapIcons, icons.xmlIcon, icons.jsIcon, icons.htmlIcons, icons.cssIcons],
    images: [
      g20Img1,
      g20Img2,
      g20Img3,
      g20Img4,
    ],      
    status:"Completed"
  },
  // {
  //   id: 6,
  //   title: "Birla",
  //   slug: "birla",
  //   image: birlaImage,
  //   link: "/projects/birla",
  //   shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",   
  //   projLink:"",
  //   gitHub:"",
  //   skills:["HTML5", "CSS3", "Bootstrap", "JavaScript"],
  //   status:"Completed"
  // },
  {
    id: 7,
    title: "Stockholding",
    slug: "stockholding",
    image: stockholdingImage,
    link: "/projects/stockholding",
    shortDesc: "Tasklytics is a powerful task management and productivity tracker that helps teams and individuals organize, analyze, and optimize their workflow through smart insights and clean design",  
    longDesc:"Tasklytics is an advanced productivity and task analytics platform built to streamline workflow management. It combines intuitive task tracking, performance visualization, and intelligent analytics to help users make data-driven decisions about their daily productivity. With features like progress dashboards, deadline tracking, and team performance insights, Tasklytics empowers users to stay organized, focused, and efficient. Designed with a responsive, modern UI and powered by smooth interactions, it delivers both functionality and an exceptional user experience.",      
    projLink:"https://www.stockholding.com/",
    gitHub:"",
    skills:["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    skillsIcons:[icons.bootstrapIcons, icons.xmlIcon, icons.jsIcon, icons.htmlIcons, icons.cssIcons],
    images: [
      g20Img1,
      g20Img2,
      g20Img3,
      g20Img4,
    ],     
    status:"Completed"
  },
  {
    id: 8,
    title: "Zuari Farm Hub",
    slug: "zuarifarmhub",
    image: zuarifarmhubImage,
    link: "/projects/zuarifarmhub",
    shortDesc: "Tasklytics is a powerful task management and productivity tracker that helps teams and individuals organize, analyze, and optimize their workflow through smart insights and clean design",  
    longDesc:"Tasklytics is an advanced productivity and task analytics platform built to streamline workflow management. It combines intuitive task tracking, performance visualization, and intelligent analytics to help users make data-driven decisions about their daily productivity. With features like progress dashboards, deadline tracking, and team performance insights, Tasklytics empowers users to stay organized, focused, and efficient. Designed with a responsive, modern UI and powered by smooth interactions, it delivers both functionality and an exceptional user experience.",      
    projLink:"https://zuarifarmhub.com/",
    gitHub:"",
    skills:["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    skillsIcons:[icons.bootstrapIcons, icons.xmlIcon, icons.jsIcon, icons.htmlIcons, icons.cssIcons],
    images: [
      g20Img1,
      g20Img2,
      g20Img3,
      g20Img4,
    ],     
    status:"Completed"
  },
];

export default projectsData;