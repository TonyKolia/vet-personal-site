import React from "react";
import "../CSS/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {


    return (

        <>
            <div className="home-container">
                <div className="about-container about-page-image">
                    <div className="contact-blob">
                    </div>
                    <img className="contact-image" src={require("../Images/contact.png")} />
                </div>
                <div className="about-container">
                    <div className="about-text-container contact-container">
                        <h1 className="super-bold">Επικοινωνία</h1>
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
            </div>
        </>

    );

}