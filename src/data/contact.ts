import type { ContactNames } from "@components/contact/Card.astro";

export interface Contact {
  heading: ContactNames;
  description: string;
  button: string;
  link: string;
}

export const contactMethods: Contact[] = [
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
