import { CAROUSEL_DATA } from "./CarouselData";
import { useState } from "react";
import LeftArrow from "./icon/LeftArrow";
import RightArrow from "./icon/RightArrow";
export default function Hero() {
  const [acTiveIndex, setActiveIndex] = useState(0);

  const Add = () => {
    let acTiveIndex = CAROUSEL_DATA[0];
    if (acTiveIndex === 1) {
      // setActiveIndex(0);
      acTiveIndex++;
      console.log(acTiveIndex);
      return;
    }
    // setActiveIndex((prev) => prev + 1);
    // console.log(acTiveIndex);
  };
  const close = () => {
    if (acTiveIndex == 0) {
      setActiveIndex(2);
      return;
    }
    setActiveIndex((prev) => prev - 1);
    console.log(CAROUSEL_DATA);
  };
  return (
    <div>
      <div className="flex truncate">
        {CAROUSEL_DATA.map((e) => {
          if (e.id === 1) {
            return (
              <div
                className="w-[1216px] h-[600px] bg-cover relative"
                style={{ backgroundImage: `url(${e.url})` }}
              >
                <div className="w-[598px] p-10 bg-white flex flex-col gap-6 rounded-xl top-[320px] absolute left-[20px]">
                  <button className="py-1 px-3 text-white bg-indigo-500 rounded w-fit ">
                    {e.btn}
                  </button>
                  <h1 className="text-4xl">{e.desc}</h1>
                  <p>{e.date}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="flex gap-2 justify-end">
        <div className="w-7 h-3 p-1" onClick={Add}>
          <LeftArrow />
        </div>
        <div className="w-7 h-3 p-1" onClick={close}>
          <RightArrow />
        </div>
      </div>
    </div>
  );
}
