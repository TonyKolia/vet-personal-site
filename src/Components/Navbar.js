import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function CustomNavbar(props) {

    return (
        <Navbar fixed="top" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img style={{ "height": "60px" }} src={require("../Images/logo.png")} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto no-margin">
                        <NavLink to="/" className={({ isActive }) => { return isActive ? "active nav-link" : "nav-link" }}>
                            <div style={{ "fontWeight": "600" }}>Αρχική</div>
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => { return isActive ? "active nav-link" : "nav-link" }}>
                            <div style={{ "fontWeight": "600" }}>Η γιατρός</div>
                        </NavLink>
                        <NavLink to="/services" className={({ isActive }) => { return isActive ? "active nav-link" : "nav-link" }}>
                            <div style={{ "fontWeight": "600" }}>Υπηρεσίες</div>
                        </NavLink>
                        <NavLink to="/news" className={({ isActive }) => { return isActive ? "active nav-link" : "nav-link" }}>
                            <div style={{ "fontWeight": "600" }}>Νέα</div>
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => { return isActive ? "active nav-link" : "nav-link" }}>
                            <div style={{ "fontWeight": "600" }}>Επικοινωνία</div>
                        </NavLink>
                    </Nav>
                    <div onClick={() => props.setLanguage(props.language == "GR" ? "EN" : "GR")} className={props.language == "GR" ? "language language-EN" : "language language-GR"}>{props.language == "GR" ? "ΕΝ" : "ΕΛ"}</div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}