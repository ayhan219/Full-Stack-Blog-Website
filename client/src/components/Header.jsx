import React from "react";
import HeaderItem from "./HeaderItem";
import { useUser } from "../UserContext/UserContext";

const Header = () => {
  const {darkMode} = useUser();
  return (
    <div className={`w-full  p-4 ${darkMode ? "bg-black text-white" : ""} `}>
      <div className={`grid gap-6 md:grid-cols-3 lg:grid-cols-4 ${darkMode ? "bg-black text-white" : ""}`}>
        <HeaderItem />
      </div>
    </div>
  );
};

export default Header;
