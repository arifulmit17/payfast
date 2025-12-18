import React from 'react'
import bg from "../assets/banner/banner-bg.png";
import aboutimg from "../assets/banner/about.png"

export default function About() {
  return (
    <div className='w-7xl'>
        <div className='w-full h-100 flex justify-center items-center text-white bg-cover' style={{ backgroundImage: `url(${bg})` }}>
            <div className='w-1/3 text-center flex flex-col gap-5'>
                <h1 className='text-3xl'>About Telikash</h1>
                <p>Telikash is a pioneering technology company dedicated to shaping the future of digital connectivity. We provide innovative solutions that empower businesses and individuals to thrive in an interconnected world. Our focus is on creating seamless experiences, fostering collaboration, and driving progress through advanced technology.</p>
            </div>
            
        </div>
        <div className='w-6xl my-10 mx-auto grid grid-cols-2 gap-5'>
            <div>
                <div className='w-full h-full'>
           <img src={aboutimg} alt="" />
        </div>
            </div>
            <div className='w-full my-10 mx-auto flex flex-col gap-5'>
                <div className="w-full space-y-6 text-gray-800">

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
    <h2 className="text-xl font-semibold mb-1">Our Vision</h2>
    <p className="leading-relaxed">
      To be the trusted partner that unlocks digital potential, fostering a world where 
      technology seamlessly enhances every aspect of life and business.
    </p>
  </div>

  {/* Mission */}
  <div>
    <h2 className="text-xl font-semibold mb-1">Our Mission</h2>
    <p className="leading-relaxed">
      To deliver innovative, reliable, and user-centric technology solutions that drive growth, 
      efficiency, and exceptional experiences for our clients. We are committed to building 
      lasting relationships through expertise, integrity, and a relentless pursuit of excellence.
    </p>
  </div>
  {/* who we are */}
  <div>
    <h2 className="text-xl font-semibold mb-1">Who We Are: </h2>
    <p className="leading-relaxed">
      Telikash is more than just a technology company; we are a team of passionate innovators, seasoned experts, and dedicated problem-solvers. Our diverse team brings together a wealth of experience in [mention 2-3 key areas like: software development, cloud solutions, data analytics, cybersecurity, AI, etc.] to craft solutions that are not just cutting-edge, but also practical and impactful.
    </p>
  </div>
  <div>
    <h2 className="text-xl font-semibold mb-1">What We Do: </h2>
    <p className="leading-relaxed">
      We offer a comprehensive suite of services tailored to meet the evolving needs of today's digital world, including:
    </p>
  </div>
  <ul className="ml-10 list-disc space-y-3">
  <li>
    <span className="font-bold">Custom Software Development:</span>  
    Bringing your unique ideas to life with bespoke applications and digital platforms.
  </li>

  <li>
    <span className="font-bold">Cloud Computing Solutions:</span>  
    Harnessing the power of the cloud for scalability, enhanced security, and operational flexibility.
  </li>

  <li>
    <span className="font-bold">Data Analytics & AI:</span>  
    Transforming raw data into actionable insights and delivering intelligent automation solutions.
  </li>

  <li>
    <span className="font-bold">Cybersecurity & IT Consulting:</span>  
    Protecting your digital assets while strengthening and optimizing your IT infrastructure.
  </li>
</ul>

<h1 className='text-xl font-semibold mb-1'>Our Values:</h1>
<ul className="ml-10 list-disc space-y-3">
  <li>
    <span className="font-bold">Innovation:</span>  
    Constantly exploring new frontiers and embracing emerging technologies.
  </li>

  <li>
    <span className="font-bold">Integrity:</span>  
    Operating with transparency, honesty, and a strong commitment to ethical practices.
  </li>

  <li>
    <span className="font-bold">Collaboration:</span>  
    Working closely with our clients to achieve shared success and meaningful outcomes.
  </li>

  <li>
    <span className="font-bold">Excellence:</span>  
    Striving for the highest standards in everything we do — from design to delivery.
  </li>

  <li>
    <span className="font-bold">Customer Centricity:</span>  
    Placing our clients' needs at the heart of every solution we develop.
  </li>
</ul>
<div>
    <h2 className="text-xl font-semibold mb-1">Why Choose Telikash? </h2>
    <p className="leading-relaxed">
      n a rapidly changing digital world, you need a partner who understands your challenges and can deliver solutions that stand the test of time. With Telikash, you gain:
    </p>
  </div>
  <ul className="ml-10 list-disc space-y-3">
  <li>
    <span className="font-bold">Expert Guidance:</span>  
    Benefit from our deep industry knowledge and strong technical expertise.
  </li>

  <li>
    <span className="font-bold">Tailored Solutions:</span>  
    Receive strategies and tools perfectly aligned with your unique goals and challenges.
  </li>

  <li>
    <span className="font-bold">Reliable Partnership:</span>  
    Count on us for consistent support, transparent communication, and long-term commitment.
  </li>

  <li>
    <span className="font-bold">Future-Proof Innovation:</span>  
    Stay ahead of the curve with forward-thinking, cutting-edge technology solutions.
  </li>
</ul>
<h1 className='text-2xl font-semibold mb-1'>Join us on your digital journey. Discover how Telikash can help you innovate, connect, and build a brighter future.</h1>


</div>

            </div>

        </div>
    </div>
  )
}
