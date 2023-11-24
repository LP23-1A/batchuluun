import TechnologyName from "./TechnologyName";
import WorkImg from "./WorkImg";
import WorkIcon from "./Workicon";

export default function Workleft() {
  return (
    <div>
      <div className="flex shadow-xl">
        <div className="p-12 bg-gray-100 rounded-xl w-1/2">
          <WorkImg />
        </div>
        <div className="flex flex-col gap-6 p-12 w-1/2">
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
