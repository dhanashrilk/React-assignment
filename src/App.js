import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Files from "./pages/Files";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import "./App.css";
import FindLawyers from "./pages/FindLawyers";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/files" element={<Files />} />
          <Route path="/findlawyers" element={<FindLawyers />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
