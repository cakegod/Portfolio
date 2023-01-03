import shopping from "../assets/shopping.webp";
import memory from "../assets/memory.webp";
import blog from "../assets/blog.webp";
import type { projectTags } from "../components/projects/Tag.astro";

export interface ProjectProps {
  title: string;
  details: string;
  image: string;
  link: string;
  list: string[];
  tags: (keyof typeof projectTags)[];
}

export const projectsData: ProjectProps[] = [
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
    title: "projects.memory.title",
    details: "projects.memory.details",
    image: memory,
    link: "https://memory-card-umber.vercel.app/",
    list: ["projects.memory.list.0", "projects.memory.list.1"],
    tags: ["Tailwind", "React", "Zustand"],
  },
];
