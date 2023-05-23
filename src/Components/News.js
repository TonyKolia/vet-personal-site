import React from "react";
import "../CSS/style.css";

export default function News() {

    return (
        <>
            <div className="page-content-container">
                <div className="page-part">
                    <img className="front-image" src={require("../Images/news2.png")} />
                </div>
                <div className="page-part for-text">
                <div className="header">
                    <h1>Νέα</h1>
                </div>
                <div className="text-container">
                    <div className="news-row">
                        <div className="news">
                            <img className="news-top-image" src={require("../Images/news-placeholder.png")} />
                            <h5 className="highlighted-text news-title">Τίτλος πρώτου νέου</h5>
                            <h6 className="accent-color info-text">velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                        </div>
                        <div className="news">
                            <img className="news-top-image" src={require("../Images/news-placeholder.png")} />
                            <h5 className="highlighted-text news-title">Τίτλος δεύτερου νέου</h5>
                            <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </h6>
                        </div>
                    </div>
                    <div className="news-row">
                        <div className="news">
                            <img className="news-top-image" src={require("../Images/news-placeholder.png")} />
                            <h5 className="highlighted-text news-title">Τίτλος τρίτου νέου</h5>
                            <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h6>
                        </div>
                        <div className="news">
                            <img className="news-top-image" src={require("../Images/news-placeholder.png")} />
                            <h5 className="highlighted-text news-title">Τίτλος τέταρτου νέου</h5>
                            <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h6>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );

}