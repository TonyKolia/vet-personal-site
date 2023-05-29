import React from 'react'

export default function TextContent(props) {
    return (
        <>
            <h4 className="highlighted-text">{props.header}</h4>
            <h6 className="accent-color info-text">{props.text}</h6>
            <br />
        </>
    )
}
