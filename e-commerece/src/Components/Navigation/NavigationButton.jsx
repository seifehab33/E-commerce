import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
import { filterProduct } from "../../features/Slices/ProductSlice";
import { Link } from "react-router-dom";
function NavigationButton() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const dispatch = useDispatch();
  const handleFilteredProduct = (button) => {
    dispatch(filterProduct(button));
  };
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 py-8">
        <div className="relative lg:hidden  "></div>

        {buttons.map((button, index) => (
          <div key={index} className="mb-2 mr-4 flex ">
            <Link to={"/filteredProducts/" + button}>
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="w-full hover:bg-green-900 hover:text-white"
                onClick={() => {
                  handleFilteredProduct(button);
                }}
              >
                {button}
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <div className="bg-green-300 p-2 mx-auto rounded-md w-[85%] md:w-[55%]">
        <h3 className="text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img
          src={clothes}
          className="h-[400px] sm:h-[600px] w-full md:w-[50%] rounded-md shadow-lg shadow-gray-500"
          alt=""
        />
      </div>
    </>
  );
}

export default NavigationButton;
