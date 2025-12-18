import React from 'react'

interface walletCard {
   title:string,
   image:string,
   description:string
}
interface WalletCardProps {
  card?: walletCard;
}


export default function WalletCard({ card }: WalletCardProps) {
    console.log(card);
  return (
    <div className="w-2/3 h-[100] text-cyan-800 hover:bg-cyan-800 hover:text-white bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-center">
        <div className='size-30 rounded-2xl'>
           <img className='size-30 rounded-2xl bg-cover' src={card?.image || ""} alt="" />
        </div>
        
      <h2 className="text-lg font-semibold">{card?.title}</h2>
      <p>{card?.description}</p>

    </div>
  )
}
