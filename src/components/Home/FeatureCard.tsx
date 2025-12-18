import React from 'react'
interface FeatureCard {
   title:string,
   image:string,
   description:string
}
interface FeatureCardProps {
  card: FeatureCard;
}
export default function FeatureCard({ card }: FeatureCardProps) {
  return (
    <div className="w-100 h-60 text-cyan-800 bg-white hover:bg-cyan-800 hover:text-white shadow-md rounded-xl p-5 flex gap-3 items-center justify-center">
        <div className='w-20 h-20 rounded-2xl'>
           <img className='w-20 h-20 rounded-2xl bg-cover' src={card.image} alt="" />
        </div>
       <div className='w-2/3 flex flex-col'>
        <h2 className="text-lg font-semibold">{card.title}</h2>
      <p>{card.description}</p>

        </div> 
      
    </div>
  )
}