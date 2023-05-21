import React from "react";
import "../CSS/style.css";
import  cookie from 'react-cookie';

export default function Doctor() {

    React.useEffect(() => {

        let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    },[]);

    return (
        <div className="page-content-container">
            <div className="page-part page-image">
                <div className="about-blob">
                </div>
                <img className="front-image" style={{"borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%"}} src={require("../Images/doc-removebg-preview.png")} />
            </div>
            <div className="page-part for-text">
                <div className="header">
                    <h1>Η γιατρός</h1>
                    <br />
                </div>
                <div className="text-container">
                    
                    <h4 className="highlighted-text">Βασικές πληροφορίες</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                    <br />
                    <h4 className="highlighted-text">Σπουδές</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h6>
                    <br />
                    <h4 className="highlighted-text">Περιστατικά</h4>
                    <h6 className="accent-color info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h6>
                </div>

            </div>
        </div>
    );
}