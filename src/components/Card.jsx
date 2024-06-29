import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiProgress3Fill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";

const Card = () => {
  return (
    <div className="py-2">
      <div className="card p-0 mb-4">
        <div className="card-body p-2">
          <p className="card-title">"Dog Bite Complaint"</p>

          <div className="d-flex justify-content-between p-0 status-div">
            <p className="date-style">2 days ago</p>
            <p href="#" className="card-link float-right d-inline-block ">
              <span className="icon">
                <FaCheckCircle />
              </span>
              Completed
            </p>
          </div>
        </div>
      </div>
      <div className="card p-0 my-4">
        <div className="card-body p-2">
          <p className="card-title">"The Cyberbullying Conspiracy"</p>

          <div className="d-flex justify-content-between p-0 status-div">
            <p className="date-style">2 days ago</p>
            <p href="#" className="card-link float-right d-inline-block ">
              <span className="icon">
                <FaCheckCircle />
              </span>
              Completed
            </p>
          </div>
        </div>
      </div>
      <div className="card p-0 my-4">
        <div className="card-body p-2">
          <p className="card-title">"The Data Breach Dilemma"</p>

          <div className="d-flex justify-content-between p-0 status-div">
            <p className="date-style">2 days ago</p>
            <p href="#" className="card-link float-right d-inline-block ">
              <span className="icon">
                <FaCheckCircle />
              </span>
              Completed
            </p>
          </div>
        </div>
      </div>
      <div className="card p-0 my-4">
        <div className="card-body p-2">
          <p className="card-title">"The Data Breach Dilemma"</p>

          <div className="d-flex justify-content-between p-0 status-div">
            <p className="date-style">2 days ago</p>
            <p
              href="#"
              className="card-link float-right d-inline-block text-warning"
            >
              <span className="icon">
                <RiProgress3Fill />
              </span>
              In Progress
            </p>
          </div>
        </div>
      </div>
      <div className="card p-0 my-4">
        <div className="card-body p-2">
          <p className="card-title">"The Data Breach Dilemma"</p>

          <div className="d-flex justify-content-between p-0 status-div">
            <p className="date-style">2 days ago</p>
            <p
              href="#"
              className="card-link float-right d-inline-block text-danger"
            >
              <span className="icon">
                <MdOutlineCancel />
              </span>
              Failed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
