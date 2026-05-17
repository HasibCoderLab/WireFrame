import { RiUserCommunityFill } from "react-icons/ri";
import { GrResources } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa";

import {
  FaBullseye,
  FaLaptopCode,
  FaUsers
} from "react-icons/fa";
export const mentors = [
  {
    id: 1,
    name: "Shanto",
    role: "Lead  Instructor & Backend Architect",
    skills: ["Node.js", "System Design", "Software Architecture"],
    github: "https://github.com/",
    avatar: null,
    initials: "SH",
  },
  {
    id: 2,
    name: "Hasib Hasan",
    role: "Backend Instructor & AI Integration Expert",
    skills: ["Competitive Programming", "Node.js", "MERN Stack"],
    github: "https://github.com/",
    avatar: null,
    initials: "HH",
  },

  {
    id: 3,
    name: "Farhatul Khanam",
    role: "UI/UX Designer & Frontend Expert",
    skills: ["React", "Tailwind CSS", "UI Design"],
    github: "https://github.com/",
    avatar: null,
    initials: "FK",
  },
  {
    id: 4,
    name: "Mahin Hasan",
    role: "Full Stack Developer & Shopify Expert",
    skills: ["Shopify", "MERN Stack", "E-commerce"],
    github: "https://github.com/",
    avatar: null,
    initials: "MH",
  },
  {
    id: 5,
    name: "Sumaiya Afroza",
    role: "Backend Developer & API Specialist",
    skills: ["Backend Development", "REST APIs", "Database Design"],
    github: "https://github.com/",
    avatar: null,
    initials: "SA",
  },
  {
    id: 6,
    name: "Hasnine",
    role: "JavaScript Instructor & API Integration Specialist",
    skills: ["JavaScript", "API Development", "Backend Systems"],
    github: "https://github.com/",
    avatar: null,
    initials: "HN",
  },
];
export const communityStats = [
  {
    id: 1,
    label: "Active Members",
    value: "50+",
    icon: FaUsers,
  },
  {
    id: 2,
    label: "Projects Built",
    value: "40+",
    icon: FaLaptopCode,
  },
  {
    id: 3,
    label: "Resources Shared",
    value: "200+",
    icon: GrResources,
  },
  {
    id: 4,
    label: "Mentors",
    value: "6",
    icon: FaUserGraduate,
  },
];