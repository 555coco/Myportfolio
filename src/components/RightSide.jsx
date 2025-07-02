import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5"
import { RiTailwindCssFill } from "react-icons/ri";
const RightSide = () => {

  const IconsList = [
    {icon:FaHtml5},
    {icon:null},
    {icon:FaCss3},
    {icon:null},
    {icon:IoLogoJavascript},
    {icon:null},
    {icon:FaReact},
    {icon:null},
    {icon:RiTailwindCssFill},
  ]
  
  useGSAP(() => {
    const timer = gsap.timeline()
    timer.from("#square",{
        y:200,
        ease:"power2.out",
        duration:2
    }).fromTo("#text2",{
      opacity:0
    },
  {
    opacity:1
  },">")
  },[])
  return (
      <div className='flex-col items-center justify-center mt-10'>
        <div id="square" className='max-w-md text-center hidden md:flex items-center justify-center mt-11 ml-10'>
            <div className='grid grid-cols-3 gap-2'>
              {IconsList.map((items,i) => {
                  const Icon1 = items.icon
                  return(
                      <div
                          key={i}
                          className={`rounded-3xl aspect-square size-30 flex bg-yellow-300
                          items-center justify-center ${i % 2 ===0 ? "animate-pulse" : ""}`}>
                              {Icon1? <Icon1  className='size-15 text-black'/> : null}
                      </div>
                  )
              })}
            </div>
        </div>
          <div id='text2' className='flex items-center justify-center mt-4 '>
            <p className='text-white'>  I am a very ambitious software developer with a unique background that has prepared me to be a team player who communicates effectively, faces problems analytically and has the technical skills to tackle any challenge.</p>
          </div>
      </div>
  )
}

export default RightSide
