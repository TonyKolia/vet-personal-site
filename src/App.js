import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CustomNavbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import { AnimatePresence } from "framer-motion";
import "./CSS/style.css";
import AnimatedRoutes from "./AnimatedRoutes";


export const LanguageContext = React.createContext();

function App() {

  const [cookie, setCookie] = useCookies(['language']);

  const [language, setLanguage] = React.useState("");

  //initialize the language based on stored cookie or create cookie for first time visit
  React.useEffect(() => {

    let cookieLanguage = document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (cookieLanguage !== "" && cookieLanguage !== null)
      setLanguage(cookieLanguage);
    else {
      setLanguage("GR");
      setCookie("language", "GR", { path: "/" });
    }

  }, []);

  //used to hide the navbar on selection for burger menu
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

  //used to update language cookie and tab title on language change
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
        <LanguageContext.Provider value={language}>
          <Router>
            <div className="main-container">
              <CustomNavbar setLanguage={setLanguage} />
              <AnimatePresence>
                <AnimatedRoutes />
              </AnimatePresence>
              <Footer />
            </div>
          </Router>
        </LanguageContext.Provider>
      </CookiesProvider>
    </>
  );
}

export default App;
