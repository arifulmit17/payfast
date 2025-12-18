import React from 'react'
import Hero from '../components/Home/Hero'
import FeatureCards from '../components/Home/FeatureCards'
import WalletCards from '../components/Home/WalletCards'
import AppSection from '../components/Home/AppSection'
import CustomerFeedback from '../components/Home/CustomerFeedback'
import ContactSection from '../components/Home/ContactSection'
import AboutSection from '../components/Home/AboutSection'
import JoinSection from '../components/Home/JoinSection'
import CardsSection from '../components/Home/CardsSection'



export default function Home() {
    
  return (
    <div>
        <section className='my-20'>
            <CardsSection></CardsSection>
        </section>

        <section className='my-20'>
            <WalletCards></WalletCards>
        </section>
        <section id='about' className='my-20'>
             <AboutSection></AboutSection>
        </section>
        <section id='features' className='my-20'>
            <FeatureCards></FeatureCards>
        </section>
        <section className='my-20'>
            <JoinSection></JoinSection>
        </section>
        <section className='my-20'>
            <AppSection></AppSection>
        </section>

        <section className='my-20'>
            <CustomerFeedback></CustomerFeedback>
        </section>
        <section id='contact' className='my-20'>
            <ContactSection></ContactSection>
        </section>
    </div>
  )
}
