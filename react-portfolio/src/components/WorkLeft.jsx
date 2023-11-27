import TechnologyName from "./TechnologyName";
import WorkImg from "./WorkImg";
import WorkIcon from "./IconAndImg/Workicon";

export default function Workleft() {
  return (
    <div>
      <div className="flex shadow-xl max-md:flex max-md:flex-col ">
        <div className="p-12 bg-gray-100 rounded-xl max-md:m-auto">
          <WorkImg />
        </div>
        <div className="flex flex-col gap-6 p-12 w-1/2 max-md:p-16 max-md:w-full">
          <h2 className="text-xl">Fiskil</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="flex flex-wrap gap-2">
            <TechnologyName />
          </div>
          <div>
            <WorkIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
