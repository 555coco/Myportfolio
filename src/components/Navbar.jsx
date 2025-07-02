import React from 'react'
import { FaHome } from "react-icons/fa"
import { IoMdPerson } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex w-full fixed h-16 z-10 bg-black/50 backdrop-blur-sm items-center text-2xl text-white shadow-2xl italic">
      <p className="font-['Dancing_Script'] text-3xl">HWY.
        <span className="text-yellow-300 shadow">Portfolio</span>
      </p>
      <div className='flex ml-auto gap-6 mr-2'>
          <Link to='/' className='flex rounded items-center justify-center h-16 w-20 group transition-all duration-200 cursor-pointer'>
            <FaHome className='block group-hover:hidden'></FaHome>
            <span className='hidden group-hover:block text-yellow-300'>Home</span>
          </Link>
          <Link to="/about" className='flex rounded items-center justify-center h-16 w-20 group transition-all cursor-pointer'>
            <IoMdPerson className='block group-hover:hidden'></IoMdPerson>
            <span className='hidden group-hover:block text-yellow-300'>About</span>
          </Link>
          <Link to="/project" className='flex rounded items-center justify-center h-16 w-20 group transition-all cursor-pointer'>
            <FaFolderOpen className='block group-hover:hidden'></FaFolderOpen>
            <span className='hidden group-hover:block text-yellow-300'>Project</span>
          </Link>
          <Link to="contact" href='#contact' className='flex rounded items-center justify-center h-16 w-20 group transition-all cursor-pointer'>
            <HiOutlineMail className='block group-hover:hidden'></HiOutlineMail>
            <span className='hidden group-hover:block text-yellow-300'>Email</span>
          </Link>
      </div>
    </div>
  )
}

export default Navbar
