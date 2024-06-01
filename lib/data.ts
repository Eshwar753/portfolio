import React from "react";

import Hirely from "@/public/Hirely.png";
import Car2nds from "@/public/Car2nds.png";
import ProAdventure from "@/public/proAdventure.png"; 

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Pro-Adventure",
    description:
      " A Ecommerce platform, that allows customers to go and buy military quality goods and products for their next wild adventure.",
    tags: ["React","Express", "MongoDB", "Bootstrap", "Redux" ],
    imageUrl: ProAdventure,
    githubUrl: "https://github.com",
    demoPage: "https://pro-adventure.onrender.com/",
  },
  {
    title: "Hirely",
    description:"Hirely is a platform where candidates can get hired by recruiters from different organizations and startups.",
    tags: ["React","Express", "MongoDB", "Bootstrap", "Redux"],
    imageUrl: Hirely,
    githubUrl: "https://github.com",
    demoPage: "https://hirely-mqm4.onrender.com/",
  },
  {
    title: "Car 2nds",
    description:
      "A car search platform, which helps the customers to get their desired cars for cheaper with better quality.",
    tags: ["Django", "PostgreSQL", "Python", "Bootstrap"],
    imageUrl: Car2nds,
    githubUrl: "https://github.com",
    demoPage: "https://car2nds-django.onrender.com/",
  },

] as const;
