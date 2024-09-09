import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../UserContext/UserContext";
import { Link, useNavigate } from "react-router-dom";

const MyPost = () => {
  const { user,darkMode } = useUser();
  const navigate = useNavigate();
  const Url = "http://localhost:5000";
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if user is not logged in
      return;
    }

    const userId = user.userId;

    const getPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/post/get/${userId}`
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) {
      getPosts();
    }
  }, [user, navigate]);

  return (
    <div className={`w-full h-screen flex justify-center ${darkMode ? "text-white bg-black" : ""}`}>
      <div className="w-[80%] h-screen ">
        <div className="w-full h-[100px] text-2xl font-bold flex justify-between items-center">
          <h3>Image</h3>
          <h3>Created Date</h3>
          <h3>Title</h3>
          <h3>View Content</h3>
        </div>
        {posts.map((item, index) => (
          <React.Fragment key={index}>
            <hr className={`border border-black ${darkMode ? "border-b-2 border-t-2 border-white" : ""}`} />
            <div className="w-full h-[100px] flex justify-between items-center">
              <img
                className="w-10 h-10 object-cover"
                src={`${Url}${item.image}`}
                alt=""
              />
              <p className="text-xl">{new Date(item.createdAt).toLocaleDateString()}</p>
              <h3 className="text-xl truncate">{item.title}</h3>
              <div className="text-center">
                <Link to={`/content/${item._id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-black">
                    See the Post
                  </button>
                </Link>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MyPost;
