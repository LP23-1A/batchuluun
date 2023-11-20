import Theme from "@/components/Theme";
import Icon from "./Icon";

export default function Navbar() {
  return (
    <header className="header">
      <div>
        <h1>
          <Icon />
        </h1>
      </div>
      <div className="right--header flex">
        <ul>
          <li>About</li>
          <li>Work</li>
          <li>Testimonails</li>
          <li>Contact</li>
          <li>|</li>
        </ul>
        <button className="right--header--icon">
          <Theme />
        </button>
        <button className="right--header--button">Download CV</button>
      </div>
    </header>
  );
}
