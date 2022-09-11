import React from "react";
import "./SidebarOption.css";

const SidebarOptions = ({ active, text, Icon }) => {
  return (
    <div className="container">
      <div className={`sidebaroption ${active && "sidebaroption--active"}`}>
        <img className="icons-option" src={Icon} alt="" />
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default SidebarOptions;
