import React, { useEffect, useState } from "react";
import { FaBlogger, FaRegRegistered, FaUser } from "react-icons/fa";
import { CiSearch, CiLogin } from "react-icons/ci";
import { HiInformationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useUser } from "../UserContext/UserContext";
import { MdDarkMode } from "react-icons/md";
import { MdSunny } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, setSearch, search, darkMode, setIsDarkMode } = useUser(); // Context'ten user ve logout al
  const [isLogin, setIsLogin] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await logout();
    setIsOpen(false); // Menü açıkken logout yapıldığında menüyü kapat
  };

  useEffect(() => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user, isLogin]);

  return (
    <div className={`w-full h-20 border-b border-black shadow-xl flex items-center justify-around ${darkMode ? "text-white bg-black" : ""}`}>
      <div className="flex gap-3">
        <Link className="flex gap-3" to={"/"}>
          <FaBlogger className={`text-3xl md:text-5xl ${darkMode ? "text-white" : ""}`} />
          <h2 className={`text-4xl font-extrabold hidden md:block ${darkMode ? "text-white" : ""}`}>Blog</h2>
        </Link>
      </div>
      <div className="flex relative">
        <input
          className={`md:w-[350px] outline-none border border-solid border-neutral-500 text-black placeholder-stone-950 rounded ${darkMode ? "bg-white text-white placeholder-black border-gray-600" : ""}`}
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <CiSearch className={`text-2xl font-bold absolute right-0 cursor-pointer ${darkMode ? "text-black" : ""}`} />
      </div>

      <div className="lg:hidden">
        <GiHamburgerMenu onClick={toggleMenu} className={`text-4xl ${darkMode ? "text-white" : ""}`} />
      </div>

      <div className={`hidden lg:flex gap-6 text-xl font-bold items-center ${darkMode ? "text-white" : ""}`}>
        {isLogin ? (
          <>
            <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
              <FaUser />
              <Link to={"/profile"}>
                <a>Profile</a>
              </Link>
            </div>
            <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
              <FaRegRegistered />
              <Link to={"/createpost"}>
                <a>Add Post</a>
              </Link>
            </div>
            <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
              <FaRegRegistered />
              <Link to={"/"}>
                <a onClick={handleLogout}>Logout</a>
              </Link>
            </div>
            <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
              <HiInformationCircle />
              <Link to={"/about"}>
                <a>About Us</a>
              </Link>
            </div>
           {
           !darkMode ?  <MdDarkMode onClick={() => setIsDarkMode(!darkMode)} className={`text-4xl cursor-pointer ${darkMode ? "text-white" : ""}`} />
           :     <MdSunny onClick={() => setIsDarkMode(!darkMode)} className={`text-4xl cursor-pointer`} />
           }
          </>
        ) : (
          <>
            <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
              <CiLogin />
              <Link to={"/login"}>
                <a>Login</a>
              </Link>
            </div>
            <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
              <FaRegRegistered />
              <Link to={"/signup"}>
                <a>Signup</a>
              </Link>
            </div>
            <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
              <HiInformationCircle />
              <Link to={"/about"}>
                <a>About Us</a>
              </Link>
            </div>
            {
           !darkMode ?  <MdDarkMode onClick={() => setIsDarkMode(!darkMode)} className={`text-4xl cursor-pointer ${darkMode ? "text-white" : ""}`} />
           :     <MdSunny onClick={() => setIsDarkMode(!darkMode)} className={`text-4xl cursor-pointer`} />
           }
          </>
        )}
      </div>

      {isOpen && (
        <div className={`absolute top-20 right-5 w-full  border border-black shadow-lg flex flex-col items-center gap-6 p-4 text-xl font-bold lg:hidden ${darkMode ? "bg-black border-gray-600 text-white" : "bg-white"}`}>
          {user ? (
            <>
              <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
                <CiLogin />
                <Link to={"/createpost"}>
                  <a>Add Post</a>
                </Link>
              </div>
              <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
                <FaUser />
                <Link to={"/profile"}>
                  <a>Profile</a>
                </Link>
              </div>
              <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
                <FaRegRegistered />
                <Link to={"/"}>
                  <a onClick={handleLogout}>Logout</a>
                </Link>
              </div>
              <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
                <HiInformationCircle />
                <Link to={"/about"}>
                  <a>About Us</a>
                </Link>
              </div>
              {
           !darkMode ?  <MdDarkMode onClick={() => setIsDarkMode(!darkMode)} className={`text-4xl cursor-pointer ${darkMode ? "text-white" : ""}`} />
           :     <MdSunny onClick={() => setIsDarkMode(!darkMode)} className={`text-4xl cursor-pointer`} />
           }
            </>
          ) : (
            <>
              <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
                <CiLogin />
                <Link to={"/login"}>
                  <a>Login</a>
                </Link>
              </div>
              <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
                <FaRegRegistered />
                <Link to={"/signup"}>
                  <a>Signup</a>
                </Link>
              </div>
              <div className="flex gap-1 items-center hover:text-blue-500 ease-in-out duration-200">
                <HiInformationCircle />
                <Link to={"/about"}>
                  <a>About Us</a>
                </Link>
              </div>
              {
           !darkMode ?  <MdDarkMode onClick={() => setIsDarkMode(!darkMode)} className={`text-4xl cursor-pointer ${darkMode ? "text-white" : ""}`} />
           :     <MdSunny onClick={() => setIsDarkMode(!darkMode)} className={`text-4xl cursor-pointer`} />
           }
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
