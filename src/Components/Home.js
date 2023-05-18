import React from "react";
import "../CSS/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faFloppyDisk, faXmark, faUser, faCat, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'


export default function Home() {

    return (
        <div className="home-container">
            <div className="welcome-container"></div>

            <div className="welcome-container">
                <div className="circle2">

                </div>
                <div className="circle">

                </div>

                <img className="home-doc-image" src={require("../Images/doctor-home-removebg-preview.png")} />

            </div>
            <div className="welcome-container">
                <div className="home-text-container">
                    <h4 className="highlighted-text">Πάντα δίπλα σε κάθε μικρό μας φίλο</h4>
                    <h1 style={{ "font-weight": "800", "font-size": "4.5rem" }}>Γνωρίστε την Δρ. Ελεάννα Αράπη</h1>
                    <h6 className="accent-color">Κτηνίατρος με ειδίκευση στα μικρά ζώα η οποία, μαζί με την ομάδα της, είναι έτοιμη να σταθεί στο πλάι κάθε ζώου που χρειάζεται βοήθεια.</h6>
                </div>

            </div>
            <div className="welcome-container"></div>
        </div>
    );
}