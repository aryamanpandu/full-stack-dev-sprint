import React from "react";
import "../styles/FoodCard.css";

//This will be the food cards that appear on the browse page where the search is
const FoodCard = ({ title, image}) => {
    return ( 
        <>
            <div className = "card">
                <img src = {image} alt = {title}/>
                <div className = "container">
                    <p>{title}</p>
                </div>
            </div> 
        </>
    );
};

export default FoodCard;