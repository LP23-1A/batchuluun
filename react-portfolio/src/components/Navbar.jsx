import { useState } from "react";
import Menu from "./Icon/menu";

import MobileMenu from "./Mobile";
import { useTheme } from "next-themes";
import Theme from "./Theme";
import DarkImg from "./darkImg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const menuHandler = () => {
    setOpen(!open);
  };
  const ThemeToggle = () => {
    if (theme == "dark") {
      setTheme("light");
    }
    if (theme == "light" || theme == "system") {
      setTheme("dark");
    }
  };
  return (
    <header className="flex justify-between py-2 px-28">
      <div>
        <h1 className="text-3xl max-md:text-black dark:text-white">
          {"<ss/>"}
        </h1>
      </div>
      <div className=" flex gap-12  max-sm:gap-4 max-md:hidden">
        <ul className="flex gap-12  max-sm:gap-4 ">
          <li>About</li>
          <li>Work</li>
          <li>Testimonails</li>
          <li>Contact</li>
          <li className="max-sm:hidden">|</li>
        </ul>
        <div className="flex justify-between ">
          <p className="text-black dark:text-white hidden max-sm:block">
            Switch themes
          </p>
          <button onClick={ThemeToggle}>
            {theme === "dark" ? <Theme /> : <DarkImg />}
          </button>
        </div>

        <button className="bg-black text-white py-1 px-4 rounded-md dark:bg-white dark:text-black">
          Download CV
        </button>
      </div>
      <div className="hidden max-md:flex max-sm:hidden">
        <button onClick={menuHandler}>
          <Menu />
        </button>
      </div>
      {open && <MobileMenu setOpen={setOpen} />}
    </header>
  );
}
