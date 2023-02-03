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
    link: "mailto:fabiorodriguessousa97@gmail.com",
  },
  {
    heading: "Github",
    description: "contact.github.description",
    button: "contact.github.button",
    link: "https://github.com/cakegod",
  },
];
