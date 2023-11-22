import TechnologyName from "./TechnologyName";
import WorkImg from "./WorkImg";
import WorkIcon from "./Workicon";

export default function Work(props) {
  return (
    <div className="work">
      <div className="flex project">
        <div className="project--img">
          <WorkImg />
        </div>
        <div className="project--description flex">
          <h2>{props.name1}</h2>
          <p>{props.description}</p>
          <div className="Technology--name flex">
            <TechnologyName />
          </div>
          <WorkIcon />
        </div>
      </div>
      <div className="flex project">
        <div className="project--description flex">
          <h2>{props.name1}</h2>
          <p>{props.description}</p>
          <div className="Technology--name flex">
            <TechnologyName />
          </div>
          <WorkIcon />
        </div>
        <div className="project--img">
          <WorkImg />
        </div>
      </div>
      <div className="flex project">
        <div className="project--img">
          <WorkImg />
        </div>
        <div className="project--description flex">
          <h2>{props.name1}</h2>
          <p>{props.description}</p>
          <div className="Technology--name flex">
            <TechnologyName />
          </div>
          <WorkIcon />
        </div>
      </div>
    </div>
  );
}
