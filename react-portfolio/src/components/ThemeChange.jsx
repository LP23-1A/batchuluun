import { useTheme } from "next-themes";
import DarkImg from "./darkImg";
import Theme from "./Theme";

export default function ThemeChange() {
  const { theme, setTheme } = useTheme();

  const ThemeToggle = () => {
    if (theme == "dark") {
      setTheme("light");
    }
    if (theme == "light" || theme == "system") {
      setTheme("dark");
    }
  };

  return (
    <button onClick={ThemeToggle}>
      {theme === "dark" ? <Theme /> : <DarkImg />}
    </button>
  );
}
