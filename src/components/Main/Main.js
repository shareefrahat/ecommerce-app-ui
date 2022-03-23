import "./main.css";
import React from "react";
import Carousel from "../Carousel/Carousel";
import Shop from "../Shop/Shop";

const Main = ({ addToCart }) => {
  return (
    <main>
      <Carousel></Carousel>
      <Shop addToCart={addToCart}></Shop>
    </main>
  );
};

export default Main;
