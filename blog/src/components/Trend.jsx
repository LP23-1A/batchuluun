import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const api = "https://dev.to/api/articles?username=gereltuyamz";
// const data = [
//   {
//     url: "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     button: "Technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//   },
// ];

export default function trendData() {
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
