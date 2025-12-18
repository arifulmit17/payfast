import React from 'react'
import aboutimg from "../../assets/banner/about.png"
import { Button } from '../ui/button'
import { Link } from 'react-router'

export default function AboutSection() {
  return (
    <div className='grid grid-cols-2 gap-5 '>
        <div className='w-full h-full'>
           <img className='rounded-2xl' src={aboutimg} alt="" />
        </div>
 <div className="w-full flex flex-col justify-around text-cyan-800">

  {/* Section Title */}
  <h1 className="text-3xl font-bold">
    Telikash is the Best Digital Wallet
  </h1>

  {/* Intro Paragraph */}
  <p className="text-lg leading-relaxed">
    At Telikash, we believe in the transformative power of technology to connect, innovate, 
    and shape the future. We are a leading-edge technology solutions provider dedicated to 
    empowering businesses and individuals to navigate the complexities of the digital 
    landscape with confidence and creativity.
  </p>

  {/* Vision */}
  <div>
    <h2 className="text-2xl font-semibold mb-1">Our Vision</h2>
    <p className="leading-relaxed">
      To be the trusted partner that unlocks digital potential, fostering a world where 
      technology seamlessly enhances every aspect of life and business.
    </p>
  </div>

  {/* Mission */}
  <div>
    <h2 className="text-2xl font-semibold mb-1">Our Mission</h2>
    <p className="leading-relaxed">
      To deliver innovative, reliable, and user-centric technology solutions that drive growth, 
      efficiency, and exceptional experiences for our clients. We are committed to building 
      lasting relationships through expertise, integrity, and a relentless pursuit of excellence.
    </p>
  </div>

  <Link to={'/about'}  ><Button className='w-30 h-10 rounded-2xl bg-cyan-900 hover:bg-cyan-300'>Explore More</Button> </Link>

  

</div>

    </div>
  )
}
