import {
  devHangOutIcons,
  findYourEstateIcons,
  stopShopIcons,
  BudgetTrackerIcons
} from "./projectIconData";

export const projectData = [
  {
    title: "Developer Hangout",
    font: "font_dev",
    img: "./dev-hangout-image.png",
    link: "https://developer-hangout-657.herokuapp.com/",
    repo: "https://github.com/AgentA12/Dev_Hangout",
    icons: devHangOutIcons,
    description:
      "A 'dev' themed chatting app where users can create an account, edit their settings and chat with others through dms or rooms.",
  },
  {
    title: "Find Your Estate",
    font: "",
    link: "https://agenta12.github.io/Find_An_Estate/",
    repo: "https://github.com/AgentA12/Find_An_Estate",
    img: "./find-your-estate-1.png",
    icons: findYourEstateIcons,
    description:
      "A real estate application where users can search for properties.",
  },

  {
    title: "Stop Shop",
    font: "",
    link: "https://stop-shop123.herokuapp.com/",
    repo: "https://github.com/AgentA12/Stop_Shop",
    img: "./Stop_Shop_image.png",
    icons: stopShopIcons,
    description:
      "A full stack app that allows users to shop online for products.",
  },
  {
    title: "Budget Tracker",
    font: "",
    link: "https://guarded-chamber-91643.herokuapp.com/",
    repo: "https://github.com/AgentA12/Budget_tracker",
    img: "./Budget_tracker.image.png",
    icons: BudgetTrackerIcons,
    description:
      "A progressive web app where users can track their budget",
  },
];

//mongodb+srv://agentA-auth:SecretPass12@cluster0.ol1krts.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://agenta12:SecretPass12@cluster0.ydjhepw.mongodb.net/?retryWrites=true&w=majority