import React from "react";
import Header from "../components/Header";
import "../styles/Home.css"

const Home = () => {
  return (
    <>
      <Header />

      <div className="hero-image">
        <div className="hero-text">
          <p>Foodie <br /> For All Your Foodie Needs</p>
        </div>
      </div>
    </>
  );
};

export default Home;
