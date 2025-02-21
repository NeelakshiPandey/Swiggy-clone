import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function OnlineDelivery() {
  const [data, setData] = useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch("/restaurantChains_swiggy.json");
    console.log(response);
    const apiData = await response.json();
    console.log(apiData);
    setData(apiData);
  };
  useEffect(() => {
    fetchTopRestaurant();
  }, []);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurants with Online Delivery in Lucknow
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.map((restaurant, i) => {
          return data.map((restaurant, i) => (
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
          ));
        })}
      </div>
    </div>
  );
}
