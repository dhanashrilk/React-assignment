import React from "react";
import { QuestionData } from "./Question";

const Questions = () => {
  return (
    <div>
      <div className="container py-4">
        <div className="accordion" id="accordionExample">
          {QuestionData.map((item, index) => (
            <div className="accordion-item" key={item.id}>
              <p className="accordion-header" id={`heading${item.id}`}>
                <button
                  className={`accordion-button ${
                    index !== 0 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item.id}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${item.id}`}
                >
                  {item.question}
                </button>
              </p>
              <div
                id={`collapse${item.id}`}
                className={`accordion-collapse collapse ${
                  index === 0 ? "show" : ""
                }`}
                aria-labelledby={`heading${item.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
