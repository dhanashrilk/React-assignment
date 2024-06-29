import React from "react";
import FileUpload from "../components/FileUpload";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4 py-4">
          <Sidebar />
        </div>
        <div className="col-sm-12 col-md-8 py-4">
          <FileUpload />
        </div>
      </div>
    </div>
  );
};

export default Home;
