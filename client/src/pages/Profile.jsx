import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import axios from "axios"
import { useUser } from '../UserContext/UserContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const { user,darkMode } = useUser();  
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  let formattedDate;

  if (user === null) {
    window.location.href = "/login"; // Redirects and reloads the page
    return null; // Prevents further rendering of the component
  } else {
    formattedDate = new Date(user.createdAt).toLocaleDateString();
  }

  const handlePassword = async (e) => {
    
    
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/changepassword", {
        id: user.userId,
        password
      }, {
        withCredentials: true
      });

      toast.success("Password changed successfully");
      setPassword("");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  }

  return (
    <div className={`w-full h-screen  flex justify-center items-center ${darkMode ? "bg-black text-black border-b-2 border-t-2 border-white" : "bg-gray-100"}`}>
      {user!==null &&
      <div className='w-[90%] md:w-[60%] lg:w-[50%] h-auto bg-white p-8 rounded-3xl shadow-2xl'>
      {/* Profile Title */}
      <div className='text-center mb-10'>
        <h2 className='text-4xl font-extrabold text-gray-800'>Welcome to Your Profile</h2>
      </div>

      {/* Profile Icon & Username */}
      <div className='flex flex-col justify-center items-center text-center mb-8'>
        <CgProfile className='text-9xl text-gray-600' />
        <h2 className='text-3xl font-semibold text-gray-700 mt-4'>{user.username}</h2>
      </div>

      {/* User Information */}
      <div className='space-y-4'>
        {/* Email */}
        <div className='flex justify-between items-center'>
          <label className='font-semibold text-lg text-gray-700'>Email:</label>
          <p className='text-gray-600 text-xl'>{user.email}</p>
        </div>

        {/* Phone */}
        <div className='flex justify-between items-center'>
          <label className='font-semibold text-lg text-gray-700'>Phone:</label>
          <p className='text-gray-600'>{user?.phone}</p>
        </div>

        {/* Change Password */}
        <div className='flex justify-between items-center'>
          <label className='font-semibold text-lg text-gray-700'>Change Password?</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-gray-300 rounded-lg p-2 w-[60%] focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='flex justify-end'>
          <button onClick={handlePassword} className='bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600'>
            Update Password
          </button>
        </div>
      </div>

      {/* Account Created Date */}
      <div className='mt-10 text-center'>
      <p className='text-gray-700'>Account Created On: <strong>{formattedDate}</strong></p>
      </div>

      {/* Logout Button */}
      <div className='mt-10 text-center'>
        <button className='bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600'>
          Logout
        </button>
      </div>
    </div>
      }
    </div>
  )
}

export default Profile;
