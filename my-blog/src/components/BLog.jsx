import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const api = "https://dev.to/api/articles";

export default function BlogData() {
  const [data, setData] = useState([]);
  const initData = useRef([]);
  const router = useRouter();
  const view = () => {};
  const getData = async () => {
    let res = await axios.get(api);
    initData.current = res.data;
    setData(res.data);
  };
  const reset = () => setData(initData.current);

  const filter = (tag) => {
    setData(() =>
      initData.current.filter((el) => el.tag_list.some((c) => c.includes(tag)))
    );
    console.log(tag);
  };
  const [add, setAdd] = useState(9);

  const handler = () => {
    setAdd((add) => add + 3);
  };
  useEffect(() => {
    getData(api);
  }, []);
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button className=" text-yellow-400" onClick={reset}>
            All
          </button>
          <button onClick={() => filter("webdev")}>webdev</button>
          <button onClick={() => filter("discuss")}>discuss</button>
          <button onClick={() => filter("watercooler")}>watercooler</button>
          <button onClick={() => filter("top7")}>top7</button>

          <br />
        </div>
        <div>
          <button onClick={view}>View All</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-10 ">
        {data.slice(0, add).map((e) => {
          let key = uuidv4();
          return (
            <div
              className="border-solid border border-gray-300 w-[392px] rounded-xl py-4 flex "
              key={key}
            >
              <div className="p-4 flex  gap-4 flex-col ">
                <div className="w-[360px] h-60 ">
                  <img
                    src={e.social_image}
                    alt=""
                    className="rounded-xl h-60"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1 flex-wrap">
                    {e?.tag_list.map((t) => (
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
          <button className="py-2 px-5 text-gray-500" onClick={handler}>
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}
