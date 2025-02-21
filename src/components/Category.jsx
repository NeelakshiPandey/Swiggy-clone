import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function Category() {
  const [categories, setCategory] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch("/category_swiggy.json"); 
        if (!response.ok) throw new Error("Failed to load categories");
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };
    fetchCategory();
  }, []);

  const prevSlide = () => {
    if (slide <= 0) return;
    setSlide(slide - 3);
  };

  const nextSlide = () => {
    if (slide >= categories.length - 3) return;
    setSlide(slide + 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categories.map((cat, index) => (
          <div
            key={index}
            style={{ transform: `translateX(-${slide * 100}px)` }} 
            className="w-[150px] shrink-0 duration-500 cursor-pointer"
          >
            <img src={`/images/${cat.image}`} alt={cat.path} />
          </div>
        ))}
      </div>
      <hr className="my-6 border-[1px]" />

    </div>
  );
}
