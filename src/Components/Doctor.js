import React from "react";
import "../CSS/style.css";

export default function Doctor(){

    return (
        <div className="home-container">
            <div className="about-container about-page-image">
                <div className="blob2">
                </div>
                <img className="about-doc-image" src={require("../Images/doc-doc-page-removebg-preview.png")} />
            </div>
            <div className="about-container">
                <div className="about-text-container">
                    <h1 className="super-bold">Η γιατρός</h1>
                    <br/>
                    <h4 className="highlighted-text">Βασικές πληροφορίες</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                    <br/>
                    <h4 className="highlighted-text">Σπουδές</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h6>
                    <br/>
                    <h4 className="highlighted-text">Περιστατικά</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h6>


                </div>

            </div>
        </div>
    );
}