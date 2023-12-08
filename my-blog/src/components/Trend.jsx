import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const api = "https://dev.to/api/articles?username=gereltuyamz";
export default function TrendData() {
  const [data, setdata] = useState([]);
  const getData = async () => {
    let res = await axios.get(api);
    setdata(res.data);
    console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-wrap gap-5">
      {data.map((e) => {
        let key = uuidv4();
        return (
          <div
            key={key}
            className="w-72 h-80 rounded-xl bg-cover"
            style={{ backgroundImage: `url(${e.social_image})` }}
          >
            <div className="pt-44 pl-7 flex flex-col gap-4">
              <button className="py-1 px-3 text-white bg-indigo-500 rounded w-fit ">
                {e.tags}
              </button>
              <h2 className="text-white text-lg">{e.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
