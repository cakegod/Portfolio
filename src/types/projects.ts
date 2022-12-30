import type { TagColorsProps } from "@components/projects/Tag.astro";

export type TagNameProps =
  | "Tailwind"
  | "Zustand"
  | "React"
  | "Next JS"
  | "MongoDB"
  | "Express";

export type TagsTuple = [TagNameProps, TagColorsProps];

export interface ProjectProps {
  title: string;
  details: string;
  image: string;
  link: string;
  list: string[];
  tags: TagNameProps[];
}
