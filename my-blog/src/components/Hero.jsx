import { v4 as uuidv4 } from "uuid";
import { CAROUSEL_DATA } from "./CarouselData";
import { useState } from "react";
import Arrow from "./LeftArrow";
import LeftArrow from "./LeftArrow";
import RightArrow from "./Rightaroow";
import { Carousel } from "react-responsive-carousel";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState();
  const upDateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= CAROUSEL_DATA.length) {
      newIndex = CAROUSEL_DATA.length;
    }
    setActiveIndex(newIndex);
  };
  return (
    <div
      className="overflow-hidden flex"
      style={{ transform: `translate(-${activeIndex * 100})%` }}
    >
      <Carousel className=" overflow-hidden flex">
        {/* {CAROUSEL_DATA.map((e) => {
          let key = uuidv4();
          return ( */}
        <div
          className="w-[1216px] h-[600px] bg-cover relative "
          style={{
            backgroundImage: `url(https://www.figma.com/file/UXeZt3KeSuj2lmOqng6jei/image/eb4faad24394e91108e011b0d07581596959713b?fuid=1285439702974197633)`,
          }}
          // key={key}
        >
          <div className="w-[598px] p-10 bg-white flex flex-col gap-6 rounded-xl top-[320px] absolute left-[20px]">
            <button className="py-1 px-3 text-white bg-indigo-500 rounded w-fit ">
              Technology
            </button>
            {/* <h1 className="text-4xl">{e.desc}</h1>
                <p>{e.date}</p> */}
          </div>
        </div>
        <div
          className="w-[1216px] h-[600px] bg-cover relative"
          style={{
            backgroundImage: `url(https://www.figma.com/file/UXeZt3KeSuj2lmOqng6jei/image/eb4faad24394e91108e011b0d07581596959713b?fuid=1285439702974197633)`,
          }}
          // key={key}
        >
          <div className="w-[598px] p-10 bg-white flex flex-col gap-6 rounded-xl top-[320px] absolute left-[20px]">
            <button className="py-1 px-3 text-white bg-indigo-500 rounded w-fit ">
              Technology
            </button>
            {/* <h1 className="text-4xl">{e.desc}</h1>
                <p>{e.date}</p> */}
          </div>
        </div>
        {/* );
        })} */}
        <div className="flex justify-end">
          <div
            onClick={() => {
              upDateIndex(activeIndex - 1);
            }}
            className="w-5 h-3"
          >
            <LeftArrow />
          </div>
          <div
            onClick={() => {
              upDateIndex(activeIndex + 1);
            }}
            className="w-5 h-3 "
          >
            <RightArrow />
          </div>
        </div>
      </Carousel>
    </div>
  );
}
