import React from "react";
import filledStar from "../imgs/filled-star.png";
import emptyStar from "../imgs/empty-star.png";

export default function Star(props) {
    
    let starIcon = props.isFilled ? filledStar : emptyStar
    
    return (
        <button
            aria-pressed={props.isFilled}
            aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button"
        >
            <img
                src={starIcon}
                alt={props.isFilled ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    )
}