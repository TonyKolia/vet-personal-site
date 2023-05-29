import React from "react";
import "../CSS/style.css";
import { useNavigate } from "react-router-dom";

export default function ArticlePreview(props) {

    let navigate = useNavigate();

    return (
        <div className="news" onClick={() => navigate("/article")}>
            <img className="news-top-image" src={"https://localhost:7106/api/Test/Image"} />
            <h5 className="highlighted-text news-title">{props.title}</h5>
            <h6 className="accent-color info-text">{props.text}</h6>
        </div>
    );
}
