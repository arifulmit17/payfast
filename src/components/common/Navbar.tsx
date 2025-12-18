import React from 'react'
import { Button } from '../ui/button'
import telikashIcon from "../../assets/telikash.png"
import { Link, useLocation } from 'react-router'

export default function Navbar() {
  const locationPath=useLocation()
  return (
    <div className='h-20 z-30 items-center grid  sticky  top-0 backdrop-blur-lg grid-cols-5 justify-between bg-transparent '>
      <div className='w-30'>
        <img src={telikashIcon} alt="" />
      </div>
      <div className='col-span-3 flex justify-around'>
        <Link to={"/"}>Home</Link>
        {locationPath.pathname=='/'? <a href='#about'>About Us</a>: <Link to={"/about"}>About Us</Link>}
       
        <Link to={"/terms"}>Terms & Conditions</Link>
        <Link to={"/privacypolicy"}>Privacy Policy</Link>
      </div>
      <div className='flex col-start-5 justify-around '>
        {/* <a className='w-30 h-10 border border-cyan-700 hover:bg-cyan-700 hover:text-white flex items-center justify-center rounded-2xl'>
          <h1>Login</h1>
        </a> */}
        <a href='#contact' className='w-30 h-10 border text-white ring-cyan-800 bg-cyan-700 hover:bg-white  hover:text-cyan-800 flex items-center justify-center rounded-2xl'>
          <h1>Contact Us</h1>
        </a>
        
      </div>
    </div>
  )
}
