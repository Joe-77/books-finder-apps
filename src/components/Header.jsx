import React, { useState } from "react";
import { FaMoon, FaBookOpenReader, FaSun } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const [themes, setThemes] = useState("light");

  const darkMode = () => {
    setThemes(() => "dark");
    document.body.style.background = "black";
  };
  const lightMode = () => {
    setThemes("light");
    document.body.style.background = "white";
  };

  return (
    <div className=" bg-slate-900 text-white shadow-2xl w-full py-4 flex items-center justify-between px-5 sm:px-12 text-sm sm:text-xl">
      <Link to={"/"}>
        <div className="flex items-center gap-2 sm:gap-4  w-fit cursor-pointer">
          <FaBookOpenReader />
          <span className=" uppercase tracking-wider ">books finder</span>
        </div>
      </Link>

      <div className=" select-none">
        {themes === "light" ? (
          <FaMoon
            id="dark"
            className=" cursor-pointer"
            onClick={() => darkMode()}
          />
        ) : (
          <FaSun
            id="light"
            className=" cursor-pointer"
            onClick={() => lightMode()}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
