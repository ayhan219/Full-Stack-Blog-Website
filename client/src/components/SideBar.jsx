import React from 'react'
import { FaUser } from "react-icons/fa";
import { SiApostrophe } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import {Link} from "react-router-dom"
import { useUser } from '../UserContext/UserContext';


const SideBar = () => {

    const {darkMode,setDarkMode} = useUser();
  return (
    <div className={`w-[12%] h-[92vh] border  border-black flex flex-col justify-between items-center sticky top-0 ${darkMode ? "text-white bg-black" : ""}`}>
        <div className='flex flex-col gap-10 pt-10'>

        <div className='flex gap-4 text-2xl cursor-pointer  hover:text-blue-500 ease-in-out duration-200'>

           <Link className='flex gap-4' to={"/profile"}> <FaUser className='mt-1' />
            <h3 className='hidden lg:block'>Profile</h3></Link>
        </div>
        <div className='flex gap-4 text-2xl cursor-pointer hover:text-blue-500 ease-in-out duration-200'>
            <Link className='flex gap-4' to={"/mypost"}><SiApostrophe className='mt-1' />
            <h3 className='hidden lg:block'>My Post</h3></Link>
        </div>
        <div className='flex gap-4 text-2xl cursor-pointer hover:text-blue-500 ease-in-out duration-200'>
            <Link className='flex gap-4' to={"/settings"}><CiSettings className='mt-1' />
            <h3 className='hidden lg:block'>Settings</h3></Link>
        </div>
        </div>
        <div className='flex flex-col mb-10 gap-4'>
            <div>
                <h4 className='hidden font-bold lg:text-3xl lg:block'>Follow Us</h4>
            </div>
            
        <div className='flex gap-4 cursor-pointer text-xl flex-col lg:flex-row lg:text-3xl items-center'>
        <FaFacebookF />
            <CiInstagram />
            <FaTwitter />
        </div>
        </div>

    </div>
  )
}

export default SideBar