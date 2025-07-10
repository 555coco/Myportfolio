import React from 'react'
import { TfiThemifyFavicon } from "react-icons/tfi";

const Loader = () => {
  return (
    <div className='min-h-screen flex justify-center items-center gap-2 text-yellow-300 bg-[#1D232A]'>
        <TfiThemifyFavicon className='size-8 animate-bounce'/>
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
        <span className="loading loading-dots loading-xl"></span>
    </div>
  )
}

export default Loader
