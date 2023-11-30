import { useState } from "react";
import Menu from "./Icon/menu";

import MobileMenu from "./Mobile";
import { useTheme } from "next-themes";
import ThemeChange from "./ThemeChange";

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
    <header className="flex justify-between py-2 px-28 max-sm:flex max-sm:flex-col max-sm:p-4 max-sm:gap-4 ">
      <div>
        <h1 className="text-3xl max-md:text-black dark:text-white">
          {"<ss/>"}
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
        <button onClick={ThemeToggle}>
          <ThemeChange />
        </button>
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
