import React from "react";
import "../CSS/style.css";

export default function Footer() {

    return (
        <>
            <div className="footer">
                © {new Date().getFullYear()} Developed by Antonios Koliarakis
            </div>
        </>
    );

}