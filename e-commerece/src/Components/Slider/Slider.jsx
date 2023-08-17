import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PrevSlide,
  dotSlide,
  nextSlide,
} from "../../features/Slices/SliderSlice";
import { sliderData } from "../../assets/data/dummyData";

function Slider() {
  const sliderindex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  const handleNextSlide = () => {
    dispatch(nextSlide(sliderindex + 1));
  };
  const handlePrevSlide = () => {
    dispatch(PrevSlide(sliderindex - 1));
  };
  const handleDotSlide = (index) => {
    dispatch(dotSlide(index));
  };
  return (
    <>
      <div className="relative pb-4">
        <div>
          {sliderData.map((slide, index) => {
            return (
              <div
                key={slide.id}
                className={
                  parseInt(slide.id) === sliderindex
                    ? "opacity-100 duration-700 ease-in-out scale-100"
                    : "opacity-0 duration-700 ease-in-out scale-100"
                }
              >
                <div>
                  {parseInt(slide.id) === sliderindex && (
                    <img
                      src={slide.img}
                      className="h-[100vh] w-full"
                      alt=""
                      loading="lazy"
                    />
                  )}
                </div>
                <div>
                  <p className="text-white font-inter text-4xl font-bold absolute mx-auto inset-x-1/4 top-44">
                    {parseInt(slide.id) === sliderindex && slide.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex absolute bottom-10 left-[45%]">
          {sliderData.map((dot, index) => {
            return (
              <div className="mr-4" key={index}>
                <div
                  className={
                    index === sliderindex
                      ? "bg-green-300 rounded-full p-3 cursor-pointer"
                      : "bg-white rounded-full p-3 cursor-pointer"
                  }
                  onClick={() => {
                    handleDotSlide(index);
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        <button
          className="absolute top-[50%] rounded-full hover:bg-green-300 duration-200 p-2 right-3 bg-white "
          onClick={handleNextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          onClick={handlePrevSlide}
          className="absolute top-[50%]  rounded-full hover:bg-green-300 duration-200 p-2 left-3 bg-white "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Slider;
