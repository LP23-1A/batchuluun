import HomeIcon from "@/icon/Home";
import axios from "axios";
import { useEffect, useState } from "react";
const userId = JSON.parse(localStorage.getItem("id"));
const apiUrl = `http://localhost:8000/transactions?user_id=${userId.id}`;
export default function RecordSection() {
  const [data, setData] = useState([]);
  const handler = async () => {
    const res = await axios.get(apiUrl);
    setData(res.data);
  };
  useEffect(() => {
    handler();
  });
  return (
    <div className="flex flex-col gap-3 rounded-3xl">
      {data.map((el, ind) => {
        return (
          <div
            className=" bg-white flex justify-between px-4 py-2 items-center rounded-2xl"
            key={ind}
          >
            <div className="flex gap-3 items-center">
              <input type="checkbox" />
              <div className=" bg-blue-800 items-center flex justify-center rounded-3xl w-8 h-8">
                <HomeIcon />
              </div>
              <div>
                <p>{el.name}</p>
                <p>{el.createdat.slice(11, 16)}</p>
              </div>
            </div>
            <div>
              <p className=" text-green-500">{el.amount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
