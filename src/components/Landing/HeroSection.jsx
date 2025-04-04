import React from 'react'
import heroImage from '../../assets/hero-image.png' // Save the image you shared to this path
import { Section } from '../../layouts/Section'
import { HERO } from '../../constants/AppConstants'

const HeroSection = () => {
  return (
    <Section>
      <div className="flex flex-col desktop:flex-row items-center justify-center">
        <div className="flex flex-col items-center desktop:items-start  max-w-xl">
          <p className="mb-4 font-bold text-primary">Introducing PuppetPay</p>
          <h1 className="text-center desktop:text-left text-5xl small:text-6xl desktop:text-7xl font-bold mb-4 select-none">
            {HERO.TITLE}
          </h1>
          <p className="text-center desktop:text-left text-gray-600 my-10">
            {HERO.DESC}
          </p>
          <div className="flex w-full max-w-[525px]">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 w-full border border-gray-300 bg-white rounded-l-md focus:outline-none"
            />
            <button className="bg-primary hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-r-md text-nowrap cursor-pointer">
              Get&nbsp;Started
            </button>
          </div>
        </div>
        <div className="hidden desktop:block ml-10 w-[400px]">
          <img
            src={heroImage}
            alt="PuppetPay UI Preview"
            className="w-full object-contain"
          />
        </div>
      </div>
    </Section>
  )
}

export default HeroSection
