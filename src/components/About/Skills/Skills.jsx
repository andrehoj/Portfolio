import { skillData } from "./utils/skillsData";

export default function Skills() {
  return (
    <>
      <p className="text-5xl mt-10">My Skills</p>
      <div className="flex flex-wrap justify-center gap-10 mb-10">
        {skillData.map((skill) => (
          <div className="skill-icons flex flex-col items-center justify-center justify-self-center p-2 rounded-lg shadow-sm shadow-light_theme_blue dark:shadow-dark_theme_cyan hover:shadow-light_theme_blue hover:shadow-md duration-150 ease-in-out">
            {skill.isIcon ? (
              skill.image
            ) : (
              <img className="w-8" src={`${skill.image}`} />
            )}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </>

    // <div
    //   className="hidden md:block ml-20 mt-20 mr-8 max-w-2xl"
    // >
    //   <div className="slider-container">
    //     <div className="">
    //       {" "}
    //       <img
    //         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    //         alt=""
    //         height={"100px"}
    //         width={"100px"}
    //       />
    //     </div>
    //     <div className="">
    //       <img
    //         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
    //         alt=""
    //         height={"100px"}
    //         width={"100px"}
    //       />
    //     </div>
    //     <div className="">
    //       <img
    //         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
    //         alt=""
    //         height={"100px"}
    //         width={"100px"}
    //       />
    //     </div>
    //     <div className="">
    //       <img
    //         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
    //         alt=""
    //         height={"100px"}
    //         width={"100px"}
    //       />
    //     </div>
    //     <div className="">
    //       {" "}
    //       <img
    //         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
    //         alt=""
    //         height={"100px"}
    //         width={"100px"}
    //       />
    //     </div>
    //     <div className="">
    //       <img
    //         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
    //         alt=""
    //         height={"100px"}
    //         width={"100px"}
    //       />
    //     </div>
    //     <div className="">
    //       {" "}
    //       <img
    //         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
    //         alt=""
    //         height={"100px"}
    //         width={"100px"}
    //         className="dark:light-icons"
    //       />
    //     </div>
    //     <div className="">
    //       {" "}
    //       <img
    //         src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
    //         alt=""
    //         height={"100px"}
    //         width={"100px"}
    //         className="dark:light-icons"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
