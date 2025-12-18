import React from 'react'
import telikashIcon from "../../assets/telikash.png"
import simimg from "../../assets/banner/sim.png"
export default function CardsSection() {
  return (
    <div>
        <h1 className="text-5xl w-full text-center my-10">
          PAY IN STYLE, ANYWHERE
        </h1>
         <div className='w-2/3 mx-auto flex justify-between gap-10'>
        
        <div className='w-90 h-100 transition-transform duration-300 ease-out 
     hover:scale-105  flex flex-col justify-between  rounded-2xl bg-linear-to-r/hsl from-indigo-500 to-teal-400'>
           <div className='h-1/3 flex  justify-center items-center'>
            <img className='size-20' src={simimg} alt="" />
           </div>
           <div>
            <img src={telikashIcon} alt="" />
           </div>
           <div className='h-1/4 text-center text-white flex flex-col items-center justify-around'>
            <h1 className='text-xl font-bold'>Sunshine Beach</h1>
           <p>Chill, unplugged and good vibes</p>
           </div>
           
        </div>
        <div className='w-90 h-100 transition-transform duration-300 ease-out 
     hover:scale-105 flex flex-col justify-between  rounded-2xl bg-linear-65 from-purple-700 to-pink-500'>
           <div className='h-1/3 flex  justify-center items-center'>
            <img className='size-20' src={simimg} alt="" />
           </div>
           <div>
            <img src={telikashIcon} alt="" />
           </div>
           <div className='h-1/4 text-center text-white flex flex-col items-center justify-around'>
            <h1 className='text-xl font-bold'>Purple Haze</h1>
           <p className=' '>Lively, vibrant and full of energy</p>
           </div>
           
        </div>
        <div className='w-90 h-100 transition-transform duration-300 ease-out 
     hover:scale-105 flex flex-col justify-between  rounded-2xl bg-linear-to-r/hsl from-teal-700 to-teal-500'>
           <div className='h-1/3 flex  justify-center items-center'>
            <img className='size-20' src={simimg} alt="" />
           </div>
           <div>
            <img src={telikashIcon} alt="" />
           </div>
           <div className='h-1/4 text-center text-white flex flex-col items-center justify-around'>
            <h1 className='text-xl font-bold'>starlit Horizon</h1>
           <p>Calm, composed and quiet confidence</p>
           </div>
           
        </div>
        
    </div>
    </div>
   
  )
}
