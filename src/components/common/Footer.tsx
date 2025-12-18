import React from "react";
import telikashIcon from "../../assets/telikash.png";
import { CiFacebook } from "react-icons/ci";

import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="bg-cyan-800">
      <div className="max-w-7xl h-80 mt-10 mx-auto text-white grid grid-cols-4">
        <div className="h-2/3 mt-10 flex flex-col justify-around">
          <div className="w-30">
            <img src={telikashIcon} alt="" />
          </div>

          <h3>
            Telikash is your personal digital wallet solution for your daily
            life. Download the Telikash app today!
          </h3>
          <div className="rounded-full flex justify-center items-center ring-2 w-10 h-10 hover:bg-cyan-300">
            <CiFacebook className="text-white " />
          </div>
        </div>

        <div className="h-2/3 mt-10">
          <ul>
            <li className="font-bold mb-7">Quick Links</li>
            <li>Home Page</li>
            <li>About Us</li>
            <li>How It Works</li>
          </ul>
        </div>
        <div className="h-2/3 mt-10">
          <ul>
            <li className="font-bold mb-7">Help & Support</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div className=" h-2/3 mt-10 flex flex-col gap-5">
            <h1 className="font-bold mb-7">Subscribe us</h1>
            
            <div className="h-10 w-full ">
                <input className="bg-white rounded-xl w-full h-full" type="email"  />
            </div>
            <div className="h-10 w-full ">
                <Button className="bg-cyan-300 rounded-xl w-full h-full text-black hover:bg-cyan-700 hover:text-white">Subscribe</Button>
            </div>
           
           
           
            
        </div>
        <div className="col-span-4 text-center">
            <h1>© telikash - Mobile Banking. all right reserve Telikash</h1>
        </div>
      </div>
    </div>
  );
}
