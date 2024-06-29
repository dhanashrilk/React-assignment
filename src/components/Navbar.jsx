import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiNews } from "react-icons/bi";
import { PiUsersThree, PiUserSwitch } from "react-icons/pi";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            ADVOCASE
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/files"
                  className={` tabs1 ${activeTab === "news" ? "active" : ""}`}
                  onClick={() => setActiveTab("news")}
                  aria-current="page"
                  href="#"
                >
                  <span>
                    <BiNews />
                  </span>{" "}
                  News
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className={` tabs1 ${
                    activeTab === "Find Lawyers" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Find Lawyers")}
                  aria-current="page"
                  href="#"
                >
                  <span>
                    <PiUsersThree />
                  </span>{" "}
                  Find Lawyers
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className={` tabs1 ${activeTab === "Home" ? "active" : ""}`}
                  onClick={() => setActiveTab("Home")}
                  aria-current="page"
                >
                  <span>
                    <IoHomeOutline />
                  </span>{" "}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className={` tabs1 ${
                    activeTab === "Connections" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Connections")}
                  aria-current="page"
                  href="#"
                >
                  <span>
                    <PiUserSwitch />
                  </span>{" "}
                  Connections
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/settings"
                  className={` tabs1 ${activeTab === "Chats" ? "active" : ""}`}
                  onClick={() => setActiveTab("Chats")}
                  aria-current="page"
                  href="#"
                >
                  <span>
                    <BsChatLeftText />
                  </span>{" "}
                  Chats
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <span>
                <IoSettingsOutline />
              </span>
              <span className="position-relative">
                <FaRegBell />
                <span className="badge position-absolute translate-middle p-1 bg-primary border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </span>
              <span className="user-icon">
                <img src="./img/images.png" alt="" />
              </span>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
