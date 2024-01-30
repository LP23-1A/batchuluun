import React from "react";
import FoodImg from "../../../public/img/unsplash_fdlZBWIP0aM.png";
import image from "../../../public/img/unsplash_fdlZBWIP0aM.png";
const Cards = () => {
  const mockData = [
    {
      img: image,
      name: "Өглөөний хоол",
      price: 4800,
    },
    {
      img: image,
      name: "Өглөөний хоол",
      price: 4800,
    },
    {
      img: image,
      name: "Өглөөний хоол",
      price: 4800,
    },
  ];
  return (
    <div>
      <header>
        {mockData.map((el: any, ind: number) => (
          <div key={el + ind} className="flex flex-col gap-4 ">
            <img src={el.img.src} alt="" className=" w-fit" />

            <div className="flex flex-col gap-[10px]">
              <p className=" text-xl font-semibold">{el.name}</p>
              <p className=" text-green-500 text-lg">{el.price}</p>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
};

export default Cards;
