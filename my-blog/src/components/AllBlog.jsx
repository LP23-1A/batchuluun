import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
const api =
  "https://newsapi.org/v2/everything?q=tesla&from=2024-08-25&sortBy=publishedAt&apiKey=b49a6413079a46baad1cb52df8853e59";
export default function AllBlog() {
  const [data, setData] = useState([]);
  const initData = useRef([]);
  const getData = async () => {
    let res = await axios.get(api);
    // initData.current = res.data;
    setData(res.data.articles);
  };
  useEffect(() => {
    getData(api);
  }, []);
  console.log(data, "al");
  return (
    <div>
      <div className="flex flex-wrap gap-5 mt-10 max-sm:flex max-sm:flex-col ">
        {data.map((e) => {
          let key = uuidv4();
          return (
            <div
              className="border-solid border border-gray-300 w-[392px] rounded-xl py-4"
              key={key}
            >
              <div className="p-4 flex flex-col gap-4 ">
                <div className=" h-60 ">
                  <img
                    src={e?.urlToImage}
                    alt=""
                    width={360}
                    height={200}
                    className="rounded-xl h-60"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1">
                    {e?.tag_list.slice(0, 1).map((t) => (
                      <button className=" bg-slate-300 text-purple-500 py-1 px-3 rounded-xl w-fit">
                        {t}
                      </button>
                    ))}
                  </div>

                  <h2 className=" text-2xl">{e.description}</h2>
                </div>
                <div>
                  <p>{e.published_timestamp}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="border-solid border-slate-900 border text-center m-auto w-fit rounded">
          <button className="py-2 px-5 text-gray-500">Load more</button>
        </div>
      </div>
    </div>
  );
}
