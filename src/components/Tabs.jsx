import React, { useState } from "react";
import "./Tabs.css";
import Questions from "./Questions";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "casedesk":
        return <Questions />;
      case "acts&laws":
        return <Questions />;
      case "judgement":
        return <Questions />;
      case "templates":
        return <Questions />;
      case "questions":
        return <Questions />;
      case "support":
        return <Questions />;
      default:
        return null;
    }
  };

  return (
    <div className="tabs-section">
      <div className="tabs">
        <div
          className={`tab1 ${activeTab === "casedesk" ? "active" : ""}`}
          onClick={() => setActiveTab("casedesk")}
        >
          Case Desk
        </div>
        <div
          className={`tab1 ${activeTab === "acts&laws" ? "active" : ""}`}
          onClick={() => setActiveTab("acts&laws")}
        >
          Acts & Laws
        </div>
        <div
          className={`tab1 ${activeTab === "judgement" ? "active" : ""}`}
          onClick={() => setActiveTab("judgement")}
        >
          Judgement
        </div>
        <div
          className={`tab1 ${activeTab === "templates" ? "active" : ""}`}
          onClick={() => setActiveTab("templates")}
        >
          Templates
        </div>
        <div
          className={`tab1 ${activeTab === "questions" ? "active" : ""}`}
          onClick={() => setActiveTab("questions")}
        >
          Questions
        </div>
        <div
          className={`tab1 ${activeTab === "support" ? "active" : ""}`}
          onClick={() => setActiveTab("support")}
        >
          Support
        </div>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
