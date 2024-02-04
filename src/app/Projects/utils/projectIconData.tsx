import {
  SiHandlebarsdotjs,
  SiExpress,
  SiSocketdotio,
  SiApollographql,
  SiNextdotjs,
} from "react-icons/si";

export interface IconType {
  isIcon: Boolean;
  name: String;
  link: String;
}

export const devHangOutIcons = [
  {
    isIcon: true,
    name: "Handlebars",
    link: (
      <SiHandlebarsdotjs
        color="#F0772B"
        size={30}
        data-tooltip-target={"Handlebars"}
      />
    ),
  },
  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
  },
  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    name: "jQuery",
  },
  {
    isIcon: true,
    link: <SiExpress size={30} />,
    name: "Express",
  },

  {
    isIcon: false,
    name: "Sessions/Cookies",
    link: "",
  },

  {
    isIcon: true,
    link: <SiSocketdotio size={30} />,
    name: "Socket io",
  },

  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },

  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
    name: "Sequelize",
  },
];

export const findYourEstateIcons = [
  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
  },
  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    name: "Material UI",
  },
  {
    isIcon: false,
    link: "https://www.vectorlogo.zone/logos/rapidapi/rapidapi-icon.svg",
    name: "Rapid Api",
  },
];

export const stopShopIcons = [
  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    name: "GraphQL",
  },
  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },

  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
  },
  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    name: "Tailwind CSS",
  },
  {
    isIcon: true,
    link: <SiExpress size={30} />,
    name: "Express",
  },
  {
    isIcon: true,
    link: <SiApollographql size={30} />,
    name: "Apollo",
  },
];

export const portfolioIcons = [
  {
    isIcon: true,
    link: <SiNextdotjs />,
    name: "Nextjs",
  },
  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
    name: "TypeScript",
  },
  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    name: "tailwindcss",
  },
];

export const BudgetTrackerIcons = [
  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    isIcon: true,
    link: <SiExpress size={30} />,
    name: "Express",
  },

  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    isIcon: false,
    link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },

  {
    isIcon: false,
    link: "",
    name: "Chart.js",
  },
];

export const gymTrackerIcons = [
  {
    isIcon: false,
    link: "",
    name: "React",
  },

  {
    isIcon: false,
    link: "",
    name: "TypeScript",
  },

  {
    isIcon: false,
    name: "Mantine UI",
  },

  {
    link: "",
    isIcon: false,
    name: "Apollo GraphQL",
  },

  {
    isIcon: false,
    link: "",
    name: "JWT",
  },

  {
    isIcon: false,
    link: "",
    name: "Express",
  },

  {
    link: "",
    isIcon: false,
    name: "MongoDB",
  },

  {
    isIcon: false,
    link: "",
    name: "Mongoose",
  },
];

export const WordsIcons = [
  { name: "Vite", isIcon: false, link: "" },
  { name: "TypeScript", isIcon: false, link: "" },
  { name: "React", isIcon: false, link: "" },
  { name: "Daisy ui", isIcon: false, link: "" },
];
