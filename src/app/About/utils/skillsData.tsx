import {
  SiExpress,
  SiJquery,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiMongodb,
  SiGraphql,
  SiReact,
  SiCss3,
  SiHtml5,
  SiGit,
  SiGithub,
  SiNpm,
  SiRailway,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";

type Skill = {
  image:  JSX.Element;
  name: String;
  color: String;
};
export const skillData: Skill[] = [
  {
    image: <SiHtml5 size={35} />,
    name: "HTML",
    color: "text-html_color",
  },

  {
    image: <SiCss3 size={35} />,
    color: "text-css_color",
    name: "CSS",
  },

  {
    image: <IoLogoJavascript size={35} />,
    color: "text-js_color",
    name: "JavaScript",
  },

  {
    image: <SiReact size={35} />,
    color: "text-react_color",
    name: "React",
  },

  {
    image: <SiJquery size={35} />,
    color: "text-jQuery_color",
    name: "jQuery",
  },

  {
    image: <SiTailwindcss size={35} />,
    color: "text-tailwind_color",
    name: "Tailwind",
  },

  {
    image: <SiBootstrap size={35} />,
    color: "text-bootstrap_color",
    name: "Bootstrap",
  },

  {
    image: <SiNodedotjs size={35} />,
    color: "text-node_color",
    name: "Node.js",
  },

  {
    image: <SiExpress size={35} />,
    color: "text-express_color",
    name: "Express",
  },

  {
    image: <GrMysql size={35} />,
    color: "text-mySQL_color",
    name: "MySQL",
  },

  {
    image: <SiMongodb size={35} />,
    color: "text-mongoDB_color",
    name: "MongoDB",
  },

  {
    image: <SiGraphql size={35} />,
    color: "text-graphQL_color",
    name: "GraphQL",
  },

  {
    image: <SiGit size={35} />,
    color: "text-git_color",
    name: "Git",
  },

  {
    image: <SiGithub size={35} />,
    color: "text-github_color",
    name: "GitHub",
  },

  {
    image: <SiNpm size={35} />,
    color: "text-npm_color",
    name: "npm",
  },

  {
    image: <SiRailway size={35} />,
    name: "Railway",
    color: "text-railway_color",
  },
  // {
  //   image: <Si size={35} />,
  //   name: "python",
  //   color: "text-py_color",
  //   learning: true,
  // },

  // {
  //   image: <Si size={35} />,
  //   name: "Svelte",
  //   color: "text-svelte_color",
  //   learning: true,
  // },

  // {
  //   image: <Si size={35} />,
  //   name: "Docker",
  //   color: "text-docker_color",
  //   learning: true,
  // },

  // {
  //   image: <Si size={35} />,
  //   name: "Webpack",
  //   color: "text-webpack_color",
  //   learning: true,
  // },

  // {
  //   image: <Si size={35} />,
  //   color: "text-ts_color",
  //   name: "TypeScript",
  //   learning: true,
  // },
];
