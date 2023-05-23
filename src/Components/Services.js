import React from "react";
import "../CSS/style.css";


export default function Services() {

    return (
        <div className="page-content-container">
            <div className="page-part">
                <img className="front-image" src={require("../Images/services3.png")} />
            </div>
            <div className="page-part for-text">
                <div className="header">
                    <h1>Υπηρεσίες</h1>
                </div>
                <div className="text-container">
                    <br />
                    <h4 className="highlighted-text">Υπηρεσία 1</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h6>
                    <br />
                    <h4 className="highlighted-text">Υπηρεσία 2</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</h6>
                    <br />
                    <h4 className="highlighted-text">Υπηρεσία 3</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h6>
                    <br />
                    <h4 className="highlighted-text">Υπηρεσία 4</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet eu fugiat nulla pariatur.</h6>                    
                </div>
            </div>
        </div>
    );

}