import React from "react";
import Connections from "./Connections";
import Sidebar from "../components/Sidebar";
import Questions from "../components/Questions";

const Profile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-3 py-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-sm-12 col-md-6 py-4">
          <div className="side-bar">
            <Questions />
          </div>
        </div>
        <div className="col-sm-12 col-md-3">
          <Connections />
        </div>
      </div>
    </div>
  );
};

export default Profile;
