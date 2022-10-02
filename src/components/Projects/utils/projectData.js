import {
  devHangOutIcons,
  findYourEstateIcons,
  stopShopIcons,
  BudgetTrackerIcons,
  gymTrackerIcons,
} from "./projectIconData";

export const projectData = [
  {
    title: "Developer Hangout",
    font: "font-dev",
    imgs: [
      "./images/dev-hangout-image-1.png",
      "./images/dev-hangout-image-2.png",
      "./images/dev-hangout-image-3.png",
    ],
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
    imgs: [
      "./images/stop-shop-image-1.png",
      "./images/stop-shop-image-2.png",
      "./images/stop-shop-image-3.png",
      "./images/stop-shop-image-4.png",
    ],
    icons: stopShopIcons,
    description:
      "An Ecommerce full stack app that allows users to shop online for a variety of products. ",
  },

  {
    title: "Gym Tracker",
    font: "",
    link: "",
    repo: "https://github.com/AgentA12/gym_tracker",
    imgs: ["./images/gym_tracker.png"],
    icons: gymTrackerIcons,
    description:
      "Gym tracker is an fitness tracker application I made to help me keep track of my workouts. Most fitness apps have to many features I dont use so I wanted something simple and easy.",
  },

  {
    title: "Find Your Estate",
    font: "",
    link: "https://agenta12.github.io/Find_An_Estate/",
    repo: "https://github.com/AgentA12/Find_An_Estate",
    imgs: [
      "./images/find-your-estate-1.png",
      "./images/find-your-estate-2.png",
    ],
    icons: findYourEstateIcons,
    description:
      "A real estate application where users can search for properties in the UAE area. Users can filter their search by Max and Min price, number of rooms and baths and either for rent or sale.",
  },

  {
    title: "Budget Tracker",
    font: "",
    link: "https://guarded-chamber-91643.herokuapp.com/",
    repo: "https://github.com/AgentA12/Budget_tracker",
    imgs: ["./images/Budget_tracker.png"],
    icons: BudgetTrackerIcons,
    description: "A progressive web app where users can track their budget",
  },
];

//mongodb+srv://agentA-auth:SecretPass12@cluster0.ol1krts.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://agenta12:SecretPass12@cluster0.ydjhepw.mongodb.net/?retryWrites=true&w=majority
