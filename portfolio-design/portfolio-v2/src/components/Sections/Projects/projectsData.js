import taskImage from "../../../assets/images/projects-main/tasklytics.jpg";
import gmmcoImage from "../../../assets/images/projects-main/gmmco.jpg";
import g20Image from "../../../assets/images/projects-main/g20.jpg";
import vijayImage from "../../../assets/images/projects-main/vijay-tanks.jpg";
import birlaImage from "../../../assets/images/projects-main/birla.jpg";
import stockholdingImage from "../../../assets/images/projects-main/stockholding.jpg";
import zuarifarmhubImage from "../../../assets/images/projects-main/zuarifarmhub.jpg";
import hansaImage from "../../../assets/images/projects-main/hansa-gcr.jpg";
import Skills from "../Skills";

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
    status:"Ongoing"
  },
  // {
  //    id: 2,
  //    title: "Gmmco",
  //    slug: "gmmco",
  //    image: gmmcoImage,
  //    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //    link: "/projects/02",
  //    projLink:"",
  //    gitHub:"",
  //    skills:["React.js", "Redux Toolkit", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  //    status:"Completed"
  // },
  {
    id: 3,
    title: "G20",
    slug: "g20",
    image: g20Image,
    link: "/projects/g20",
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",    
    projLink:"",
    gitHub:"",
    skills: ["HTML5", "CSS3", "JavaScript", "XML", "Bootstrap"],
    status:"Completed"
  },
  {
    id: 4,
    title: "Vijay Tanks",
    slug: "vijay-tanks",
    image: vijayImage,
    link: "/projects/vijay-tanks",
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",    
    projLink:"",
    gitHub:"",
    skills:["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    status:"Completed"
  },
  {
    id: 5,
    title: "Hansa GCR",
    slug: "hansa-gcr",
    image: hansaImage,
    link: "/projects/hansa-gcr",
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",    
    projLink:"",
    gitHub:"",
    skills: ["HTML5", "CSS3", "JavaScript", "XML", "Bootstrap", "GSAP"],
    status:"Completed"
  },
  {
    id: 6,
    title: "Birla",
    slug: "birla",
    image: birlaImage,
    link: "/projects/birla",
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",   
    projLink:"",
    gitHub:"",
    skills:["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    status:"Completed"
  },
  {
    id: 7,
    title: "Stockholding",
    slug: "stockholding",
    image: stockholdingImage,
    link: "/projects/stockholding",
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",   
    projLink:"",
    gitHub:"",
    skills:["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    status:"Completed"
  },
  {
    id: 8,
    title: "Zuari Farm Hub",
    slug: "zuarifarmhub",
    image: zuarifarmhubImage,
    link: "/projects/zuarifarmhub",
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",    
    projLink:"",
    gitHub:"",
    skills:["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    status:"Completed"
  },
];

export default projectsData;