import image from "@/components/img/hero.png";
import Arrow from "./Arrow";
import { Carousel } from "react-responsive-carousel";
import { CAROUSEL_DATA } from "./CarouselData";
export default function Hero() {
  return (
    <div>
      <Carousel>
        <div className="flex truncate">
          {CAROUSEL_DATA.map((e) => {
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
          })}
        </div>
      </Carousel>
    </div>
  );
}
