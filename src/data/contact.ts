import type { ContactNameProps } from "@components/contact/Card.astro";

export interface ContactProps {
  heading: ContactNameProps;
  description: string;
  button: string;
  link: string;
}

export const contactMethods: ContactProps[] = [
  {
    heading: "E-mail",
    description: "contact.email.description",
    button: "contact.email.button",
    link: "contact.email.link",
  },
  {
    heading: "Github",
    description: "contact.github.description",
    button: "contact.github.button",
    link: "https://github.com/cakegod",
  },
];
