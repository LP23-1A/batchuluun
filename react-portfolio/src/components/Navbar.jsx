import Icon from "./IconAndImg/Icon";
import Menu from "./IconAndImg/menu";
import Theme from "./Theme";

export default function Navbar({ Handler }) {
  return (
    <header className="flex justify-between py-2 px-28 max-sm:flex max-sm:flex-col max-sm:p-4 max-sm:gap-4 ">
      <div>
        <h1>
          <Icon />
        </h1>
      </div>
      <div className=" flex gap-12 max-sm:block max-sm:gap-4 max-sm:flex max-sm:flex-col max-md:hidden">
        <ul className="flex gap-12 max-sm:block max-sm:flex max-sm:flex-col max-sm:gap-4 ">
          <li>About</li>
          <li>Work</li>
          <li>Testimonails</li>
          <li>Contact</li>
          <li className="max-sm:hidden">|</li>
        </ul>
        <button onClick={Handler}>
          <Theme />
        </button>
        <button className="bg-black text-white py-1 px-4 rounded-md ">
          Download CV
        </button>
      </div>
      <div className="hidden max-md:flex max-sm:hidden">
        <button>
          <Menu />
        </button>
      </div>
    </header>
  );
}
