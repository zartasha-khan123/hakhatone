'use client'
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { CircleUserRound, Search, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/footer';

export default function Productv1() {
  return (
    <>
    <nav className="bg-white p-4 shadow-md flex justify-between ">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="text-black text-3xl font-bold flex items-center text-center">
      <div className='relative w-8 h-8'> <Search className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 '/></div>
        <h1 className='text-center'><Link href="/">Avion</Link></h1>
        <div className='relative w-8 h-8'><ShoppingCart className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 '/></div> 
         <div className='relative w-8 h-8'><CircleUserRound  className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 ' /></div>
               
      </div>
      </div>
      </nav>
      <div className='flex items-center justify-center gap-[16px] mt-[20px] '>
          <nav className="  hidden md:flex items-center gap-8">
                  <Link
                    href={"/"}
                    className="text-[16px] leading-[24px] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black "
                  >
                    Plant Pots
                  </Link>
                  <Link
                    href={"/homev1"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Ceramics
                  </Link>
                  <Link
                    href={"/productlisting"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Tables
                  </Link>
                  <Link
                    href={"/productsv1"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Chairs
                  </Link>

                  <Link
                    href={"/cart"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Crockery
                  </Link>

                  <Link
                    href={"/productpage"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Tableware
                  </Link>

                  <Link
                    href={"/"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Cutlery
                  </Link>
                  </nav>
                  </div>
               <div className='flex items-center justify-center mt-[29px]'>
                <Image src='/productimg.png' width={1440} height={209} alt='image main'/>
               </div>

    
<div className="flex mt-[20px]">
  {/* Vertical Navbar */}
  <aside className="w-[385px] bg-white p-12 ">
    <div className="flex flex-col gap-12">
      {/* Product Type Section */}
      <div className="space-y-5">
        <h3 className="text-base font-normal text-[#2A254B]" style={{ fontFamily: 'Clash Display' }}>
          Product type
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox id="furniture" />
            <Label htmlFor="furniture" className="text-base font-normal text-[#2A254B]">
              Furniture
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="homeware" defaultChecked />
            <Label htmlFor="homeware" className="text-base font-normal text-[#2A254B]">
              Homeware
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="sofas" />
            <Label htmlFor="sofas" className="text-base font-normal text-[#2A254B]">
              Sofas
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="lighting" />
            <Label htmlFor="lighting" className="text-base font-normal text-[#2A254B]">
              Light fittings
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="accessories" />
            <Label htmlFor="accessories" className="text-base font-normal text-[#2A254B]">
              Accessories
            </Label>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="space-y-5">
        <h3 className="text-base font-normal text-[#2A254B]" style={{ fontFamily: 'Clash Display' }}>
          Price
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox id="0-100" />
            <Label htmlFor="0-100" className="text-base font-normal text-[#2A254B]">
              0 - 100
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="101-250" />
            <Label htmlFor="101-250" className="text-base font-normal text-[#2A254B]">
              101 - 250
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="250plus" />
            <Label htmlFor="250plus" className="text-base font-normal text-[#2A254B]">
              250 +
            </Label>
          </div>
        </div>
      </div>

      {/* Designer Section */}
      <div className="space-y-5">
        <h3 className="text-base font-normal text-[#2A254B]" style={{ fontFamily: 'Clash Display' }}>
          Designer
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Checkbox id="robert-smith" />
            <Label htmlFor="robert-smith" className="text-base font-normal text-[#2A254B]">
              Robert Smith
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="liam-gallagher" />
            <Label htmlFor="liam-gallagher" className="text-base font-normal text-[#2A254B]">
              Liam Gallagher
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="biggie-smalls" />
            <Label htmlFor="biggie-smalls" className="text-base font-normal text-[#2A254B]">
              Biggie Smalls
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="thom-yorke" />
            <Label htmlFor="thom-yorke" className="text-base font-normal text-[#2A254B]">
              Thom Yorke
            </Label>
          </div>
        </div>
      </div>
    </div>
  </aside>

  {/* Cards Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ml-6">
    {[
      { title: 'The Dandy chair', price: '£250', img: '/rightmain.png' },
      { title: 'Rustic Vase Set', price: '£250', img: '/milk.png' },
      { title: 'The Silky Vase', price: '£250', img: '/3rdcard.png' },
      { title: 'The Silky Vase', price: '£250', img: '/second.png' },
      { title: 'The Silky Vase', price: '£250', img: '/light.png' },
      { title: 'The Silky Vase', price: '£250', img: '/chairlast.png' },
      { title: 'The Silky Vase', price: '£250', img: '/7card.png' },
      { title: 'The Silky Vase', price: '£250', img: '/8card.png' },
      { title: 'The Silky Vase', price: '£250', img: '/9card.png' },
    ].map((product) => (
      <div
        key={product.title}
        className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105"
      >
        <Image
          src={product.img}
          alt={product.title}
          width={305} 
          height={375} 
          className="w-full h-[375px] object-cover rounded-md"
        />
        <h4 className="font-bold mt-4 mb-2">{product.title}</h4>
        <p className="text-gray-600">{product.price}</p>
      </div>
    ))}
  </div>
</div>
<div className="text-center mt-11 mb-[36px]">
          <button className="bg-gray-500 hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded shadow-md transition-colors">
            Load More
          </button>
        </div>

        <Footer/>

    </>
  )
}

