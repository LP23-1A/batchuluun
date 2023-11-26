import Icon from "./Icon";
import Theme from "./Theme";

export default function Navbar({ Handler, dark }) {
  return (
    <header className="flex justify-between py-1 px-28">
      <div>
        <h1>
          <Icon />
        </h1>
      </div>
      <div className=" flex gap-12">
        <ul className="flex gap-12">
          <li>About</li>
          <li>Work</li>
          <li>Testimonails</li>
          <li>Contact</li>
          <li>|</li>
        </ul>
        <button onClick={Handler} className="bg-dark">
          <Theme />
        </button>
        <button className="bg-black text-white py-1 px-4 rounded-md">
          Download CV
        </button>
      </div>
    </header>
  );
}
