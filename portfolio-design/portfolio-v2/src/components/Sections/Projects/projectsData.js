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
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/projects/tasklytics",
    skills:["React.js", "Redux Toolkit", "Firebase (Auth & Firestore)", "Tailwind CSS", "Vite", "HTML", "CSS", "JavaScript"],
    status:"Ongoing"
  },
  // {
  //   id: 2,
  //   title: "Gmmco",
  //   slug: "gmmco",
  //   image: gmmcoImage,
  //   shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   link: "/projects/02",
  //    skills:["React.js", "Redux Toolkit", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  //   status:"Completed"
  // },
  {
    id: 3,
    title: "G20",
    slug: "g20",
    image: g20Image,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/projects/g20",
    skills: ["HTML5", "CSS3", "JavaScript", "XML", "Bootstrap"],
    status:"Completed"
  },
  {
    id: 4,
    title: "Vijay Tanks",
    slug: "vijay-tanks",
    image: vijayImage,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/projects/vijay-tanks",
    skills:["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    status:"Completed"
  },
  {
    id: 5,
    title: "Hansa GCR",
    slug: "hansa-gcr",
    image: hansaImage,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/projects/hansa-gcr",
    skills: ["HTML5", "CSS3", "JavaScript", "XML", "Bootstrap", "GSAP"],
    status:"Completed"
  },
  {
    id: 6,
    title: "Birla",
    slug: "birla",
    image: birlaImage,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/projects/birla",
    skills:["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    status:"Completed"
  },
  {
    id: 7,
    title: "Stockholding",
    slug: "stockholding",
    image: stockholdingImage,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/projects/stockholding",
    skills:["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    status:"Completed"
  },
  {
    id: 8,
    title: "Zuari Farm Hub",
    slug: "zuarifarmhub",
    image: zuarifarmhubImage,
    shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/projects/zuarifarmhub",
    skills:["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    status:"Completed"
  },
];

export default projectsData;