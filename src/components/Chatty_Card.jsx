import React from 'react'


const Card = ({title,text,btn_text,img,className}) => {

    return(
        <div className={`card bg-white w-80 h-90 shadow-sm rounded-3xl ${className}`}>
            <figure>
                <img
                src={img}
                alt="project" />
            </figure>
            <div className="card-body bg-pink-200 rounded-b-3xl h-40">
                <h2 className="card-title text-pink-700">{title}</h2>
                <p className='text-black font-bold'>{text}</p>
                <div className="card-actions justify-end">
                <a href={"https://chatty-hwy.onrender.com/"} target="_blank" rel="noopener noreferrer">
                  <button className="btn bg-white text-pink-700 hover:bg-yellow-300 hover:text-black hover:border-black rounded-xl w-23 border-pink-700 border-2 ">{btn_text}</button>
                </a>
                </div>
            </div>
        </div>
    )
}
export default Card