import Theme from "./Theme";
import Close from "./Icon/Close";
import { useTheme } from "next-themes";
import ThemeChange from "./ThemeChange";

export default function MobileMenu(props) {
  const { theme, setTheme } = useTheme();
  const closeHandler = () => {
    props.setOpen(false);
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
    <div className="w-screen h-screen top-0 left-0 absolute bg-gray-400 flex justify-end">
      <div className="w-10/12  h-screen p-4 bg-white dark:bg-slate-700 ">
        <div className="flex justify-between">
          <h1 className="text-black dark:text-white">{"<ss />"}</h1>
          <button onClick={closeHandler}>
            <Close />
          </button>
        </div>
        <hr className="mt-4" />
        <ul className="py-4 flex flex-col gap-4 text-black dark:text-white">
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
        <hr className="mt-4" />
        <div className="py-4">
          <div className="flex justify-between">
            <p className="text-black dark:text-white">Switch theme</p>
            <button onClick={ThemeToggle}>
              <ThemeChange />
            </button>
          </div>

          <button className="mt-4 w-full bg-black text-white px-4 py-1.5 rounded-lg font-medium dark:bg-white dark:text-black">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
