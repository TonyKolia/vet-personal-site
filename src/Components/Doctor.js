import React, { useContext } from "react";
import "../CSS/style.css";
import { motion } from "framer-motion";
import { smoothSlideSideways } from "../Helpers/Animations";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../App";
import { API, performGet } from "../Helpers/API";


export default function Doctor() {

    const [content, setContent] = React.useState({});
    const location = useLocation();
    const language = useContext(LanguageContext);

    React.useEffect(() => {

        if (language === "" || language === undefined || location === undefined)
            return;

        performGet(API.API_URL_GET_PAGE_CONTENT.replace(":route", location.pathname.replace("/", "")).replace(":language", language)).then(response => {

            setContent(response);

        });


    }, [language]);

    return (
        <motion.div className="page-content-container" initial={smoothSlideSideways.initial} animate={smoothSlideSideways.animate} exit={smoothSlideSideways.exit} transition={smoothSlideSideways.transition}>
            <div className="page-part">
                <img className="front-image" src={content.imageUrl} />
            </div>
            <div className="page-part for-text">
                <div className="header">
                    <h1>{content.title}</h1>
                    <br />
                </div>
                <div className="text-container">
                    {
                        content.headers?.map((header, index) => {

                            return (
                                <div key={index}>
                                    <h4 className="highlighted-text" key={index}>{header}</h4>
                                    <h6 className="accent-color info-text" key={`${index}${index}`}>{content.paragraphs[index]}</h6>
                                    <br />
                                </div>);
                        })
                    }
                </div>
            </div>
        </motion.div>
    );
}