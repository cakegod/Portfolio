import shopping from "/shopping.webp";
import memory from "/memory.webp";
import type { ProjectProps } from "./types";

const projectsData: ProjectProps[] = [
  {
    title: "Shopping Cart",
    details: "A front end project made with React and Next JS.",
    image: shopping,
    link: "https://shopping-cart-cakegod.vercel.app/shop",
    list: [
      "Utilized <strong>Next.js</strong> for routing and optimization of images and fonts.",
    ],
    tags: [
      { name: "Tailwind", color: "emerald" },
      { name: "React", color: "blue" },
      { name: "Next JS", color: "orange" },
    ],
  },
  {
    title: "Memory Game",
    details: "A memory game front end project made with React.",
    image: memory,
    link: "https://memory-card-game-umber.vercel.app/",
    list: ["Implemented <strong>Zustand</strong> for state management."],
    tags: [
      { name: "Tailwind", color: "emerald" },
      { name: "React", color: "blue" },
      { name: "Zustand", color: "red" },
    ],
  },
  {
    title: "Memory Game",
    details: "A memory game front end project made with React.",
    image: memory,
    link: "https://memory-card-game-umber.vercel.app/",
  },
  {
    title: "Memory Game",
    details: "A memory game front end project made with React.",
    image: memory,
    link: "https://memory-card-game-umber.vercel.app/",
  },
];

export { projectsData };
