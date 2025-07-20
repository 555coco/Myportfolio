import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import Chatty_Card from './Chatty_Card'
import project1 from '../assets/Chatty_Img.png'
import project2 from '../assets/ToBeContinue.png'
import OpenAI_Card from './OpenAI_Card'
import OpenAI_Img from '../assets/OpenAI.png'
import ToBeContinuedCard from './ToBeContinuedCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Project = () => {
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {setLoading(false)},2500)
    return () => clearTimeout(timer)
  },[])

  useGSAP(() => {
    gsap.from(".ShowCard",{
      y:200,
      stagger:0.5
    })
  },[loading])

  if(loading){
    return <Loader />
  }


  return (
      <div className='min-h-screen bg-[#1D232A]'>
          <div className='relative'>
            <h1 className='absolute top-30 text-4xl text-yellow-400 font-bold ml-15'>Protfolio</h1>
          </div>
          <div className='relative top-50 ml-10 flex items-center justify-center gap-5'>
            <Chatty_Card title={"Chatty.HWY"} text={"实时聊天室项目"} btn_text={"View"} img={project1} className="ShowCard"/>
            <OpenAI_Card title={"OpenAI.HWY"} text={"使用OpenAI的API生成ai图像"} btn_text={"View"} img={OpenAI_Img} className="ShowCard"/>
            <ToBeContinuedCard title={"To be continued ..."} text={"努力学习写项目中"} btn_text={"View"} img={project2} className="ShowCard"/>
          </div>
      </div>
  )
}

export default Project
