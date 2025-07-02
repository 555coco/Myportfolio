import React from 'react'


const Card = ({title,text,btn_text,img,className}) => {

    return(
        <div className={`card bg-white w-80 shadow-sm rounded-3xl ${className}`}>
            <figure>
                <img
                src={img}
                alt="project" />
            </figure>
            <div className="card-body bg-gray-100 rounded-b-3xl">
                <h2 className="card-title text-gray-400">{title}</h2>
                <p className='text-black font-bold'>{text}</p>
                <div className="card-actions justify-end">
                <a href={""} target="_blank" rel="noopener noreferrer">
                  <button className="btn bg-white text-black hover:bg-yellow-300 hover:text-black rounded-xl w-23 border-black border-2">{btn_text}</button>
                </a>
                </div>
            </div>
        </div>
    )
}
export default Card