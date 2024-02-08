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
    date: 2024,
    title: "Strength Log",
    link: "https://strength-log.vercel.app/",
    repo: "https://github.com/andrehoj/Strength_Log",
    images: [
      { src: "/strength-log-1.png", width: 800, height: 100 },
      { src: "/strength-log-2.png", width: 800, height: 100 },
      { src: "/strength-log-3.png", width: 800, height: 100 },
      { src: "/strength-log-4.png", width: 800, height: 100 },
      { src: "/strength-log-8.png", width: 500, height: 100 },
      { src: "/strength-log-9.png", width: 500, height: 100 },
      { src: "/strength-log-5.png", width: 260, height: 100 },
      { src: "/strength-log-6.png", width: 260, height: 100 },
      { src: "/strength-log-7.png", width: 225, height: 100 },


    ],
    icons: gymTrackerIcons,

    description:
      "Fitness application.",
  },

  // {
  //   title: "Developer Hangout",
  //   images: [
  //     "/dev-hangout-image-1.png",
  //     "/dev-hangout-image-3.png",
  //     "/dev-hangout-image-2.png",
  //   ],
  //   link: "https://devhangout-production.up.railway.app/",
  //   repo: "https://github.com/AgentA12/Dev_Hangout",
  //   icons: devHangOutIcons,
  //   description:
  //     "A developer 'themed' chatting application where users can get help from other developers when they get stuck. Users can create an account, edit their settings and chat with others through direct messages or language based rooms.",
  // },

  // {
  //   title: "Portfolio",
  //   images: ["/portfolio-img-0.png"],
  //   link: "https://andrewhowran.dev",
  //   repo: "https://github.com/AgentA12/Portfolio",
  //   icons: portfolioIcons,
  //   description: "This portfolio of mine",
  // },

  // {
  //   title: "Find Your Estate",
  //   link: "https://agenta12.github.io/Find_An_Estate/",
  //   repo: "https://github.com/AgentA12/Find_An_Estate",
  //   images: ["/find-your-estate-1.png", "/find-your-estate-2.png"],
  //   icons: findYourEstateIcons,
  //   description:
  //     "A real estate application where users can search for properties in the UAE area. Users can filter their search by Max and Min price, number of rooms and baths and either for rent or sale.",
  // },

  // {
  //   title: "Stop Shop",
  //   link: "https://stopshop-production.up.railway.app/",
  //   repo: "https://github.com/AgentA12/Stop_Shop",
  //   images: [
  //     "/stop-shop-image-1.png",
  //     "/stop-shop-image-2.png",
  //     "/stop-shop-image-3.png",
  //     "/stop-shop-image-4.png",
  //   ],
  //   icons: stopShopIcons,
  //   description:
  //     "An Ecommerce full stack app that allows users to shop online for a variety of products. ",
  // },
];
