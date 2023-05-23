import React from "react";
import "../CSS/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'
import {motion } from "framer-motion"

export default function Contact() {


    return (
        <motion.div className="page-content-container" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{x: -50, opacity: 1}} transition={{duration: 1, ease: [0.6, -0.05, 0.01, 0.99]}}>
            <div className="page-part">
                <img className="front-image" src={require("../Images/contact2.png")} />
            </div>
            <div className="page-part contact-page for-text">
                <div className="header">
                    <h1>Επικοινωνία</h1>
                    <br />
                </div>
                <div className="text-container ">
                    <div className="contact-info-container">
                        <div className="contact-icons-container">
                            <h4 className="highlighted-text"><FontAwesomeIcon icon={faPhone} /></h4>
                            <h4 className="highlighted-text"><FontAwesomeIcon icon={faEnvelope} /></h4>
                            <h4 className="highlighted-text"><FontAwesomeIcon icon={faLocationDot} /></h4>
                            <h4 className="highlighted-text"><FontAwesomeIcon icon={faClock} /></h4>
                        </div>
                        <div className="contact-information-container">
                            <div className="contact-record"><h6 className="accent-color info-text">+30 691 2331 123</h6></div>
                            <div className="contact-record"><h6 className="accent-color info-text">email@email.com</h6></div>
                            <div className="contact-record"><h6 className="accent-color info-text">Διεύθυνση 12, Πόλη, ΤΚ, Νομός</h6></div>
                            <div className="contact-record"><h6 className="accent-color info-text">Δευτέρα - Παρασκευή, 08:00 - 16:00</h6></div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );

}