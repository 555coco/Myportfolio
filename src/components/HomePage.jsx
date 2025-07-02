import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Home from '../assets/Home.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const HomePage = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/about")
  }

  useGSAP(() => {
    gsap.from('#para1',{
      y:200,
      duration:1.5,
      ease:"bounce.out"
    })
  },[])

  return (
          <div class="relative flex justify-center items-center min-h-screen overflow-hidden"
               style={{backgroundImage:`url(${Home})`,
                       width:'100%',
                       height:'100%',
                       backgroundSize:'cover',
                       backgroundPosition:'center',
                       backgroundRepeat:'no-repeat'}}>
              <div id="para1" className='text-center'>
                  <div class="m-6 w-full  bg-clip-text text-white text-9xl font-['Dancing_Script']">Hello , I am HWY</div>
                  <div class="m-6 w-full  bg-clip-text text-white text-6xl font-['Dancing_Script']">Welcome to my blog</div> 
              </div>
              <Link to="/about" class="absolute animate-bounce bottom-2 rounded-full w-10 h-10 bg-yellow-300 backdrop-blur-sm hover:bg-white/50 transition-all duration-300 cursor-pointer"
                  onClick={handleClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" w-8 h-8 viewBox="0 0 24 24" fill="#000000"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7l-7 7l-7-7"/></svg>
              </Link>
           </div>
  )
}

export default HomePage
