import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from "./Components/Home"
import CustomNavbar from "./Components/Navbar";
import "./CSS/style.css";

function App() {
  return (
    <>
    
    <Router>
    <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
