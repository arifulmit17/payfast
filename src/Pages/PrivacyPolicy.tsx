import React from 'react'
import bg from "../assets/banner/banner-bg.png";

export default function PrivacyPolicy() {
  return (
    <div className='w-7xl'>
        <div className='w-full h-100 flex justify-center items-center text-white bg-cover' style={{ backgroundImage: `url(${bg})` }}>
            <div className='w-1/3 text-center flex flex-col gap-5'>
                <h1 className='text-3xl'>Privacy Policy</h1>
            <p >
                Discover how we protect your personal information and respect your privacy. Explore our privacy policy to learn about data handling and security practices
            </p>

            </div>
            
        </div>
        <div className='w-6xl my-10 mx-auto flex flex-col gap-5'>
            <h1>To access the official Privacy Policy for TeliKash, you must refer to their official website or the information provided within their mobile application, as privacy policies are legal documents specific to each company. </h1>
            <h1>The TeliKash app's data safety section on the Google Play Store provides key information regarding its practices: </h1>
            <h1>Key Points from TeliKash Data Safety Information</h1>
            <ul className="ml-10 list-disc space-y-3">
  <li>
    <span className="font-bold">Data Sharing:</span>  
    The TeliKash app may share personal and financial information with approved third parties when necessary for service delivery or compliance.
  </li>

  <li>
    <span className="font-bold">Data Collection:</span>  
    The developer has indicated that the app collects certain personal and usage data as part of its core functionality.
  </li>

  <li>
    <span className="font-bold">Security Measures:</span>  
    User data is encrypted while in transit to enhance protection against unauthorized access.
  </li>

  <li>
    <span className="font-bold">Developer Information:</span>  
    The developer provides this information and may update it periodically to reflect policy changes or new app features.
  </li>
</ul>

            <h1>General Mobile Financial Service Privacy Practices</h1>      
            <h1>While the specific TeliKash document should be consulted, most mobile financial services privacy policies in Bangladesh generally cover the following:</h1>
             <ul className="ml-10 list-disc space-y-3">
  <li>
    <span className="font-bold">Purpose of Use:</span>  
    Information is used to provide services, process transactions, prevent fraud, comply with legal obligations, and improve overall service quality.
  </li>

  <li>
    <span className="font-bold">Information Disclosure:</span>  
    Data may be shared with affiliates, service providers, business partners, and government/law enforcement agencies when legally required.
  </li>

  <li>
    <span className="font-bold">User Consent:</span>  
    By using the application, users consent to the collection and processing of their information as described in the policy.
  </li>

  <li>
    <span className="font-bold">Security:</span>  
    Measures such as encryption, passwords, and physical security are implemented to prevent unauthorized access, though no system is entirely foolproof.
  </li>

  <li>
    <span className="font-bold">Data Retention:</span>  
    Personal information is retained as long as necessary to fulfill service purposes or comply with legal requirements.
  </li>
</ul>
<h1>For the most accurate and up-to-date policy, please refer to the links provided below:</h1>
<ul className="ml-10 list-disc space-y-3">
  <li>
    <span className="font-bold">TeliKash Official Website:</span>  
    The official website may have limited functionality based on the latest available review.
  </li>

  <li>
    <span className="font-bold">Google Play Store Data Safety:</span>  
    Information provided in the Data Safety section outlines how TeliKash handles user data, including collection, sharing, and security practices.
  </li>
</ul>

<h1>If you have specific questions or privacy concerns, you can also contact TeliKash support via the email provided on the app store listing: support@telikash.com.</h1>

        
        </div>
    </div>
  )
}
