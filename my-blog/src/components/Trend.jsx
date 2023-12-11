import { v4 as uuidv4 } from "uuid";
import { TREND_DATA } from "./TrendData";
const api = "https://dev.to/api/articles?username=gereltuyamz";
export default function TrendData() {
  return (
    <div className="flex flex-wrap gap-5">
      {TREND_DATA.map((e) => {
        let key = uuidv4();
        return (
          <div
            key={key}
            className="w-72 h-80 rounded-xl bg-cover"
            style={{ backgroundImage: `url(${e.url})` }}
          >
            <div className="pt-44 pl-7 flex flex-col gap-4">
              <button className="py-1 px-3 text-white bg-indigo-500 rounded w-fit ">
                {e.btn}
              </button>
              <h2 className="text-white text-lg">{e.desc}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
