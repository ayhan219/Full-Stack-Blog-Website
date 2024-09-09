import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import {useUser} from "../UserContext/UserContext"

const Login = () => {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const {login,darkMode} = useUser()
  const navigate = useNavigate();

  const handleLogin = async(e)=>{
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login",{
        username,
        password
      },{
        withCredentials: true,
      }
    )
     
      login();

      setSuccess(response.data.message);
        toast.success("Successfully Logined");
        navigate("/");
    } catch (error) {
      toast.error(error.response ? error.response.data.message : 'An error occurred');
      console.log(error);
      
    }
  }

  return (
    <div className={`w-full h-[80vh] flex items-center justify-center  ${darkMode ? "bg-black border-t-2 border-b-2 border-white ": "bg-gray-100 "}`}>
      <div className={`w-full max-w-md p-8 space-y-6 shadow-2xl bg-white border border-gray-300 rounded-xl ${darkMode ? "bg-black ": ""}`}>
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">Login</h2>
          <p className="text-gray-600">Please enter your credentials to login</p>
        </div>
        <hr className="border-gray-300" />

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-xl font-semibold text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e)=>setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-xl font-semibold text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-xl font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            Login
          </button>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
        </form>

        {/* Divider */}
        <hr className="border-gray-300" />

        {/* Signup Link */}
        <div className="text-center text-gray-700">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
