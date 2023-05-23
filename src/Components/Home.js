import React from "react";
import "../CSS/style.css";
import {motion} from "framer-motion"

export default function Home() {

    return (
        <motion.div className="page-content-container" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{x: -50, opacity: 1}} transition={{duration: 1, ease: [0.6, -0.05, 0.01, 0.99]}}>
            <div className="page-part home-part home-image">
                <img className="front-image" src={require("../Images/home2.png")} />
            </div>
            <div className="page-part home-part for-text">
                <div className="text-container">
                    <h4 className="highlighted-text">Πάντα δίπλα σε κάθε μικρό μας φίλο</h4>
                    <h1 className="super-bold">Γνωρίστε την Δρ. Ελεάννα Αράπη</h1>
                    <h6 className="accent-color">Κτηνίατρος με ειδίκευση στα μικρά ζώα η οποία, μαζί με την ομάδα της, είναι έτοιμη να σταθεί στο πλάι κάθε ζώου που χρειάζεται βοήθεια.</h6>
                </div>
            </div>
        </motion.div>
    );
}