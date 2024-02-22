import React from "react";
import Header from "../components/Header";
import "../styles/Browse.css";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";

const foodCardData = [["Indian", "indian_food_image.jpg"], ["Chinese" , "Chinise-food.jpg"], 
["Desserts" , "dessserts_food_image.jpg"], ["Mediterranean" , "mediterranean_food_image.jpg"], ["Pizza" , "pizza_food_image.jpg"]];


const Browse = () => {
    return(
        <>
        <div className="body">
            <Header />
                
                <div className="food-card-container">
                    {foodCardData.map(([key, value]) => (
                        <FoodCard title={key} image={`../public/assets/${value}`} />
                    ))}
                </div>
        </div>
            
            
        </>
    );
}; 

export default Browse;
