import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import clubfairsImg from "@/public/Club_Fairs.png";
import movienightImg from "@/public/Movie_Night.png";
import eventsearchImg from "@/public/Event_Search.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Medplus Health Services Pvt. Ltd",
    location: "Hyderabad, India",
    description:
      "As an intern worked on developing a library management system full stack application with react as front end and spring boot as backend",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Import Hub",
    location: "Los Angeles, USA",
    description:
      "Volunteered to work on interview experience sharing platform. Designed database schemas, led a team of three on crafting restful APIs using node js Express framework.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Club-Faris",
    description:
      "Created a web platform that allows users to post details about their clubs or discover new clubs using advanced sorting and filtering options, with capabilities to contact club owners directly.",
    tags: ["React", "Spring Boot", "MySql", "Tailwind CSS"],
    imageUrl: clubfairsImg,
  },
  {
    title: "Movie Night",
    description:
      "Developed a dynamic web app featuring autocomplete search to explore movies, view detailed information, compile movie lists, and facilitate voting sessions",
    tags: ["React", "Node js", "Express", "Tailwind CSS", "Mongo DB"],
    imageUrl: movienightImg,
  },
  {
    title: "Event Search",
    description:
      "Engineered an application to locate local events, providing comprehensive details about artists and venues, offering functionalities to save favorite events, and enabling ticket bookings.",
    tags: ["React", "Node.js", "SQL", "CSS"],
    imageUrl: eventsearchImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "C",
  "React",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Java",
  "Spring Boot",
  "Figma",
  "Maven",
  "MongoDB",
  "Flask",
  "Express",
  "MySQL",
  "Python",
  "VS Code",
  "Intellij",
  "Postman",
] as const;
