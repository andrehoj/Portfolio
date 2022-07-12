import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
  BsDownload,
} from "react-icons/bs";

function Socials({ biggerThan1000 }) {
  if (biggerThan1000) {
    return (
      <div className="flex flex-col gap-2 mb-12">
        <div className=" mb-6 flex flex-col  items-center ">
          <BsDownload size={24} className="mb-1" />
          <a href="" download={""} className="resume-btn">
            <span>Resume</span>
          </a>
        </div>
        <a
          href="https://github.com/AgentA12?tab=repositories"
          target={"blank"}
          className="self-center place-self-center justify-self-center github"
        >
          <BsGithub size="26" className="mb-4 " />
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-howran-01470222a/"
          target={"blank"}
          className="self-center place-self-center justify-self-center"
        >
          <BsLinkedin size="26" className="mb-4 sidebar-icon linkedin" />
        </a>
        <a
          href="https://stackoverflow.com/users/17832653/andrew-h"
          target={"blank"}
          className="self-center place-self-center justify-self-center"
        >
          <BsStackOverflow size="26" className="sidebar-icon stackof" />
        </a>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-4 justify-around">
      <a
        href=""
        download={""}
        className={"flex items-center gap-1 mr-2 text-sm resume-btn"}
      >
        <span>Resume</span>
        <BsDownload size={16} />
      </a>
      <a href="https://github.com/AgentA12?tab=repositories" target={"blank"}>
        <BsGithub size="20" className="topbar-icon github" />
      </a>
      <a
        href="https://www.linkedin.com/in/andrew-howran-01470222a/"
        target={"blank"}
      >
        <BsLinkedin size="20" className="topbar-icon linkedin" />
      </a>
      <a
        href="https://stackoverflow.com/users/17832653/andrew-h"
        target={"blank"}
      >
        <BsStackOverflow size="20" className="topbar-icon stackof" />
      </a>
    </div>
  );
}

export default Socials;
