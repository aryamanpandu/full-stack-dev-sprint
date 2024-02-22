import React from "react";
import "../styles/SearchBar.css"

const SearchBar = () => {
    return (
        <>
            <form action = "">
                <input type = "search" placeholder="Search here ..."/>
                <i className="fa fa-search"></i>
            </form>
        </>
    );
};

export default SearchBar;