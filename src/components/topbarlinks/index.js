import React from "react";

const topbarlinks = ({ link }) => {
  return (
    <div className="top-nav-link">
      <a href="" className="link-item" key={link}>
        {link}
      </a>
    </div>
  );
};

export default topbarlinks;
