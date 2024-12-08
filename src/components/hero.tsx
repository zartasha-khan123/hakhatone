import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <>
    <div className="relative mx-auto max-w-[1440px] px-5 mt-[60px]">
      <div className="grid lg:grid-cols-2 min-h-[584px]">
        {/* Left Column */}
        <div className="bg-[#2A254B] p-14 flex flex-col justify-between">
          <div className="space-y-10">
            <h1 className='text-4xl leading-[140%] text-white max-w-[513px] mb-[40px]'>
              The furniture brand for the future, with timeless designs
            </h1>
            
            <button className="inline-flex items-center px-8 py-4 text-white bg-white/15 hover:bg-white/20 transition-colors ">
              View collection
            </button>
          </div>
          
          <p className="text-lg text-white max-w-[602px] mt-20">
            A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
          </p>
        </div>

        {/* Right Column */}
        <div className="relative bg-[#92A9B3] min-h-[584px]">
          <Image
            src="/rightmain.png"
            alt="Modern black chair with wooden legs"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  
    </>
  )
}

export default Hero
