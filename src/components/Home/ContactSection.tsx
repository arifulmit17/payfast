import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

export default function ContactSection() {
  return (
    <div className='grid grid-cols-2 h-100 my-10'>
        <div className='col-span-2 text-5xl text-center'>Contact Us</div>

<div className=" h-2/3 text-cyan-800 flex flex-col justify-between gap-5">
    <div>
        <h1 className='text-3xl'>Any question or remarks Just write us a message! or just reach out to us!</h1>
    </div>
  <div className="flex items-start gap-3">
    <MapPin className="text-blue-600 w-5 h-5" />
    <p>Riyadh, Saudi Arabia</p>
  </div>

  <div className="flex items-start gap-3">
    <Mail className="text-blue-600 w-5 h-5" />
    <p>telikash134@gmail.com</p>
  </div>

  <div className="flex items-start gap-3">
    <Phone className="text-blue-600 w-5 h-5" />
    <p>+966 577 432 713</p>
  </div>
</div>

        <div className='text-cyan-800 flex h-full flex-col justify-around gap-5'>
            <div>
               <h1 className='text-2xl'>Please fill up the form</h1>
            </div>
            <div className='flex gap-5'>
                <Input className='w-1/2' type="text" name="name" placeholder="Name"></Input>
                <Input className='w-1/2' type="email" name="email" placeholder="Email"></Input>
            </div>
            <div>
                <Input className='w-full' type="text" name="subject" placeholder="Subject"></Input>
            </div>
            <div>
                <Textarea placeholder="Message"></Textarea>
            </div>
            <Button className='w-30 h-10 rounded-2xl bg-cyan-900 hover:bg-cyan-300'>Submit</Button>
          
        </div>
    </div>
  )
}
