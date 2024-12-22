import React from 'react'
import Image from 'next/image'

function Bottomdiv() {
  return (
    <>
      {/* Hero Section */}
      <section className=" mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-8 p-8 ">
        <div className="flex flex-col justify-center">
          <h2 className="text-[24px] text-black leading-[33.6px] md:text-5xl font-sans mb-4">
          From a studio in London to a global brand with
          over 400 outlets...
          </h2>
          <p className="mb-6 text-gray-800 text-[16px] leading-[21.5px] mt-[25px]">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available 
          for the mass market. <br/><br/><br/>
          Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design 
          so our Chelsea boutique become the hotbed for the London interior design community.
          </p>
          
        </div>
        <div>
          <Image
            src="/rightpink.png"
            alt="pink Chair"
            width={720} height={603}
            className="w-full h-auto object-cover rounded-lg"/>
          
        </div>
        <div className="text-left mt-10">
          <button className="bg-[#F9F9F9] hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded-lg shadow-md transition-colors">
            Get in touch
          </button>
        </div>
      </section>

    </>
    
  )
}

export default Bottomdiv
