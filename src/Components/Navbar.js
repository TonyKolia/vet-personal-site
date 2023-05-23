import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function CustomNavbar(props) {

    const [expanded, setExpanded] = React.useState(false);

    const toggle = () => {

        let toggler = document.getElementById("navbar-toggler");
        if(getComputedStyle(toggler, null).display !== "none")
            setExpanded(false);
    }

    return (
        <Navbar id="navbar-container" fixed="top" expand="lg" expanded={expanded}>
            
            <Container >
            <Navbar.Brand href="/"><img style={{ "height": "70px" }} src={require("../Images/logo2.png")} /></Navbar.Brand>
                <Navbar.Toggle id="navbar-toggler" onClick={() => setExpanded(oldValue => !oldValue)} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto no-margin">
                        <NavLink onClick={toggle} to="/" className={({ isActive }) => { return isActive ? "active nav-link" : "nav-link" }}>
                            <div style={{ "fontWeight": "600" }}>Αρχική</div>
                        </NavLink>
                        <NavLink onClick={toggle} to="/about" className={({ isActive }) => { return isActive ? "active nav-link" : "nav-link" }}>
                            <div style={{ "fontWeight": "600" }}>Η γιατρός</div>
                        </NavLink>
                        <NavLink onClick={toggle} to="/services" className={({ isActive }) => { return isActive ? "active nav-link" : "nav-link" }}>
                            <div style={{ "fontWeight": "600" }}>Υπηρεσίες</div>
                        </NavLink>
                        <NavLink onClick={toggle} to="/news" className={({ isActive }) => { return isActive ? "active nav-link" : "nav-link" }}>
                            <div style={{ "fontWeight": "600" }}>Νέα</div>
                        </NavLink>
                        <NavLink onClick={toggle} to="/contact" className={({ isActive }) => { return isActive ? "active nav-link" : "nav-link" }}>
                            <div style={{ "fontWeight": "600" }}>Επικοινωνία</div>
                        </NavLink>
                    </Nav>
                    <div onClick={() => props.setLanguage(props.language == "GR" ? "EN" : "GR")} className={props.language == "GR" ? "language language-EN" : "language language-GR"}>{props.language == "GR" ? "ΕΝ" : "ΕΛ"}</div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}