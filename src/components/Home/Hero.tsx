import React from 'react'
import { Button } from '../ui/button'
import img1 from "../../assets/banner/mobile1.png"
import img2 from "../../assets/banner/mobile2.png"
import img3 from "../../assets/banner/mobile3.png"

export default function Hero() {
  return (
    <div className='grid grid-cols-2 gap-5 max-w-7xl mx-auto '>
        <div className='max-h-svh  flex flex-col justify-center text-white gap-5'>
           
           <h1 className='text-7xl'>Your day-to-day
Online Wallet</h1>
           <h3>Welcome to Telikash! Your personal digital wallet for daily life. With Telikash, you can easily make payments, transfer money, add money, and cash out from your Telikash wallet.</h3>
           <div className='w-2/3 flex justify-between'>
            <a href='https://play.google.com/store/apps/details?id=com.telikashuser.alivestation&pcampaignid=web_share' ><Button className='w-40 h-15 rounded-2xl bg-amber-300 text-cyan-900 hover:bg-cyan-300'>Download</Button></a>
            <a href="#features"><Button className='w-40 h-15 rounded-2xl bg-cyan-900 hover:bg-cyan-300'>Explore More</Button></a>
           </div>
        
        </div>
        <div className='grid py-10 mb-10 grid-cols-3 h-1/2 gap-5'>
           <img className='my-10 rounded-2xl' src={img2} alt="" />
           <img className=' rounded-2xl' src={img3} alt="" />
           <img className='my-10 rounded-2xl' src={img1} alt="" />
        </div>
    </div>
  )
}
