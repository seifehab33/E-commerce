import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigationButton from "../Navigation/NavigationButton";
import ProductSection from "../ProductSection/ProductSection";

function Main() {
  return (
    <div>
      <Slider />
      <NavigationButton />
      <ProductSection />
    </div>
  );
}

export default Main;
