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

// Vijay Screenshot
import vijayImage1 from '../../../assets/images/projects-main/screenshot/vijayImage1.jpg';
import vijayImage2 from '../../../assets/images/projects-main/screenshot/vijayImage2.jpg';

// hansa gcr Screentshot
import hansaImage1 from '../../../assets/images/projects-main/screenshot/hansaImage1.jpg';
import hansaImage2 from '../../../assets/images/projects-main/screenshot/hansaImage2.jpg';
import hansaImage3 from '../../../assets/images/projects-main/screenshot/hansaImage3.jpg';

// stockholding screenshot
import stockImage1 from '../../../assets/images/projects-main/screenshot/stockImage1.jpg';
import stockImage2 from '../../../assets/images/projects-main/screenshot/stockImage2.jpg';
import stockImage3 from '../../../assets/images/projects-main/screenshot/stockImage3.jpg';
import stockImage4 from '../../../assets/images/projects-main/screenshot/stockImage4.jpg';

// zuari screenshot
import zuariImage1 from '../../../assets/images/projects-main/screenshot/zuariImage1.jpg';
import zuariImage2 from '../../../assets/images/projects-main/screenshot/zuariImage2.jpg';

import {
   icons
} from '../../../assets/images/icons';

const projectsData = [
    {
        id: 1,
        title: "Tasklytics",
        slug: "tasklytics",
        image: taskImage,
        link: "/projects/tasklytics",
        shortDesc: "A role-based task management dashboard with real-time Firebase integration, featuring analytics-driven dashboards, secure authentication, and complete task lifecycle management.",
        longDesc: ["Tasklytics is a role-based task management platform designed to streamline workflows for Admins, Managers, and Coders. The application includes secure Firebase authentication and real-time Firestore data syncing, ensuring instant updates across all dashboards and roles.","The system offers an analytics-rich dashboard powered by Google Charts, displaying insights such as task status distribution, phases, priority levels, and upcoming deadlines. This enables teams to monitor productivity and identify bottlenecks at a glance.","Users can create, assign, update, soft-delete, and restore tasks based on their role permissions. Admins and Managers can manage the entire lifecycle, while Coders receive focused task views tailored to their responsibilities. Tailwind CSS provides a clean, responsive UI, while React, Redux Toolkit, and Vite deliver a smooth, high-performance experience.", "Demo credentials are included in the GitHub README for quick access and testing."],
        projLink: ["https://tasklytics-six.vercel.app/login"],
        gitHub: "https://github.com/anksrane/tasklytics",
        skills: ["React.js", "Redux Toolkit", "Firebase (Auth & Firestore)", "Tailwind CSS", "Vite", "HTML", "CSS", "JavaScript"],
        skillsIcons: [icons.reactIcon, icons.reduxIcon, icons.firebaseIcon, icons.tailwindIcons, icons.viteIcon, icons.htmlIcons, icons.cssIcons, icons.jsIcon],
        images: [
            taskImage1,
            taskImage2,
            taskImage3,
            taskImage4,
        ],
        status: "Ongoing"
    },
    // {
    //     id: 2,
    //     title: "Gmmco",
    //     slug: "gmmco",
    //     image: gmmcoImage,
    //     shortDesc: "A modular React-based frontend built for Gmmco, featuring reusable components, smooth navigation with React Router, and basic Redux-driven state management, styled with Tailwind CSS.",
    //     longDesc: ["Gmmco Inc. is a leading industrial solutions provider, and this project involved building a clean, scalable, and high-performance frontend for their corporate website. The entire interface was developed using React with a modular architecture to ensure flexibility, easy maintenance, and component reusability across the platform.",
    //     "To enhance the user experience, React Router was implemented for smooth, multi-page navigation, while basic Redux was integrated to handle essential state management across key UI sections. Tailwind CSS was used to create a modern and responsive design system, supported by HTML, CSS, and JavaScript for additional structure and behavior.",
    //     "The result is a fast, organized, and visually consistent frontend that aligns with Gmmco’s brand identity and improves overall user interaction."],
    //     link: "/projects/gmmco",
    //     projLink: ["https://www.gmmco.in/"],
    //     gitHub: "",
    //     skills: ["React.js", "Redux Toolkit", "Tailwind CSS", "Vite", "HTML", "CSS", "JavaScript"],
    //     skillsIcons: [icons.reactIcon, icons.reduxIcon, icons.tailwindIcons, icons.viteIcon, icons.htmlIcons, icons.cssIcons, icons.jsIcon],
    //     images: [
    //       gmmcoImage1,
    //       gmmcoImage2,
    //       gmmcoImage3,
    //       gmmcoImage4,
    //     ],
    //     status: "Completed"
    // },
    {
        id: 3,
        title: "G20",
        slug: "g20",
        image: g20Image,
        link: "/projects/g20",
        shortDesc: "A multilingual, fully responsive frontend for the G20 “Mother of Democracy” website, built with dynamic XML content handling and seamless regional language support.",
        longDesc: ["The G20 “Mother of Democracy” project required a robust, accessible, and culturally inclusive frontend. I developed the entire interface with a strong focus on multilingual support, ensuring that users from different linguistic backgrounds could access content effortlessly. The design is fully responsive and cross-browser compatible, providing a consistent experience across all devices and platforms.","One of the key features of this project was dynamic XML content integration. I implemented logic to fetch, parse, and validate XML data, enabling smooth content updates and accurate rendering of regional languages. This ensured that every script—from English to Indian regional languages—displayed correctly and reliably.","Built using HTML5, CSS3, JavaScript, XML, and Bootstrap, the website maintains a clean structure, fast performance, and strong compliance with modern web standards. The result is a polished, accessible, and culturally rich digital experience aligned with the G20 initiative."],
        projLink: ["https://www.motherofdemocracyg20.com/"],
        gitHub: "",
        skills: ["Bootstrap", "XML", "JavaScript", "HTML5", "CSS3"],
        skillsIcons: [icons.bootstrapIcons, icons.xmlIcon, icons.jsIcon, icons.htmlIcons, icons.cssIcons],
        images: [
          g20Img1,
          g20Img2,
          g20Img3,
          g20Img4,
        ],
        status: "Completed"
    },
    {
        id: 4,
        title: "Vijay Tanks",
        slug: "vijay-tanks",
        image: vijayImage,
        link: "/projects/vijay-tanks",
        shortDesc: "A mobile-first, responsive website built from design mockups, featuring clean layouts and interactive content sections using HTML, CSS, JavaScript, Bootstrap, and jQuery.",
        longDesc: ["Vijay Tanks is an industrial engineering company, and this project focused on converting detailed UI/UX design mockups into a fully responsive, production-ready website. I developed mobile-first layouts to ensure an optimal experience across all devices, from smartphones to large desktop screens.", "The site includes multiple content-driven sections, each crafted with clean structure, consistent spacing, and smooth interactions. Using Bootstrap, I implemented a flexible grid system and reusable components, while jQuery and vanilla JavaScript handled UI behavior and interactivity.", "Built with HTML5, CSS3, Bootstrap, JavaScript, and jQuery, the final result is a visually consistent and performance-optimized website that closely matches the original design specifications."],
        projLink: ["https://vijaytanks.com/"],
        gitHub: "",
        skills: ["Bootstrap", "jQuery", "JavaScript", "HTML5", "CSS3"],
        skillsIcons: [icons.bootstrapIcons, icons.jqueryIcons, icons.jsIcon, icons.htmlIcons, icons.cssIcons],
        images: [
          vijayImage1,
          vijayImage2
        ],
        status: "Completed"
    },
    {
        id: 5,
        title: "Hansa GCR",
        slug: "hansa-gcr",
        image: hansaImage,
        link: "/projects/hansa-gcr",
        shortDesc: "Built a responsive, content-focused website for Hansa GCR, highlighting their custom market research services, global expertise, and client-centric offerings using HTML, CSS, JavaScript, jQuery, and Bootstrap.",
        longDesc: ["Hansa GCR is a global market research and consulting firm, and this project involved developing a clean, professional, and fully responsive website that showcases their capabilities. Using HTML5, CSS3, JavaScript, jQuery, and Bootstrap, I implemented structured content sections that emphasize the brand’s strengths—custom research services, senior expertise, and long-term client partnerships built on trust.","The site highlights key value propositions such as comprehensive research offerings, personalized and actionable business solutions, and global market coverage. The UI layout was crafted to present information clearly and maintain a smooth user experience across devices, while interactive elements were added using jQuery to enhance overall engagement.","The result is a polished website that effectively communicates Hansa GCR’s expertise and services to potential clients worldwide."],
        projLink: ["https://hansagcr.com/"],
        gitHub: "",
        skills: ["HTML5", "CSS3", "JavaScript", "JQuery", "Bootstrap"],
        skillsIcons: [icons.bootstrapIcons, icons.jqueryIcons, icons.jsIcon, icons.htmlIcons, icons.cssIcons],
        images: [
          hansaImage1,
          hansaImage2,
          hansaImage3,
        ],
        status: "Completed"
    },
    {
        id: 6,
        title: "Stockholding",
        slug: "stockholding",
        image: stockholdingImage,
        link: "/projects/stockholding",
        shortDesc: "Developed responsive UI components and interactive financial dashboard features with robust form validations and dynamic data handling using JavaScript and jQuery.",
        longDesc: ["Stockholding is a financial services platform that required clean, reliable, and user-friendly interface components. I built fully responsive UI sections for various financial tools and dashboards, ensuring that users can access key information smoothly across devices.","A significant part of the project involved implementing custom form validations and dynamic data display logic using jQuery and vanilla JavaScript. These enhancements improved input reliability, reduced user errors, and ensured accurate rendering of financial details.","Using HTML5, CSS3, Bootstrap, JavaScript, and jQuery, the final result is a responsive, stable, and performance-focused frontend that supports Stockholding's financial workflows and enhances the overall user experience."],
        projLink: ["https://www.stockholding.com/", "https://www.shcilestamp.com/"],
        gitHub: "",
        skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
        skillsIcons: [icons.bootstrapIcons, icons.xmlIcon, icons.jsIcon, icons.htmlIcons, icons.cssIcons],
        images: [
          stockImage1, stockImage2, stockImage3, stockImage4
        ],
        status: "Completed"
    },
    {
        id: 7,
        title: "Zuari Farm Hub",
        slug: "zuarifarmhub",
        image: zuarifarmhubImage,
        link: "/projects/zuarifarmhub",
        shortDesc: "Developed a responsive, user-friendly website for Zuari Farm Hub to help farmers access agricultural solutions, products, and farming tips using HTML, CSS, Bootstrap, JavaScript, and jQuery.",
        longDesc: ["Zuari Farm Hub is an initiative focused on empowering farmers with accessible and reliable agricultural solutions. For this project, I built a clean and mobile-responsive website using HTML5, CSS3, Bootstrap, JavaScript, and jQuery to ensure smooth navigation and clear presentation of farming resources.","The frontend showcases essential information such as agriculture tips, products, and service offerings from Zuari Farm Hub Limited (ZFHL). The layout was designed to be intuitive for rural and general users, with structured sections that highlight products, benefits, and support services.","Interactive elements and UI behaviors were implemented with jQuery to enhance usability, while Bootstrap ensured a consistent design across devices. The final result is an easy-to-use platform that helps farmers discover valuable tools and knowledge to improve their farming practices."],
        projLink: ["https://zuarifarmhub.com/"],
        gitHub: "",
        skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
        skillsIcons: [icons.bootstrapIcons, icons.xmlIcon, icons.jsIcon, icons.htmlIcons, icons.cssIcons],
        images: [
          zuariImage1, zuariImage2
        ],
        status: "Completed"
    },
];

export default projectsData;