import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const api = "https://dev.to/api/articles?username=gereltuyamz";

export default function blogData() {
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
            className="border-solid border border-gray-300 w-[392px] rounded-xl py-4"
            key={key}
          >
            <div className="p-4 flex flex-col gap-4 ">
              <div className="w-[360px] h-60 ">
                <img src={e.social_image} alt="" className="rounded-xl h-60" />
              </div>
              <div className="flex flex-col gap-4">
                <button className=" bg-slate-300 text-purple-500 py-1 px-3 rounded-xl w-fit">
                  {e.tags}
                </button>
                <h2 className=" text-2xl">{e.description}</h2>
              </div>
              <div>
                <p>{e.published_timestamp}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
