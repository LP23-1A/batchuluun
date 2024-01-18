import HomeIcon from "@/icon/Home";
import useSWR from "swr";
const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function RecordSection() {
  const apiUrl = "http://localhost:8000/transactions";

  const { data, error } = useSWR(apiUrl, fetchData);

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  const categoryData = JSON.stringify(data);
  console.log(categoryData);
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
                <p>{el.createdat}</p>
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
