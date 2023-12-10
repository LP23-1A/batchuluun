import image from "@/components/img/hero.png";
import Arrow from "./Arrow";
import Carousel from "carousel";
export default function Hero() {
  return (
    <>
      <Carousel>
        <div>
          <img src={image.src} alt="" />

          <div className="w-[598px] p-10 bg-white rounded-xl flex flex-col gap-3">
            <button className="py-1 px-3 text-white bg-indigo-500 rounded w-fit ">
              Technology
            </button>
            <h1 className=" text-4xl">
              Grid system for better Design User Interface
            </h1>
            <p>August 20, 2022</p>
          </div>
          <div className="flex justify-end">
            <Arrow />
          </div>
        </div>
        <div>
          <img src={image.src} alt="" />

          <div className="w-[598px] p-10 bg-white rounded-xl flex flex-col gap-3">
            <button className="py-1 px-3 text-white bg-indigo-500 rounded w-fit ">
              Technology
            </button>
            <h1 className=" text-4xl">
              Grid system for better Design User Interface
            </h1>
            <p>August 20, 2022</p>
          </div>
          <div className="flex justify-end">
            <Arrow />
          </div>
        </div>
      </Carousel>
    </>
  );
}
