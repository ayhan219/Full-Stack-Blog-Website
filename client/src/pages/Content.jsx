import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useUser } from "../UserContext/UserContext";

const Content = () => {
  const baseUrl = "http://localhost:5000";
  const { id } = useParams();
  const { user, darkMode } = useUser();
  const [data, setData] = useState(null);

  const getPost = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/post/${id}`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  if (!data) {
    return <div className="flex justify-center items-center h-screen text-gray-500">Loading...</div>;
  }

  return (
    <div className={`w-full min-h-screen flex justify-center items-center ${darkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"} p-4`}>
      <div className={`w-full max-w-3xl shadow-lg rounded-lg overflow-hidden ${darkMode ? "bg-white text-black" : "bg-white"}`}>
        <div className="relative h-72">
          <img 
            className="w-full h-full object-cover rounded-t-lg transition-transform duration-500 hover:scale-105" 
            src={`${baseUrl}${data.image}`} 
            alt={data.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold mb-2">{data.title}</h2>
            <p className="text-lg text-gray-600">{new Date(data.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="mb-6">
            <p className="text-base leading-relaxed">{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
