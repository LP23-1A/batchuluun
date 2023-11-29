import TechnologyName from "./TechnologyName";
import WorkImg from "./WorkImg";
import WorkIcon from "./Icon/Workicon";

export default function WorkRight() {
  return (
    <div>
      <div className="flex shadow-xl max-md:flex max-md:flex-col-reverse rounded-xl max-md:rounded-2xl">
        <div className="flex flex-col gap-6 p-12 w-1/2 max-md:p-16 max-md:w-full dark:bg-slate-700  rounded-l-2xl max-md:rounded-l-none ">
          <h2 className="text-xl">Fiskil</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="flex flex-wrap gap-4">
            <TechnologyName />
          </div>
          <div>
            <WorkIcon />
          </div>
        </div>
        <div className="p-20 bg-gray-100 max-md:m-auto dark:bg-gray-600 rounded-r-2xl max-md:p-8 max-md:rounded-2xl max-md:rounded-b-none">
          <WorkImg />
        </div>
      </div>
    </div>
  );
}
