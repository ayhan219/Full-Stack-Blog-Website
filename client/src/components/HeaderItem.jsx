import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";
import { useUser } from "../UserContext/UserContext";

const HeaderItem = () => {
  const [posts, setPosts] = useState([]);
  const baseUrl = "http://localhost:5000";

  const { search,darkMode,setDarkMode } = useUser();

  const getAllPosts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/post`);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchedPost = async () => {
    if (!search) return;
    try {
      const response = await axios.get(`${baseUrl}/api/post/search?query=${search}`);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (search) {
      getSearchedPost();
    } else {
      getAllPosts();
    }
  }, [search]);

  return (
    <>
      {posts.map((item, index) => (
        <div
          key={index}
          className={`max-w-md bg-white rounded-lg shadow-2xl overflow-hidden `}
        >
          <div className={`p-6 text-center ${darkMode ? "bg-black text-white" : ""}`}>
            <div>
              <h2 className="text-4xl font-extrabold mb-4 text-inherit">
                {item.title}
              </h2>
              <h3 className="text-blue-600 text-xl">
                Published by: {item.author.username}
              </h3>
            </div>

            <hr className="border-gray-300 mb-4" />
            <Link to={`/content/${item._id}`}>
              <img
                className="w-full h-[200px] rounded-md hover:scale-95 ease-in-out duration-100"
                src={`${baseUrl}${item.image}`}
                alt={item.title}
              />
            </Link>
            <hr className="border-gray-300 my-4" />
            <p className="text-lg font-medium text-inherit mb-6">
              {item.content}
            </p>
            <Link
              to={`/content/${item._id}`}
              className="inline-flex items-center gap-2 text-xl font-bold text-blue-600 hover:text-blue-800 ease-in-out duration-200"
            >
              <p>See Content</p>
              <FaArrowAltCircleRight className="text-2xl" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default HeaderItem;
