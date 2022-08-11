import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
  BsDownload,
} from "react-icons/bs";

import { animated, useSpring } from "react-spring";

export default function Socials({ biggerThan1000 }) {
  const props1 = useSpring({
    from: { opacity: 0, marginRight: 100 },
    to: { opacity: 1, marginRight: 0 },
    delay: 1000,
  });

  const props2 = useSpring({
    from: { opacity: 0, marginRight: 100 },
    to: { opacity: 1, marginRight: 0 },
    delay: 1200,
  });

  const props3 = useSpring({
    from: { opacity: 0, marginRight: 100 },
    to: { opacity: 1, marginRight: 0 },
    delay: 1400,
  });

  const props4 = useSpring({
    from: { opacity: 0, marginRight: 100 },
    to: { opacity: 1, marginRight: 0 },
    delay: 1600,
  });

  if (biggerThan1000) {
    return (
      <div className="flex flex-col gap-2 mb-12">
        <animated.div
          className=" mb-6 flex flex-col  items-center"
          style={props1}
        >
          <a href="/" download={""} className="resume-btn">
            <span>Resume</span>
          </a>
        </animated.div>
        <animated.a
          style={props2}
          href="https://github.com/AgentA12"
          target={"blank"}
          className="self-center place-self-center justify-self-center github"
        >
          <BsGithub size="26" className="mb-4 " />
        </animated.a>
        <animated.a
          style={props3}
          href="https://www.linkedin.com/in/andrew-howran-01470222a/"
          target={"blank"}
          className="self-center place-self-center justify-self-center"
        >
          <BsLinkedin size="26" className="mb-4 sidebar-icon linkedin" />
        </animated.a>
        <animated.a
          style={props4}
          href="https://stackoverflow.com/users/17832653/andrew-h"
          target={"blank"}
          className="self-center place-self-center justify-self-center"
        >
          <BsStackOverflow size="26" className="sidebar-icon stackof" />
        </animated.a>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-4 justify-around">
      <a
        href="/"
        download={""}
        className={"flex items-center gap-1 mr-2 text-sm resume-btn"}
      >
        <span>Resume</span>
        <BsDownload size={16} />
      </a>
      <a href="https://github.com/AgentA12" target={"blank"}>
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
