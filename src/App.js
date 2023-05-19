import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Doctor from "./Components/Doctor";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import CustomNavbar from "./Components/Navbar";
import "./CSS/style.css";

function App() {
  return (
    <>
      <Router>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Doctor />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
