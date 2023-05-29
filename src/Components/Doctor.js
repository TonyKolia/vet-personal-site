import React, { useContext } from "react";
import "../CSS/style.css";
import { motion } from "framer-motion";
import { smoothSlideSideways } from "../Helpers/Animations";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../App";
import { API, replaceParams, formatLocation } from "../Helpers/API";


export default function Doctor() {

    const [content, setContent] = React.useState({});
    const location = useLocation();
    const language = useContext(LanguageContext);

    const params = {
        route: formatLocation(location),
        language: language
    }

    React.useEffect(() => {

        if (language === "" || language === undefined || location === undefined)
            return;

        fetch(replaceParams(API.API_URL_GET_PAGE_CONTENT, params), { method: "GET" }).then(res => {
            
            if (res.status !== 200)
                return;
            //do things
            return res.json();

        }).then(response => setContent(response));

    }, [language]);

    return (
        <motion.div className="page-content-container" initial={smoothSlideSideways.initial} animate={smoothSlideSideways.animate} exit={smoothSlideSideways.exit} transition={smoothSlideSideways.transition}>
            <div className="page-part">
                {content.imageName && <img className="front-image" src={API.API_URL_GET_PAGE_IMAGE.replace(":imageName", content?.imageName)} />}
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