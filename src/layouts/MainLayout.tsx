import React from 'react'
import { Outlet, useLocation} from 'react-router'
import Navbar from '../components/common/Navbar'
import Hero from '../components/Home/Hero'
import bg from "../assets/banner/banner-bg.png";
import Footer from '../components/common/Footer';
import HeroSwiper from '../components/Home/hero/HeroSwiper';

export default function MainLayout() {
    const routePath=useLocation()
 
  return (
    <div className="min-h-screen  flex flex-col mx-auto">
      
     <Navbar></Navbar>
     {routePath.pathname =='/' && <section className='min-w-svh min-h-svh bg-cover' style={{ backgroundImage: `url(${bg})` }}>
            <HeroSwiper></HeroSwiper>
        </section>}
     
     {/* {routePath.pathname =='/' && <section className='min-w-svh min-h-svh bg-cover' style={{ backgroundImage: `url(${bg})` }}>
            <Hero></Hero>
        </section>} */}
      <main className="max-w-7xl mx-auto flex-1">
        
        <Outlet>
            
        </Outlet>
      </main>
      <Footer></Footer>

     
    </div>
  )
}
