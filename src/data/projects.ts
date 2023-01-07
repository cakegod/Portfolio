import shopping from "@assets/shopping.webp";
import memory from "@assets/memory.webp";
import blog from "@assets/blog.webp";
import portfolio from "@assets/portfolio.jpg";
import type { TagNames } from "@components/projects/Tag.astro";

export interface Project {
  title: string;
  details: string;
  image: string;
  link: string;
  list: string[];
  tags: TagNames[];
}

export const projectsData: Project[] = [
  {
    title: "projects.blog.title",
    details: "projects.blog.details",
    image: blog,
    link: "https://blog-cakegod.vercel.app/blog",
    list: ["projects.blog.list.0", "projects.blog.list.1"],
    tags: ["Tailwind", "Zustand", "MongoDB", "Express"],
  },
  {
    title: "projects.shopping.title",
    details: "projects.shopping.details",
    image: shopping,
    link: "https://shopping-cart-cakegod.vercel.app/shop",
    list: ["projects.shopping.list.0", "projects.shopping.list.1"],
    tags: ["Tailwind", "React", "Next JS"],
  },
  {
    title: "projects.portfolio.title",
    details: "projects.portfolio.details",
    image: portfolio,
    link: "https://portfolio-cakegod.vercel.app/",
    list: ["projects.portfolio.list.0", "projects.portfolio.list.1"],
    tags: ["Tailwind", "Astro"],
  },
  {
    title: "projects.memory.title",
    details: "projects.memory.details",
    image: memory,
    link: "https://memory-card-umber.vercel.app/",
    list: ["projects.memory.list.0", "projects.memory.list.1"],
    tags: ["Tailwind", "React", "Zustand"],
  },
];
