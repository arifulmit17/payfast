import React from 'react'
import CustomerSwiper from './CustomerSwiper';
 

export default function CustomerFeedback() {

  return (
    <div>
        <div className='my-10 text-center flex flex-col gap-5'>
            <h1 className='text-5xl '>Real Stories from Telikash Users</h1>
             <p>Telikash is loved by millions of people & trusted by thousands of businesses nationwide.</p>
        </div>
        <div>
            
                    <CustomerSwiper ></CustomerSwiper>
            
           
        </div>
    </div>
  )
}
