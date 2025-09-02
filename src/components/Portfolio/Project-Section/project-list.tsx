"use client";

import { Project } from "@/types/projectsData";
import ProjectItem from "./project-item";

const projectData = [
  {
    id: 1,
    title: "CRM Restoraunt",
    description: "Admin panel for managing restaurant workflow",
    image: "/project/crm-rest.jpg",
    dev: [
      "/svg-icons/reactts.svg",
      "/svg-icons/node.svg",
      "/svg-icons/vitejs.svg",
      "/svg-icons/material-ui.svg",
      "/svg-icons/mongodb.svg",
      "/svg-icons/light-redux.svg",
    ],
    link: "https://restoraunt-admin-panel-x3l2.vercel.app/login",
  },
  {
    id: 2,
    title: "Cinema",
    description: "Movie browsing and ticket booking platform",
    image: "/project/cinema.jpg",
    dev: [
      "/svg-icons/reactts.svg",
      "/svg-icons/css3.svg",
      "/svg-icons/js.svg",
      "/svg-icons/api.svg",
    ],
    link: "https://alexprokopev.github.io/goit-react-hw-05-movies/",
  },
  {
    id: 3,
    title: "Landing Page",
    description: "Responsive landing page for product showcase",
    image: "/project/landing.jpg",
    dev: ["/svg-icons/js.svg", "/svg-icons/html-5.svg", "/svg-icons/css3.svg"],
    link: "https://konstruct-red.vercel.app/",
  },
  {
    id: 4,
    title: "Mint Switch",
    description: "Web3 project with token swap functionality",
    image: "/project/mint-switch.jpg",
    dev: [
      "/svg-icons/reactts.svg",
      "/svg-icons/material-ui.svg",
      "/svg-icons/css3.svg",
      "/svg-icons/light-redux.svg",
    ],
    link: "https://mint-switch.vercel.app/",
  },
  {
    id: 5,
    title: "Parser",
    description: "Automated data scraper and parser tool",
    image: "/project/parser.png",
    dev: [
      "/svg-icons/telegram.svg",
      "/svg-icons/node.svg",
      "/svg-icons/api.svg",
    ],
    link: "https://github.com/AlexProkopev/parserTg",
  },
  {
    id: 6,
    title: "Pet Project",
    description: "Experimental project with custom features",
    image: "/project/pet-proj.jpg",
    dev: [
      "/svg-icons/reactts.svg",
      "/svg-icons/material-ui.svg",
      "/svg-icons/css3.svg",
      "/svg-icons/light-redux.svg",
    ],
    link: "https://alexprokopev.github.io/goit-react-hw-08-phonebook",
  },
  {
    id: 7,
    title: "Simply Chocolate",
    description: "Website for chocolate shop",
    image: "/project/simply-chokolate.jpg",
    dev: ["/svg-icons/html-5.svg", "/svg-icons/css3.svg", "/svg-icons/js.svg"],
    link: "https://r3enox.github.io/Simply-Chocolate/",
  },
  {
    id: 8,
    title: "Drinkify",
    description: "Cocktail recipes and recommendation app",
    image: "/project/drinkify.jpg",
    dev: [
      "/svg-icons/reactts.svg",
      "/svg-icons/css3.svg",
      "/svg-icons/light-redux.svg",
      "/svg-icons/node.svg",
    ],
    link: "https://soroked.github.io/project-of-futureJS-seniors/",
  },
];

const ProjectCards = () => {
  const projectDataApi: Project[] = projectData;
  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        My Projects
      </h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projectDataApi.map((project: Project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectCards;
