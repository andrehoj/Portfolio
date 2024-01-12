import {
  devHangOutIcons,
  findYourEstateIcons,
  stopShopIcons,
  gymTrackerIcons,
  IconType,
  portfolioIcons,
} from "./projectIconData";

export interface ProjectType {
  title: String;
  link: String;
  repo: String;
  images: String[];
  icons: [IconType];
  description: String;
}

export const projectData = [
  {
    title: "Strength Log",
    link: "https://strength-log-frontend.vercel.app/",
    repo: "https://github.com/AgentA12/gym_tracker",
    images: [
      "/strength-log-1.png",
      "/strength-log-2.png",
      "/strength-log-3.png",
      "/strength-log-4.png",
    ],
    icons: gymTrackerIcons,
    description:
      "Strength Log is an fitness application I made to help me keep track of my workouts. Most fitness apps have to many features I dont use so I wanted something simple for myself.",
  },

  {
    title: "Developer Hangout",
    images: [
      "/dev-hangout-image-1.png",
      "/dev-hangout-image-3.png",
      "/dev-hangout-image-2.png",
    ],
    link: "https://devhangout-production.up.railway.app/",
    repo: "https://github.com/AgentA12/Dev_Hangout",
    icons: devHangOutIcons,
    description:
      "A developer 'themed' chatting application where users can get help from other developers when they get stuck. Users can create an account, edit their settings and chat with others through direct messages or language based rooms.",
  },

  {
    title: "Portfolio",
    images: ["/portfolio-img-0.png"],
    link: "https://andrewhowran.dev",
    repo: "https://github.com/AgentA12/Portfolio",
    icons: portfolioIcons,
    description: "This portfolio of mine",
  },

  {
    title: "Find Your Estate",
    link: "https://agenta12.github.io/Find_An_Estate/",
    repo: "https://github.com/AgentA12/Find_An_Estate",
    images: ["/find-your-estate-1.png", "/find-your-estate-2.png"],
    icons: findYourEstateIcons,
    description:
      "A real estate application where users can search for properties in the UAE area. Users can filter their search by Max and Min price, number of rooms and baths and either for rent or sale.",
  },

  {
    title: "Stop Shop",
    link: "https://stopshop-production.up.railway.app/",
    repo: "https://github.com/AgentA12/Stop_Shop",
    images: [
      "/stop-shop-image-1.png",
      "/stop-shop-image-2.png",
      "/stop-shop-image-3.png",
      "/stop-shop-image-4.png",
    ],
    icons: stopShopIcons,
    description:
      "An Ecommerce full stack app that allows users to shop online for a variety of products. ",
  },
];
