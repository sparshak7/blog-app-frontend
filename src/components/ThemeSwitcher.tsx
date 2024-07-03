import { useTheme } from "./ThemeProvider";
import { cn } from "../lib/utils";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = ({screen}: {screen?: boolean}) => {
  const { setTheme, theme } = useTheme();
  return (
    <div className={cn("flex gap-1 border border-gray-500 dark:border-border items-center rounded-xl dark:text-secondary-foreground text-black", screen && "hidden md:flex")}>
      <div
        className={cn(
          "transition duration-300 ease-in-out px-3 py-1 rounded-xl cursor-pointer",
          theme == "light" && "bg-gray-800"
        )}
      >
        <Sun
          className={
            theme == "light"
              ? "text-blue-500 transition duration-300 ease-in-out"
              : ""
          }
          onClick={() => setTheme("light")}
        />
      </div>
      <div
        className={cn(
          "transition duration-300 ease-in-out px-3 py-1 rounded-xl cursor-pointer",
          theme == "dark" && "bg-accent"
        )}
      >
        <Moon
          className={
            theme == "dark"
              ? "text-blue-500 transition duration-300 ease-in-out"
              : ""
          }
          onClick={() => setTheme("dark")}
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
