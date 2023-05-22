import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Doctor from "./Components/Doctor";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import News from "./Components/News";
import CustomNavbar from "./Components/Navbar";
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import "./CSS/style.css";

function App() {

  const [cookie, setCookie] = useCookies(['language']);

  const [language, setLanguage] = React.useState("");

  React.useEffect(() => {
    let cookieLanguage = document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if (cookieLanguage !== "" && cookieLanguage !== null)
      setLanguage(cookieLanguage);
    else{
      setLanguage("GR");
      setCookie("language", "GR", { path: "/" });
    }   
  }, []);

  /*

    React.useEffect(() => {

    let navbarLinks = document.getElementsByClassName("nav-link");
    navbarLinks.forEach(link => {
      
    });

  },[]);
   */



  React.useEffect(() => {
    setCookie("language", language, { path: "/" });

    if(language === "GR")
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Doctor />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Router>
      </CookiesProvider>
    </>
  );
}

export default App;
