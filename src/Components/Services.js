import React from "react";
import "../CSS/style.css";


export default function Services(){

    return (
        <>
        <div className="home-container">
            <div className="about-container about-page-image">
                <div className="services-img">
                </div>
                <img className="about-doc-image" src={require("../Images/services-removebg-preview.png")} />
            </div>
            <div className="about-container">
                <div className="about-text-container">
                    <h1 className="super-bold">Υπηρεσίες</h1>
                    <br/>
                    <h4 className="highlighted-text">Υπηρεσία 1</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h6>
                    <br/>
                    <h4 className="highlighted-text">Υπηρεσία 2</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</h6>
                    <br/>
                    <h4 className="highlighted-text">Υπηρεσία 3</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h6>
                    <br/>
                    <h4 className="highlighted-text">Υπηρεσία 4</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet eu fugiat nulla pariatur.</h6>


                </div>

            </div>
        </div>
        </>
    );

}