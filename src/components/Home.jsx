import React from "react";
import "../css/Home.css";
import ShowFood from "./homeComponents/ShowFood";
import Slider from "./homeComponents/Slider";


function Home() {
  return (
    <div className="body">
      <div className="body-color">
        <ShowFood />
        {/* <Slider/> */}
      </div>
    </div>
  );
}

export default Home;
