import Hero from "@/components/heroJson";
import data from "../data/product.json";
export default function Home() {
  return (
    <div className="w-80 h-80 bg-zinc-100 flex flex-col">
      <input className="" placeholder="Search"></input>
      <div className="flex">
        <input type="checkbox" className="flex "></input>
        <p>only show products stock </p>
      </div>
      <div className="flex gap-4 justify-around">
        <Hero text="Name" />
        <Hero text="price" />
      </div>

      <div>
        {data.map((el) => {
          return (
            <div className="flex gap-3 justify-around">
              <h1> {el.name}</h1>
              <p>{el.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
