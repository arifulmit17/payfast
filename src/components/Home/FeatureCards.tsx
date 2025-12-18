import React from "react";
import FeatureCard from "./FeatureCard";
import sampleimage from "../../assets/banner/image.png"
import Marquee from "react-fast-marquee";

export default function FeatureCards() {
  const cards = [
    {
      title: "Authentic User Verification",
      image: sampleimage,
      description:
        "Verify phone and account with biometric face & OTP verification during login.",
    },
    {
      title: "Scan & Share QR Code",
      image: sampleimage,
      description:
        "Get your authentic QR code for sharing & scan others’ QR for money transfers.",
    },
    {
      title: "Add Purpose to Money Transfer",
      image: sampleimage,
      description:
        "Let your friends know why you’re transferring money to their 6Cash wallet.",
    },
    {
      title: "Share Transaction History",
      image: sampleimage,
      description:
        "Share your transaction history after successfully completing it on other platforms.",
    },
    {
      title: "Multiple Languages",
      image: sampleimage,
      description:
        "Choose your favorite language & get a native feel from your 6Cash mobile app.",
    },
    {
      title: "24/7 Customer Support",
      image: sampleimage,
      description:
        "We’re here to help you with any wallet-related issues, so feel free to call us.",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col w-full justify-center text-center ">
        <h1 className="text-5xl">
          Choose Telikash for Secure and Convenient Digital Payments
        </h1>
      </div>
      <div>
        
        {/* <Marquee  >
          {cards.map((card, index) => (
          <div key={index} className="w-full flex items-center justify-center gap-5">
            <FeatureCard  card={card} />
          </div>
        ))}

        </Marquee> */}
      </div>
      <div className="grid grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="w-full flex items-center justify-center gap-5">
            <FeatureCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
