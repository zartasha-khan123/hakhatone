
'use client'
import React, { useState } from 'react';
import { Truck, X } from "lucide-react";
import { Facebook, Instagram, Linkedin, Search, ShoppingCart, Twitter, User } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Features from "@/components/features";
import { MdOutlinePinInvoke } from "react-icons/md";
import Footer from '@/components/footer';

function HomeV1() {
    // Move all hooks to the top level
    const [isVisible, setIsVisible] = useState(true);
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    }

    const decrementQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    }

    if (!isVisible) return null; // Early return is fine, hooks are still at the top

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
                <Image src='/lamp.png' alt='image' width={1440} height={704} />
            </div>

            <Features />

            {/* Your other JSX code remains the same */}
            <section className="p-8 bg-gray-100 mt-[80px]">
                {/* Your other content */}
            </section>

            <Footer />
        </>
    );
}

export default HomeV1;
