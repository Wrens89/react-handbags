import React from "react";

function Tile({ img, imgDescription, title, children }) {
    return (
        <selection>
            {img && <img src={img} alt={imgDescription}/>}
            <h2>{title}</h2>
            {children}
        </selection>
    );
}

export default Tile;