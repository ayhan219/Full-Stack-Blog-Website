import React, { useState } from "react";
import { BsFilePostFill } from "react-icons/bs";
import axios from "axios";
import { useUser } from "../UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { user } = useUser();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handlePost = async (e) => {
    e.preventDefault();

    const userId = user.userId;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("authorId", userId);
    formData.append("image", image);
    console.log(content);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      navigate("/");

      
    } catch (error) {
      console.error("Upload Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[40%] h-auto bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="flex justify-center items-center gap-3 text-3xl font-semibold pb-6">
          <BsFilePostFill className="text-blue-500" />
          <h2>Add Post</h2>
        </div>

        {/* Divider */}
        <hr className="border border-gray-300 mb-6" />

        {/* Form */}
        <form onSubmit={handlePost} className="space-y-6">
          {/* Title */}
          <div className="flex flex-col">
            <label className="text-lg font-medium pb-2">Title</label>
            <input
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <label className="text-lg font-medium pb-2">Content</label>
            <textarea
              value={content}
              className="border border-gray-300 rounded-lg p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post content"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col">
            <label className="text-lg font-medium pb-2">Upload Image</label>
            <input
              type="file"
              name="image"
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer"
              accept="image/*"
              onChange={handleImage}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
