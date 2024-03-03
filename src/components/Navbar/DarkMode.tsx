import {useEffect,useState} from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
    const data=localStorage.getItem("theme")
  const [theme, setTheme] =useState<string>(data?data:"light");
  const element = document.documentElement; // access to html element
 
  // set theme to localStorage and html element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun onClick={() => setTheme("light")} className="text-2xl  sm:ml-auto " />
      ) : (
        <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl sm:ml-auto " />
      )}
    </>
  );
};

export default DarkMode;
