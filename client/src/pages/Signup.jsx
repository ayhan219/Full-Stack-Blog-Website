import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();


    if(password===password2){
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/signup",
          {
            username,
            email,
            password,
          }
        );
        setSuccess(response.data.message);
        setError(null); 
        toast.success("Account successfully created");
        
        navigate("/");
      } catch (error) {
        setError(error.response ? error.response.data.message : 'An error occurred');
      setSuccess(null);
      toast.error(error.response ? error.response.data.message : 'An error occurred'); 
      }
    }
  };

  return (
    <div className="w-full h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 shadow-2xl bg-white border border-gray-300 rounded-xl">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">Signup</h2>
          <p className="text-gray-600">
            Create your account by filling the information below
          </p>
        </div>
        <hr className="border-gray-300" />

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-xl font-semibold text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter your username"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xl font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-xl font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-xl font-semibold text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={(e) => setPassword2(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Confirm your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-xl font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Signup
          </button>
        </form>

        {/* Divider */}
        <hr className="border-gray-300" />

        {/* Login Link */}
        <div className="text-center text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Signup;
