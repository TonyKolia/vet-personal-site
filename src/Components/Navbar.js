import React, {useContext} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { API } from "../Helpers/API";
import { smoothSlideSideways } from "../Helpers/Animations";
import {LanguageContext} from "../App";

export default function CustomNavbar(props) {

    const [expanded, setExpanded] = React.useState(false);
    const [pages, setPages] = React.useState([]);
    const language = useContext(LanguageContext);

    React.useEffect(() => {

        if (language === "" || language === undefined)
            return;
        
        fetch(API.API_URL_GET_ACTIVE_PAGES.replace(":language", language), { method: "GET" }).then(res => {
            
            if(res.status !== 200)
                return;

            return res.json(); 
            
        }).then(response => setPages(response));

    }, [language])

    const toggle = () => {

        let toggler = document.getElementById("navbar-toggler");
        if (getComputedStyle(toggler, null).display !== "none")
            setExpanded(false);
    }

    return (
        <motion.div initial={smoothSlideSideways.initial} animate={smoothSlideSideways.animate} exit={smoothSlideSideways.exit} transition={smoothSlideSideways.transition}>
            <Navbar id="navbar-container" fixed="top" expand="lg" expanded={expanded}>
                <Container >
                    <Navbar.Brand href="/"><img style={{ "height": "70px" }} src={require("../Images/logo2.png")} /></Navbar.Brand>
                    <Navbar.Toggle id="navbar-toggler" onClick={() => setExpanded(oldValue => !oldValue)} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto no-margin">
                            {
                                pages.map(page =>
                                    <NavLink key={page.id} onClick={toggle} to={page.route} className={({ isActive }) => { return isActive ? "active nav-link" : "nav-link" }}>
                                        <div style={{ "fontWeight": "600" }}>{page.menuText}</div>
                                    </NavLink>
                                )
                            }
                        </Nav>
                        <div onClick={() => props.setLanguage(language == "GR" ? "EN" : "GR")} className={language == "GR" ? "language language-EN" : "language language-GR"}>{language == "GR" ? "ΕΝ" : "ΕΛ"}</div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </motion.div>
    );
}