'use client'
import React from 'react'
import { Truck, X } from "lucide-react";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Search, ShoppingCart, Twitter, User } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Features from "@/components/features";
import { MdOutlinePinInvoke } from "react-icons/md";
import Footer from '@/components/footer';

function HomeV1() {
    const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1))
  }

 

  return (
    <>
    <nav className="w-full max-w-[1440px] h-[132px] bg-white mx-auto">
      <div className="relative w-full h-full">
        {/* Top Section */}
        <div className="absolute left-7 top-[26px]">
          <Search className="w-4 h-4 text-[#2A254B]" />
        </div>
        
        <h1 className="absolute left-1/2 -translate-x-1/2 top-5 font-clash-display text-2xl text-[#22202E]">
          Avion
        </h1>
        
        <div className="absolute right-7 top-[26px] flex gap-4">
          <ShoppingCart className="w-4 h-4 text-[#2A254B]" />
          <User className="w-4 h-4 text-[#2A254B]" />
        </div>

        {/* Divider */}
        <div className="absolute left-[1.94%] right-[1.81%] top-[70px] border-t border-black/10" />

        

<div className="absolute left-1/2 -translate-x-1/2 top-[90px] flex gap-11">
            {[
              { name: "Plant pots", link: "/" },
              { name: "Ceramics", link: "/homev1" },
              { name: "Tables", link: "/productlisting" },
              { name: "Chairs", link: "/productsv1" },
              { name: "Crockery", link: "/productpage" },
              { name: "Tableware", link: "/cart" },
              { name: "Cutlery", link: "/" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="font-satoshi text-base text-[#726E8D] hover:text-[#2A254B] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
      </div>
    </nav>
  
<div>
    <Image src='/lamp.png' alt='image' width={1440} height={704}/>
</div>

<Features/>

<section className="p-8 bg-gray-100 mt-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            { title: 'The Dandy chair', price: '£250', img: '/rightmain.png' },
            { title: 'Rustic Vase Set', price: '£155', img: '/milk.png' },
            { title: 'The Silky Vase', price: '£125', img: '/second.png' },
            { title: 'The Silky Vase', price: '£125', img: '/light.png' },
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
        <div className="text-center mt-10">
          <button className="bg-[#F9F9F9] hover:bg-gray-500 text-black py-4 px-12 text-sm md:text-base rounded-lg">
            View Collection
          </button>
        </div>
      </section>

     
    <section className="w-full bg-white px-4 py-12 md:px-20 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:gap-4">
        {/* Text Block */}
        <div className="relative flex h-[478px] w-full flex-col bg-[#2A254B] p-16 md:w-1/2">
          <div className="space-y-3">
            <h2 className="font-clash text-3xl font-normal leading-tight text-white md:text-4xl">
              It started with a small idea
            </h2>
            <p className="font-satoshi text-lg leading-relaxed text-white">
              A global brand with local beginnings, our story began in a small studio in South London in early 2014
            </p>
          </div>
          <Button className="mt-auto inline-flex h-[56px] w-[170px] items-center justify-center bg-white/15 px-8 font-satoshi text-base text-white transition-colors hover:bg-white/20">
            View collection
          </Button>
        </div>

        {/* Image Block */}
        <div className="h-[478px] w-full md:w-1/2">
          <img
            src="/yellowsofa.png"
            alt="Interior design showcase"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>

<div className="relative mt-12 max-w-[1440px] mx-auto h-[444px] mb-0">
  {/* Background Image */}
  <Image
    src="/orange.png"
    alt="Background Image"
    layout="fill"
    objectFit="cover"
    className="rounded-lg"
  />

  {/* Content Section */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6">
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* Input and Button */}
    <div className="flex items-center w-3/4 max-w-md mt-6">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 p-3 text-gray-800 rounded-l- shadow-md focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
      />
      <button className="px-6 py-3 text-white bg-[#2A254B] rounded-r-lg hover:bg-blue-600">
        Sign up
      </button>
      </div>
  </div>
  </div>

<Footer/>


    </>
  )
}

export default HomeV1
