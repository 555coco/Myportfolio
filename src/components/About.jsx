import React, { useState } from 'react'
import Loader from './Loader'
import { useEffect } from 'react'
import RightSide from './RightSide'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Timeline } from 'gsap/gsap-core'

const About = () => {
  const [loading,setLoading] = useState(true)
  const timer = gsap.timeline()

  useEffect(() => {
    const timer = setTimeout(() => {setLoading(false)},2500)
    return () => clearTimeout(timer)
  },[])


  useGSAP(() => {
    timer.from("#skills",{
        x:-200,
        ease:"power2.inOut",
        duration:2
    }).fromTo("#text1",{
      opacity:0,
    },
    {
      opacity:1
    },">")
  },[loading])

  if(loading){
    return <Loader />
  }

  
  return (
        <div className='grid grid-cols-2 min-h-screen bg-[#1D232A]'>
          <div className='relative flex-col items-center justify-center'>
            <h1 className='text-4xl font-bold absolute top-20 left-20 text-yellow-300' >About Me</h1>
            <h2 id="text1" className='text-md absolute top-35 left-10 text-white w-9/10' >I am a college student from Sun Yat-sen University(中山大学)。And i am trying my best to be a great software engineer.</h2>
            <h1 className='text-2xl font-bold absolute top-55 left-20 text-yellow-300' >Skills</h1>
            <div id='skills' className='absolute top-67 left-10 flex flex-col gap-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div id='frontend' className='flex flex-col gap-2'>
                  <div className='gap-2'>
                    <p className='text-white font-bold mb-2'>JavaScript:</p>
                    <div className='h-4 w-60 bg-yellow-300 rounded-full'></div>
                  </div>
                  <div className='gap-2'>
                    <p className='text-white font-bold mb-2'>React:</p>
                    <div className='h-4 w-45 bg-blue-300 rounded-full'></div>
                  </div>
                  <div className='gap-2'>
                    <p className='text-white font-bold mb-2'>HTML/CSS:</p>
                    <div className='h-4 w-45 bg-red-300 rounded-full'></div>
                  </div>
                  <div className='gap-2'>
                    <p className='text-white font-bold mb-2'>Tailwind CSS:</p>
                    <div className='h-4 w-35 bg-[#dbffef] rounded-full'></div>
                  </div>
                  <div className='gap-2'>
                    <p className='text-white font-bold mb-2'>Zustand:</p>
                    <div className='h-4 w-35 bg-[#fff097] rounded-full'></div>
                  </div>
                </div>
                <div id='backend' className='flex flex-col gap-2'>
                  <div className='gap-2 ml-4'>
                    <p className='text-white font-bold mb-2'>NodeJS:</p>
                    <div className='h-4 w-40 bg-green-300 rounded-full'></div>
                  </div>
                  <div className='gap-2 ml-4'>
                    <p className='text-white font-bold mb-2'>PostgreSQL:</p>
                    <div className='h-4 w-20 bg-[#fa8072] rounded-full'></div>
                  </div>
                  <div className='gap-2 ml-4'>
                    <p className='text-white font-bold mb-2'>MySQL:</p>
                    <div className='h-4 w-20 bg-[#f3c693] rounded-full'></div>
                  </div>
                  <div className='gap-2 ml-4'>
                    <p className='text-white font-bold mb-2'>GSAP:</p>
                    <div className='h-4 w-30 bg-[#6c5b7b] rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RightSide />
        </div>
  )
}

export default About
