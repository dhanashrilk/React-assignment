import React, { useState } from "react";
import ProgressBar from "./Progressbar";
import "./ProgressBar.css";
import { FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    step: <FaCheckCircle />,
    stepName: "Start",
  },
  {
    step: <FaCheckCircle />,
    stepName: "Continue",
  },
  {
    step: <FaCheckCircle />,
    stepName: "Analysis",
  },
  {
    step: <FaCheckCircle />,
    stepName: "Additional Documentation",
  },
  {
    step: <FaCheckCircle />,
    stepName: "Relief",
  },
  {
    step: <FaCheckCircle />,
    stepName: "Suggestion",
  },
  {
    step: <FaCheckCircle />,
    stepName: "Final Draft",
  },
  {
    step: <FaCheckCircle />,
    stepName: "Q&A",
  },
  {
    step: <FaCheckCircle />,
    stepName: "Final Draft",
  },
];

const Connections = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <div>Step 1</div>;
      case 1:
        return <div>Step 2</div>;
      case 2:
        return <div>Step 3</div>;
      case 4:
        return <div>Step 4</div>;
      case 5:
        return <div>Step 5</div>;
      case 6:
        return <div>Step 6</div>;
      case 7:
        return <div>Step 7</div>;
      case 8:
        return <div>Step 8</div>;
      case 9:
        return <div>Step 9</div>;
      default:
        return <div>Step 9</div>;
    }
  };
  return (
    <div className="side-bar">
      <ProgressBar
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <div className="step-content">{renderStepContent()}</div>
    </div>
  );
};
export default Connections;
