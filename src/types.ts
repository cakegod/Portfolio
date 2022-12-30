import type { TagProps } from "./components/Projects/Tag.astro";

interface ProjectProps {
  title: string;
  details: string;
  image: string;
  link: string;
  list?: string[];
  tags?: {
    name: string;
    color: TagProps["color"];
  }[];
}

export type { ProjectProps };
