import React from "react";
import ProjectCard from "./ProjectCard";
import "./Work.css";

const projects = [
    {
        title: "X-Dividend Mobile App",
        description:
            "The app offers comprehensive data on companies, including categories of Most Actives, Gainers and Losers Stock Market. Users can sort the information by sector, name, highest or lowest price, dividend date, and ex-dividend date. This data is updated in real-time, ensuring that users always have access to the most current information.",
        techStack: ["React Native", "Hybrid Mobile App", "Android", "iOS"],
        image: "https://www.muhammadaamirmalik.com/assets/projects/Xdividend.png",
    },
    {
        title: "Stock Tracker Web App",
        description:
            "A web application that allows users to track stock prices, set alerts, and analyze financial data in real-time. Features include interactive charts, company insights, and user-friendly design.",
        techStack: ["React", "Redux", "Chart.js", "Firebase"],
        image: "https://www.muhammadaamirmalik.com/assets/projects/stocktracker.png",
    },
    {
        title: "X-Dividend Mobile App",
        description:
            "The app offers comprehensive data on companies, including categories of Most Actives, Gainers and Losers Stock Market. Users can sort the information by sector, name, highest or lowest price, dividend date, and ex-dividend date. This data is updated in real-time, ensuring that users always have access to the most current information.",
        techStack: ["React Native", "Hybrid Mobile App", "Android", "iOS"],
        image: "https://www.muhammadaamirmalik.com/assets/projects/Xdividend.png",
    },
    {
        title: "Stock Tracker Web App",
        description:
            "A web application that allows users to track stock prices, set alerts, and analyze financial data in real-time. Features include interactive charts, company insights, and user-friendly design.",
        techStack: ["React", "Redux", "Chart.js", "Firebase"],
        image: "https://www.muhammadaamirmalik.com/assets/projects/stocktracker.png",
    },
];

function Work() {
    return (
      <section className="work-section">
        <div className="custom-container">
            <div className="page-info">
                <h2 className="sub-heading">Things I’ve Worked on, Some of Them</h2>
                <div className="line"></div>
            </div>

            <div className="work-projects">
                {projects.map((project, index) => (
                <ProjectCard key={index} project={project} isEven={index % 2 === 1} />
                ))}
            </div>
        </div>
      </section>
    );
  }

export default Work;