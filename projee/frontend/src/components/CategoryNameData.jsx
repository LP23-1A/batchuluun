import Eye from "@/icon/Eye";
import Leading from "@/icon/Leading";
import useSWR from "swr";

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const CategoryNameData = () => {
  const apiUrl = "http://localhost:8000/categorys";

  const { data, error } = useSWR(apiUrl, fetchData);

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  const categoryData = JSON.stringify(data);
  return (
    <div>
      {data.map((el, ind) => {
        return (
          <div className="flex gap-2 justify-between" key={ind}>
            <div className="flex gap-2">
              <Eye />
              <p>{el.name}</p>
            </div>
            <Leading />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryNameData;
