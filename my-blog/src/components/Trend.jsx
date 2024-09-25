import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const api =
  "https://newsapi.org/v2/everything?q=tesla&from=2024-08-25&sortBy=publishedAt&apiKey=b49a6413079a46baad1cb52df8853e59";
// b49a6413079a46baad1cb52df8853e59;
export default function TrendData() {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await axios.get(api);
    setData(res?.data?.articles);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 max-sm:flex max-sm:flex-col">
      {data.slice(30, 34).map((e, index) => {
        console.log(e);
        return (
          <div
            key={index}
            className="w-72 h-80 rounded-xl bg-cover max-sm:w-[400px] max-sm:h-[320px]"
            style={{
              backgroundImage:
                e.urlToImage !== null
                  ? `url(${e.urlToImage})`
                  : `url(/download.jpeg)`,
            }}
          >
            <div className="pt-44 pl-7 flex flex-col gap-4">
              <button className="py-1 px-3 text-white bg-indigo-500 rounded w-fit ">
                {e.author}
              </button>
              <h2 className="text-white text-lg">{e.description}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
