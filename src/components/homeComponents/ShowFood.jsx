import React from "react";
import "../../css/ShowFood.css";
import Slider from "./Slider";


const ShowFood = () => {
  return (
    <div className="show-food-body">
      <div className="show-food-text">
        <p className="underline">Contact Web food | Us</p>
        <p className="text-header">Digital</p>
        <p className="text-header-two">Menu</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis soluta
          cum vitae, explicabo reiciendis illo maxime at ab libero unde.
        </p>
        <div className="">
          <button class="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 mt-8">
            Sign Up
          </button>
        </div>
      </div>
      <div className="show-food-image">
        <Slider />
      </div>
    </div>
  );
};

export default ShowFood;
