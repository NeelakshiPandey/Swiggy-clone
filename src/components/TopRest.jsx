import React from "react";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Card from "./Card";
import { useEffect } from "react";

export default function TopRest() {
  // Restaurant data
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("/restaurantChains_swiggy.json");
    console.log(response)
    const apiData = await response.json();
    console.log(apiData)
    setData(apiData);
  };
useEffect(()=>{fetchTopRestaurant()},[])
const [slide, setSlide] = useState(0);
const prevSlide = () => {
  if (slide <= 0) return;
  setSlide(slide - 2);
};

const nextSlide = () => {
  if (slide >= data.length -4) return;
  setSlide(slide + 2);
};

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Top Restaurants in Lucknow
        </div>
        <div className="flex">
          <div onClick={prevSlide}
          className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer">
            <FaArrowLeft />
          </div>
          <div onClick={nextSlide}
           className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-hidden">
      {data.length > 0 ? (
          data.map((restaurant, i) => (
            <Card
              key={i}
              imageSrc={restaurant.image}
              offer={restaurant.offer}
              title={restaurant.title}
              rating={restaurant.rating}
              minTime={restaurant.minTime}
              maxTime={restaurant.maxTime}
              name={restaurant.name}
              place={restaurant.place}             
            />
          ))
        ) : (
          <p className="text-gray-500">Loading restaurants...</p>
        )}
      </div>
      <hr className="my-3 border-[1px]" />
    </div>
  );
}
