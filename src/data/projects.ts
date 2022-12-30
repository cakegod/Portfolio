import shopping from "/shopping.webp";
import memory from "/memory.webp";
import blog from "/blog.webp";
import type { ProjectProps } from "@customTypes/projects";

export const projectsData: ProjectProps[] = [
  {
    title: "Blog API",
    details:
      "A full-stack blog application made with Next JS for the front-end and Express JS for the back-end.",
    image: blog,
    link: "https://blog-cakegod.vercel.app/blog",
    list: [
      "Created a <strong>REST API</strong> as the back-end with Express JS.",
      "Implemented <strong>MongoDB</strong> as the database.",
    ],
    tags: ["Tailwind", "Zustand", "MongoDB", "Express"],
  },
  {
    title: "Shopping Cart",
    details:
      "An e-commerce front-end application, made with React and Next JS.",
    image: shopping,
    link: "https://shopping-cart-cakegod.vercel.app/shop",
    list: [
      "Utilized <strong>Next.js</strong> for routing and optimization of images and fonts.",
      "Implemented <strong>React context</strong> to avoid prop drilling.",
    ],
    tags: ["Tailwind", "React", "Next JS"],
  },
  {
    title: "Memory Game",
    details: "A memory game front-end application, made with React.",
    image: memory,
    link: "https://memory-card-game-umber.vercel.app/",
    list: [
      "Learned how to use <strong>React hooks</strong> and <strong>lifecycle</strong> methods.",
      "Implemented <strong>Zustand</strong> for state management.",
    ],
    tags: ["Tailwind", "React", "Zustand"],
  },
];
