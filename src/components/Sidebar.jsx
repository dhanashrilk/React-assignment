import React from "react";
import "./Sidebar.css";
import Card from "./Card";

const Sidebar = () => {
  return (
    <div className="side-bar p-4">
      <h5 className="p-2 mb-0">Recent Studies</h5>
      <Card />
    </div>
  );
};

export default Sidebar;
