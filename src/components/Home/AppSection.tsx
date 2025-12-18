import React from 'react'
import appstore from "../../assets/banner/app_store_btn.png"
import googleplay from "../../assets/banner/google_play_btn.png"
import appstoreimg from "../../assets/banner/access-6cash-bg.png"
import downloadimg from "../../assets/banner/download.png"

export default function AppSection() {
  return (
    <div className='h-full my-20  ' >
        <div className='h-100 rounded-t-3xl flex flex-col p-20 text-white text-center items-center justify-center gap-5 'style={{ backgroundImage: `url(${appstoreimg})` }}>
           <h1 className='text-3xl'>Access Telikash <br />
Anytime, Anywhere!</h1>
           <p>All the power of niche in your pocket. Schedule, publish and monitir your accounts with ease.</p>
           <div className="flex items-center justify-center h-2/3 mt-10 gap-5">
            <a href='https://play.google.com/store/apps/details?id=com.telikashuser.alivestation&pcampaignid=web_share' className="w-1/3 h-full">
                 <img  src={googleplay} alt="" />

            </a>
           
            <a href='https://play.google.com/store/apps/details?id=com.telikashuser.alivestation&pcampaignid=web_share' className="w-1/3 h-full">
                <img src={appstore} alt="" />


            </a>
           
            
        </div>
        </div>
        <div className='h-100' style={{ backgroundImage: `url(${downloadimg})` }}>

        </div>
    </div>
  )
}
