import {
  devHangOutIcons,
  findYourEstateIcons,
  stopShopIcons,
  BudgetTrackerIcons,
  gymTrackerIcons,
  portfolioIcons,
} from "./projectIconData";

export const projectData = [
  {
    title: "Developer Hangout",
    font: "font-dev",
    img: "./images/dev-hangout-image-1.png",
    // "./images/dev-hangout-image-2.png",
    // "./images/dev-hangout-image-3.png",
    link: "https://developer-hangout-657.herokuapp.com/",
    repo: "https://github.com/AgentA12/Dev_Hangout",
    icons: devHangOutIcons,
    description:
      "A 'dev' themed chatting application where users can get help from other developers when they get stuck. Users can create an account, edit their settings and chat with others through direct messages or language based rooms.",
  },

  {
    title: "Stop Shop",
    font: "",
    link: "https://stop-shop123.herokuapp.com/",
    repo: "https://github.com/AgentA12/Stop_Shop",
    img: "./images/stop-shop-image-1.png",
    // "./images/stop-shop-image-2.png",
    // "./images/stop-shop-image-3.png",
    // "./images/stop-shop-image-4.png",
    icons: stopShopIcons,
    description:
      "An Ecommerce full stack app that allows users to shop online for a variety of products. ",
  },

  {
    title: "Gym Tracker",
    font: "",
    link: "",
    repo: "https://github.com/AgentA12/gym_tracker",
    img: "./images/gym_tracker.png",
    //  "./images/gym_tracker-2.png"
    icons: gymTrackerIcons,
    description:
      "Gym tracker is an fitness tracker application I made to help me keep track of my workouts. Most fitness apps have to many features I dont use so I wanted something simple and easy.",
  },

  {
    title: "Find Your Estate",
    font: "",
    link: "https://agenta12.github.io/Find_An_Estate/",
    repo: "https://github.com/AgentA12/Find_An_Estate",
    img: "./images/find-your-estate-1.png",
    // "./images/find-your-estate-2.png",

    icons: findYourEstateIcons,
    description:
      "A real estate application where users can search for properties in the UAE area. Users can filter their search by Max and Min price, number of rooms and baths and either for rent or sale.",
  },

  {
    title: "My Portfolio",
    font: "",
    link: "https://andrewhowran.dev",
    repo: "https://github.com/AgentA12/Portfolio",
    img: "./images/Portfolio.png",
    icons: portfolioIcons,
    description: "This portfolio! I had lots of fun making this with framer motion and cool react libraries.",
  },

  {
    title: "Budget Tracker",
    font: "",
    link: "https://guarded-chamber-91643.herokuapp.com/",
    repo: "https://github.com/AgentA12/Budget_tracker",
    img: "./images/Budget_tracker.png",
    icons: BudgetTrackerIcons,
    description: "A progressive web app where users can track their budget.",
  },
];
