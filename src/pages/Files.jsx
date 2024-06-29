import React from "react";
import Tabs from "../components/Tabs";
import Sidebar from "../components/Sidebar";

const Files = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 py-4">
            <Sidebar />
          </div>
          <div className="col-sm-12 col-md-8 py-4">
            <Tabs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Files;
