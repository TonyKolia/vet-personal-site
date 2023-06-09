import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Doctor from "./Components/Doctor";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import News from "./Components/News";
import Article from "./Components/Article";


export default function AnimatedRoutes() {

    /*
    
    scroll to top on change page
    breaks animation
    
    const { pathname } = useLocation();

    React.useEffect(() => {
  
      window.scrollTo(0,0);
  
    }, [pathname]);
    
    */


    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Doctor />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/article" element={<Article />} />
        </Routes>
    );

}