import React from "react";
import "../CSS/style.css";
import { motion } from "framer-motion"
import ArticlePreview from "./ArticlePreview";
import { smoothSlideSideways } from "../Helpers/Animations";

export default function News() {

    const [articleRows, setArticleRows] = React.useState([]);

    React.useEffect(() => {

        fetch("https://localhost:7106/api/Test", { method: "GET" }).then(res => res.json()).then(response => {
            let tempArticleRows = [];
            while (response.length) {
                tempArticleRows.push(response.splice(0, 2));
            }
            setArticleRows(tempArticleRows);
        });

    }, []);

    return (
        <motion.div className="page-content-container" initial={smoothSlideSideways.initial} animate={smoothSlideSideways.animate} exit={smoothSlideSideways.exit} transition={smoothSlideSideways.transition}>
            <div className="page-part">
                <img className="front-image" src={require("../Images/news2.png")} />
            </div>
            <div className="page-part for-text">
                <div className="header">
                    <h1>Νέα</h1>
                </div>
                <div className="text-container">
                    {
                        articleRows.map((row, index) => {

                            return (
                                <div className="news-row" key={index}>
                                    {
                                        row.map((article, index) => <ArticlePreview title={article.title} text={article.text} key={index} />)
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </motion.div>
    );

}