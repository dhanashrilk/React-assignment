import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ steps, currentStep, setCurrentStep }) => {
  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index <= currentStep ? "active" : ""}`}
          onClick={() => setCurrentStep(index)}
        >
          <div className="w-50">
            {step.step}
            {index < steps.length - 1 && (
              <div
                className={`vertical-line ${
                  currentStep > step ? "active" : ""
                }`}
              ></div>
            )}
          </div>
          <span className="step-name w-50 d-flex justify-content-start">
            {step.stepName}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
