import React from 'react'
import bg from "../assets/banner/banner-bg.png";

export default function TermConditions() {
  return (
    <div className='w-7xl'>
        <div className='w-full h-100 flex justify-center items-center text-white bg-cover' style={{ backgroundImage: `url(${bg})` }}>
            <div className='w-1/3 text-center flex flex-col gap-5'>
                <h1 className='text-3xl'>Terms</h1>
            
            </div>
            
        </div>
        <div className='w-6xl my-10 mx-auto flex flex-col gap-5'>
            <h1>To access the specific terms and conditions for TeliKash, you should refer to their official application or website, as legal documents are specific to each service. </h1>
            <h1>TeliKash is a mobile financial service provider, primarily operating in Bangladesh, offering a mobile wallet solution for managing finances, conducting payments, and accessing various financial services. </h1>
            <h1>While the exact terms must be reviewed on their platform, general points typically covered in such terms and conditions include:</h1>
        <ul className="ml-10 list-disc space-y-3">
  <li>
    <span className="font-bold">User Responsibility:</span>  
    You are generally responsible for any unauthorized use of your account and must follow all applicable laws and regulations while using the service.
  </li>

  <li>
    <span className="font-bold">Account Termination:</span>  
    The service provider may terminate accounts or remove content if they believe the user has violated the terms.
  </li>

  <li>
    <span className="font-bold">Permitted Use:</span>  
    The service is intended for personal, private, and non-commercial use. Commercial, unlawful, or illegal use is prohibited.
  </li>

  <li>
    <span className="font-bold">Prohibited Activities:</span>  
    Users are prohibited from copying, reproducing, reverse-engineering, or creating derivative works of the service's software or content. Fraudulent or illegal activities are strictly forbidden.
  </li>

  <li>
    <span className="font-bold">Data and Privacy:</span>  
    Details on how user data is collected, stored, and shared are typically described in a separate privacy policy.
  </li>

  <li>
    <span className="font-bold">Limitation of Liability:</span>  
    Service providers generally state they are not liable for indirect, consequential, or certain other types of losses arising from use of the service, as permitted by law.
  </li>
</ul>

<h1>To view the official documents:</h1>
<ul className="ml-10 list-disc space-y-3">
  <li>
    <span className="font-bold">Official Website:</span>  
    You can visit the TeliKash website, though some features may still display a “Coming Soon” message based on the latest update.
  </li>

  <li>
    <span className="font-bold">Google Play Store:</span>  
    The app’s details page includes important information such as data safety and a link to their privacy policy.
  </li>

  <li>
    <span className="font-bold">Support Email:</span>  
    For specific inquiries, you may contact their support team at  
    <span className="underline">support@telikash.com</span>.
  </li>
</ul>


        </div>
    </div>
  )
}
