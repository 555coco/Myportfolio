import React from 'react'   
import { SiOpenai } from "react-icons/si";

const Card = ({title,text,btn_text,img,className}) => {

    return(
        <div className={`card bg-white w-80 h-90 shadow-sm rounded-3xl ${className}`}>
            <figure>
                <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#A557FF] to-[#6B21A8] w-full h-46">
                    <div className='flex justify-center items-center aspect-square rounded-xl bg-purple-800 p-3'>
                        <SiOpenai className='text-5xl'/>
                    </div>
                    <div className='font-bold text-xl mt-6'>Welcome To OpenAI.HWY</div>
                </div>
            </figure>
            <div className="card-body bg-purple-950 rounded-b-3xl h-40">
                <h2 className="card-title text-white/90">{title}</h2>
                <p className='text-white/70 font-bold'>{text}</p>
                <div className="card-actions justify-end">
                <a href={"https://ai-image-generate-five.vercel.app/"} target="_blank" rel="noopener noreferrer">
                  <button className="btn bg-white text-purple-700 hover:bg-yellow-300 hover:text-black hover:border-black rounded-xl w-23 border-purple-600 border-2 ">{btn_text}</button>
                </a>
                </div>
            </div>
        </div>
    )
}
export default Card