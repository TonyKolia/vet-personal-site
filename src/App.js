import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CustomNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import { AnimatePresence } from "framer-motion";
import "./CSS/style.css";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {

  const [cookie, setCookie] = useCookies(['language']);

  const [language, setLanguage] = React.useState("");

  React.useEffect(() => {

    let cookieLanguage = document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (cookieLanguage !== "" && cookieLanguage !== null)
      setLanguage(cookieLanguage);
    else {
      setLanguage("GR");
      setCookie("language", "GR", { path: "/" });
    }

  }, []);

  React.useEffect(() => {

    window.addEventListener("resize", () => document.body.style.backgroundSize = `${window.innerWidth}px ${window.innerHeight}px`);

    let togglers = document.getElementsByClassName("navbar-toggler");
    if (togglers.length === 0)
      return;

    let navbarLinks = document.getElementsByClassName("nav-link");

    if (getComputedStyle(togglers[0], null).display !== "none") {
      for (let i = 0; i < navbarLinks.length; i++)
        navbarLinks[i].addEventListener("click", () => { togglers[0].click() });
    }

  }, []);


  React.useEffect(() => {
    setCookie("language", language, { path: "/" });

    if (language === "GR")
      document.title = "Κτηνίατρος - Αράπη Ελεάννα";
    else
      document.title = "Veterinarian - Arapi Eleanna";

  }, [language]);

  return (
    <>
      <CookiesProvider>
        <Router>
          <div className="main-container">
            <CustomNavbar setLanguage={setLanguage} language={language} />
            <AnimatePresence>
              <AnimatedRoutes />
            </AnimatePresence>
            <Footer />
          </div>
        </Router>
      </CookiesProvider>
    </>
  );
}

export default App;
