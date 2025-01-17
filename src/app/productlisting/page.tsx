
// "use client";

// import Link from "next/link";
// import { Facebook, Instagram, Linkedin, Search, ShoppingCart, Twitter, User } from "lucide-react";
// import { Truck, X } from "lucide-react";
// import { useState } from "react";

// import { Minus, Plus } from 'lucide-react'
// import Image from "next/image";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Features from "@/components/features";
// import Newsletter from "@/components/newsletter";
// import { FaSkype } from "react-icons/fa";
// import { MdOutlinePinInvoke } from "react-icons/md";


// function Productlisting() {
//   const [isVisible, setIsVisible] = useState(true);


//   const [quantity, setQuantity] = useState(1)

//   const incrementQuantity = () => {
//     setQuantity(prev => prev + 1)
//   }

//   const decrementQuantity = () => {
//     setQuantity(prev => (prev > 1 ? prev - 1 : 1))
//   }
//   if (!isVisible) return null;

//   return (
//     <>
//       {/* Top Banner */}
//       <div className="relative bg-[#2A254B] w-full h-[41px] flex items-center justify-center px-4">
//         <div className="flex items-center gap-2 text-white">
//           <Truck className="w-4 h-4" />
//           <p className="text-sm font-normal">
//             Free delivery on all orders over £50 with code easter checkout
//           </p>
//         </div>
//         <button
//           onClick={() => setIsVisible(false)}
//           className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-75 transition-opacity"
//           aria-label="Close banner"
//         >
//           <X className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Navigation Bar */}
//       <nav className="h-20 w-full bg-white px-20 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="text-[#22202E] text-2xl font-normal">
//           Avion
//         </Link>

       
// <div className="absolute left-1/2 -translate-x-1/2 top-[90px] flex gap-11">
//             {[
//               { name: "Plant pots", link: "/" },
//               { name: "Ceramics", link: "/homev1" },
//               { name: "Tables", link: "/productlisting" },
//               { name: "Chairs", link: "/productsv1" },
//               { name: "Crockery", link: "/productpage" },
//               { name: "Tableware", link: "/cart" },
//               { name: "Cutlery", link: "/" }
//             ].map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.link}
//                 className="font-satoshi text-base text-[#726E8D] hover:text-[#2A254B] transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//         {/* Side Actions */}
//         <div className="flex gap-4">
//           <button
//             className="w-4 h-4 flex items-center justify-center"
//             aria-label="Search"
//           >
//             <Search className="w-4 h-4 text-[#2A254B]" />
//           </button>
//           <button
//             className="w-4 h-4 flex items-center justify-center"
//             aria-label="Shopping cart"
//           >
//             <ShoppingCart className="w-4 h-4 text-[#2A254B]" />
//           </button>
//           <button
//             className="w-4 h-4 flex items-center justify-center"
//             aria-label="User account"
//           >
//             <User className="w-4 h-4 text-[#2A254B]" />
//           </button>
//         </div>
//       </nav>


//     <div className="w-full max-w-[1440px] mx-auto">
//       <div className="grid md:grid-cols-2 gap-8 p-4 md:p-8">
//         {/* Product Image */}
//         <div className="relative w-full aspect-square md:aspect-[0.95]">
//           <Image
//             src="/simplechair.png"
//             alt="The Dandy Chair"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         <div className="space-y-8 max-w-[602px]">
//           <div className="space-y-3">
//             <h1 className="text-[36px] leading-[44px] text-[#2A254B] font-normal">
//               The Dandy Chair
//             </h1>
//             <p className="text-2xl text-[#12131A]">£250</p>
//           </div>

//           {/* Description */}
//           <Card className="p-10 space-y-4">
//             <h2 className="text-base text-[#2A254B]">Description</h2>
//             <div className="space-y-5">
//               <p className="text-base text-[#505977] leading-[22px]">
//                 A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
//               </p>
//               <ul className="text-base text-[#505977] leading-[22px] list-disc pl-5 space-y-1">
//                 <li>Premium material</li>
//                 <li>Handmade upholstery</li>
//                 <li>Quality timeless classic</li>
//               </ul>
//             </div>
//           </Card>

//           <Card className="p-5">
//             <h2 className="text-base text-[#2A254B] mb-7">Dimensions</h2>
//             <div className="flex gap-14">
//               <div className="space-y-3">
//                 <p className="text-sm text-[#2A254B]">Height</p>
//                 <p className="text-base text-[#505977]">110cm</p>
//               </div>
//               <div className="space-y-3">
//                 <p className="text-sm text-[#2A254B]">Width</p>
//                 <p className="text-base text-[#505977]">75cm</p>
//               </div>
//               <div className="space-y-3">
//                 <p className="text-sm text-[#2A254B]">Depth</p>
//                 <p className="text-base text-[#505977]">50cm</p>
//               </div>
//             </div>
//           </Card>

//           <Card className="p-7 flex flex-wrap gap-6 items-center justify-between">
//             <div className="flex items-center gap-6">
//               <span className="text-base text-[#2A254B]">Amount:</span>
//               <div className="flex items-center bg-[#F9F9F9] px-4 py-3">
//                 <button
//                   onClick={decrementQuantity}
//                   className="text-[#CAC6DA] hover:text-[#2A254B] transition-colors"
//                 >
//                   <Minus className="h-4 w-4" />
//                 </button>
//                 <span className="mx-8 text-base text-[#2A254B]">{quantity}</span>
//                 <button
//                   onClick={incrementQuantity}
//                   className="text-[#CAC6DA] hover:text-[#2A254B] transition-colors"
//                 >
//                   <Plus className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//             <Button
//               className="bg-[#2A254B] hover:bg-[#2A254B]/90 text-white px-8 py-4 h-auto"
//             >
//               Add to cart
//             </Button>
//           </Card>
//         </div>
//       </div>
//     </div>
 
//     <section className="p-8 bg-gray-100 mt-[80px]">
//         <h3 className="text-[32px] leading-[39.36px] font-bold mb-[33px]">You might also like</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {[
//             { title: 'The Dandy chair', price: '£250', img: '/rightmain.png' },
//             { title: 'Rustic Vase Set', price: '£155', img: '/milk.png' },
//             { title: 'The Silky Vase', price: '£125', img: '/second.png' },
//             { title: 'The Silky Vase', price: '£125', img: '/light.png' },
//           ].map((product) => (
//             <div
//               key={product.title}
//               className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105"
//             >
//               <Image
//                 src={product.img}
//                 alt={product.title}
//                 width={305} 
//                 height={375} 

//                 className="w-full h-[375px] object-cover rounded-md"
//               />
//               <h4 className="font-bold mt-4 mb-2">{product.title}</h4>
//               <p className="text-gray-600">{product.price}</p>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <button className="bg-[#F9F9F9] hover:bg-gray-500 text-black py-4 px-12 text-sm md:text-base rounded-lg">
//             View Collection
//           </button>
//         </div>
//       </section>
//       <Features/>
//       <Newsletter/>

// <footer className="bg-[#2A224C] text-white py-10">
//   <div className="container mx-auto px-6 md:px-12">
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//       {/* Address Section */}
//       <div>
//         <h4 className="font-semibold text-lg mb-4">Avion</h4>
//         <ul className="space-y-2 text-sm">
//           <li>21 New York Street</li>
//           <li>New York City</li>
//           <li>United States of America</li>
//           <li>432 34</li>
//         </ul>
//       </div>

//       {/* Social Links Section */}
//       <div>
//         <h4 className="font-semibold text-lg mb-4">Social Links</h4>
//         <ul className="flex space-x-4">
//           <li><Link href="#" className="hover:text-gray-300"><Linkedin /></Link></li>
//           <li><Link href="#" className="hover:text-gray-300"><Facebook /></Link></li>
//           <li><Link href="#" className="hover:text-gray-300"><Instagram /></Link></li>
//           <li><Link href="#" className="hover:text-gray-300"><FaSkype size={24} /></Link></li>
//           <li><Link href="#" className="hover:text-gray-300"><Twitter /></Link></li>
//           <li><Link href="#" className="hover:text-gray-300"><MdOutlinePinInvoke size={24} /></Link></li>
//         </ul>
//       </div>

//       {/* Menu Section */}
//       <div>
//         <h4 className="font-semibold text-lg mb-4">Menu</h4>
//         <ul className="space-y-2 text-sm">
//           <li>New arrivals</li>
//           <li>Best sellers</li>
//           <li>Recently viewed</li>
//           <li>Popular this week</li>
//           <li>All products</li>
//         </ul>
//       </div>

//       {/* Categories Section */}
//       <div>
//         <h4 className="font-semibold text-lg mb-4">Categories</h4>
//         <ul className="space-y-2 text-sm">
//           <li>Crockery</li>
//           <li>Furniture</li>
//           <li>Homeware</li>
//           <li>Plant pots</li>
//           <li>Chairs</li>
//           <li>Crockery</li>
//         </ul>
//       </div>

//       {/* Our Company Section */}
//       <div>
//         <h4 className="font-semibold text-lg mb-4">Our Company</h4>
//         <ul className="space-y-2 text-sm">
//           <li>About us</li>
//           <li>Vacancies</li>
//           <li>Contact us</li>
//           <li>Privacy</li>
//           <li>Returns policy</li>
//         </ul>
//       </div>
//     </div>

//     <hr className="my-8 border-t border-gray-500" />

//     <div className="flex justify-between items-center text-sm">
//       <p>Copyright 2022 Avion LTD</p>
//     </div>
//   </div>
// </footer>

//     </>
//   );
// }

// export default Productlisting;


/*"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Search, ShoppingCart, Twitter, User } from "lucide-react";
import { Truck, X } from "lucide-react";
import { useState } from "react";
import { Minus, Plus } from 'lucide-react';
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import { FaSkype } from "react-icons/fa";
import { MdOutlinePinInvoke } from "react-icons/md";

function Productlisting() {
  const [isVisible, setIsVisible] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="relative bg-[#2A254B] w-full h-[41px] flex items-center justify-center px-4">
        <div className="flex items-center gap-2 text-white">
          <Truck className="w-4 h-4" />
          <p className="text-sm font-normal">
            Free delivery on all orders over £50 with code easter checkout
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-75 transition-opacity"
          aria-label="Close banner"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="h-20 w-full bg-white px-6 lg:px-20 flex items-center justify-between relative">
    
        <Link href="/" className="text-[#22202E] text-2xl font-normal">
          Avion
        </Link>

        <button
          className="lg:hidden text-2xl text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <div className="w-6 h-1 bg-[#22202E] mb-2"></div>}
        </button>

        <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} absolute lg:static top-20 left-1/2 transform -translate-x-1/2 lg:translate-x-0 bg-white w-full lg:w-auto lg:flex-row flex-col items-center gap-6 lg:gap-8`}>
          {[{
            name: "Plant pots",
            link: "/"
          }, {
            name: "Ceramics",
            link: "/homev1"
          }, {
            name: "Tables",
            link: "/productlisting"
          }, {
            name: "Chairs",
            link: "/productsv1"
          }, {
            name: "Crockery",
            link: "/productpage"
          }, {
            name: "Tableware",
            link: "/cart"
          }, {
            name: "Cutlery",
            link: "/"
          }].map(item => (
            <Link
              key={item.name}
              href={item.link}
              className="font-satoshi text-base text-[#726E8D] hover:text-[#2A254B] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

       
        <div className="flex gap-4 lg:hidden">
          <button className="w-4 h-4 flex items-center justify-center" aria-label="Search">
            <Search className="w-4 h-4 text-[#2A254B]" />
          </button>
          <button className="w-4 h-4 flex items-center justify-center" aria-label="Shopping cart">
            <ShoppingCart className="w-4 h-4 text-[#2A254B]" />
          </button>
          <button className="w-4 h-4 flex items-center justify-center" aria-label="User account">
            <User className="w-4 h-4 text-[#2A254B]" />
          </button>
        </div>
      </nav>

     
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 p-4 md:p-8">
         
          <div className="relative w-full aspect-square md:aspect-[0.95]">
            <Image
              src="/simplechair.png"
              alt="The Dandy Chair"
              fill
              className="object-cover"
              priority
            />
          </div>

         
          <div className="space-y-8 max-w-[602px]">
            <div className="space-y-3">
              <h1 className="text-[36px] leading-[44px] text-[#2A254B] font-normal">
                The Dandy Chair
              </h1>
              <p className="text-2xl text-[#12131A]">£250</p>
            </div>

           
            <Card className="p-10 space-y-4">
              <h2 className="text-base text-[#2A254B]">Description</h2>
              <div className="space-y-5">
                <p className="text-base text-[#505977] leading-[22px]">
                  A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                </p>
                <ul className="text-base text-[#505977] leading-[22px] list-disc pl-5 space-y-1">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>
              </div>
            </Card>

            
            <Card className="p-5">
              <h2 className="text-base text-[#2A254B] mb-7">Dimensions</h2>
              <div className="flex gap-14">
                <div className="space-y-3">
                  <p className="text-sm text-[#2A254B]">Height</p>
                  <p className="text-base text-[#505977]">110cm</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-[#2A254B]">Width</p>
                  <p className="text-base text-[#505977]">75cm</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-[#2A254B]">Depth</p>
                  <p className="text-base text-[#505977]">50cm</p>
                </div>
              </div>
            </Card>

           
            <Card className="p-7 flex flex-wrap gap-6 items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="text-base text-[#2A254B]">Amount:</span>
                <div className="flex items-center bg-[#F9F9F9] px-4 py-3">
                  <button
                    onClick={decrementQuantity}
                    className="text-[#CAC6DA] hover:text-[#2A254B] transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="mx-8 text-base text-[#2A254B]">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="text-[#CAC6DA] hover:text-[#2A254B] transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <Button
                className="bg-[#2A254B] hover:bg-[#2A254B]/90 text-white px-8 py-4 h-auto"
              >
                Add to cart
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <section className="p-8 bg-gray-100 mt-[80px]">
        <h3 className="text-[32px] leading-[39.36px] font-bold mb-[33px]">You might also like</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[{ title: 'The Dandy chair', price: '£250', img: '/rightmain.png' },
          { title: 'Rustic Vase Set', price: '£155', img: '/milk.png' },
          { title: 'The Silky Vase', price: '£125', img: '/second.png' },
          { title: 'The Silky Vase', price: '£125', img: '/light.png' }].map((product) => (
            <div key={product.title} className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105">
              <Image src={product.img} alt={product.title} width={305} height={375} className="w-full h-[375px] object-cover rounded-md" />
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

      <Features />
      <Newsletter />

      
      <footer className="bg-[#2A224C] text-white py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Avion</h4>
              <ul className="space-y-2 text-sm">
                <li>21 New York Street</li>
                <li>New York City</li>
                <li>United States of America</li>
                <li>432 34</li>
              </ul>
            </div>

          
            <div>
              <h4 className="font-semibold text-lg mb-4">Social Links</h4>
              <ul className="flex space-x-4">
                <li><Link href="#" className="hover:text-gray-300"><Linkedin /></Link></li>
                <li><Link href="#" className="hover:text-gray-300"><Facebook /></Link></li>
                <li><Link href="#" className="hover:text-gray-300"><Instagram /></Link></li>
                <li><Link href="#" className="hover:text-gray-300"><FaSkype size={24} /></Link></li>
                <li><Link href="#" className="hover:text-gray-300"><Twitter /></Link></li>
                <li><Link href="#" className="hover:text-gray-300"><MdOutlinePinInvoke size={24} /></Link></li>
              </ul>
            </div>

           
            <div>
              <h4 className="font-semibold text-lg mb-4">Menu</h4>
              <ul className="space-y-2 text-sm">
                <li>New arrivals</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li>All products</li>
              </ul>
            </div>

          
            <div>
              <h4 className="font-semibold text-lg mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>Crockery</li>
                <li>Furniture</li>
                <li>Homeware</li>
                <li>Plant pots</li>
                <li>Chairs</li>
                <li>Crockery</li>
              </ul>
            </div>

           
            <div>
              <h4 className="font-semibold text-lg mb-4">Our Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About us</li>
                <li>Vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
              </ul>
            </div>
          </div>

          <hr className="my-8 border-t border-gray-500" />

          <div className="flex justify-between items-center text-sm">
            <p>Copyright 2022 Avion LTD</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Productlisting;*/


//src\app\productlisting\page.tsx
"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Search, ShoppingCart, Twitter, User } from "lucide-react";
import { Truck, X } from "lucide-react";
import { useState } from "react";
import { Minus, Plus, } from 'lucide-react';
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import { FaSkype } from "react-icons/fa";
import { MdOutlinePinInvoke } from "react-icons/md";
import {Menu} from 'lucide-react';

function Productlisting() {
  const [isVisible, setIsVisible] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Top Banner */}
      <div className="relative bg-[#2A254B] w-full h-[41px] flex items-center justify-center px-4">
        <div className="flex items-center gap-2 text-white">
          <Truck className="w-4 h-4" />
          <p className="text-sm font-normal">
            Free delivery on all orders over £50 with code easter checkout
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-75 transition-opacity"
          aria-label="Close banner"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Bar */}
      <nav className="h-20 w-full bg-white px-6 lg:px-20 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="text-[#22202E] text-2xl font-normal">
          Avion
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="lg:hidden text-2xl text-[#22202E] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <div className="w-6 h-1 bg-[#22202E] mb-2"></div>}
        </button>

        {/* Navigation Links */}
        <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} absolute lg:static top-20 left-1/2 transform -translate-x-1/2 lg:translate-x-0 bg-white w-full lg:w-auto lg:flex-row flex-col items-center gap-6 lg:gap-8`}>
          {[{
            name: "Plant pots",
            link: "/"
          }, {
            name: "Ceramics",
            link: "/homev1"
          }, {
            name: "Tables",
            link: "/productlisting"
          }, {
            name: "Chairs",
            link: "/productsv1"
          }, {
            name: "Crockery",
            link: "/productpage"
          }, {
            name: "Tableware",
            link: "/cart"
          }, {
            name: "Cutlery",
            link: "/"
          }].map(item => (
            <Link
              key={item.name}
              href={item.link}
              className="font-satoshi text-base text-[#726E8D] hover:text-[#2A254B] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Side Actions */}
        <div className="flex gap-4 lg:hidden">
          <button className="w-4 h-4 flex items-center justify-center" aria-label="Search">
            <Search className="w-4 h-4 text-[#2A254B]" />
          </button>
          <button className="w-4 h-4 flex items-center justify-center" aria-label="Shopping cart">
            <ShoppingCart className="w-4 h-4 text-[#2A254B]" />
          </button>
          <button className="w-4 h-4 flex items-center justify-center" aria-label="User account">
            <User className="w-4 h-4 text-[#2A254B]" />
          </button>
        </div>
      </nav>

      {/* Product Listing */}
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 p-4 md:p-8">
          {/* Product Image */}
          <div className="relative w-full aspect-square md:aspect-[0.95]">
            <Image
              src="/simplechair.png"
              alt="The Dandy Chair"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="space-y-8 max-w-[602px]">
            <div className="space-y-3">
              <h1 className="text-[36px] leading-[44px] text-[#2A254B] font-normal">
                The Dandy Chair
              </h1>
              <p className="text-2xl text-[#12131A]">£250</p>
            </div>

            {/* Description */}
            <Card className="p-10 space-y-4">
              <h2 className="text-base text-[#2A254B]">Description</h2>
              <div className="space-y-5">
                <p className="text-base text-[#505977] leading-[22px]">
                  A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                </p>
                <ul className="text-base text-[#505977] leading-[22px] list-disc pl-5 space-y-1">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>
              </div>
            </Card>

            {/* Dimensions */}
            <Card className="p-5">
              <h2 className="text-base text-[#2A254B] mb-7">Dimensions</h2>
              <div className="flex gap-14">
                <div className="space-y-3">
                  <p className="text-sm text-[#2A254B]">Height</p>
                  <p className="text-base text-[#505977]">110cm</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-[#2A254B]">Width</p>
                  <p className="text-base text-[#505977]">75cm</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-[#2A254B]">Depth</p>
                  <p className="text-base text-[#505977]">50cm</p>
                </div>
              </div>
            </Card>

            {/* Add to Cart */}
            <Card className="p-7 flex flex-wrap gap-6 items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="text-base text-[#2A254B]">Amount:</span>
                <div className="flex items-center bg-[#F9F9F9] px-4 py-3">
                  <button
                    onClick={decrementQuantity}
                    className="text-[#CAC6DA] hover:text-[#2A254B] transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="mx-8 text-base text-[#2A254B]">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="text-[#CAC6DA] hover:text-[#2A254B] transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <Button
                className="bg-[#2A254B] hover:bg-[#2A254B]/90 text-white px-8 py-4 h-auto"
              >
                Add to cart
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <section className="p-8 bg-gray-100 mt-[80px]">
        <h3 className="text-[32px] leading-[39.36px] font-bold mb-[33px]">You might also like</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[{ title: 'The Dandy chair', price: '£250', img: '/rightmain.png' },
          { title: 'Rustic Vase Set', price: '£155', img: '/milk.png' },
          { title: 'The Silky Vase', price: '£125', img: '/second.png' },
          { title: 'The Silky Vase', price: '£125', img: '/light.png' }].map((product) => (
            <div key={product.title} className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105">
              <Image src={product.img} alt={product.title} width={305} height={375} className="w-full h-[375px] object-cover rounded-md" />
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

      <Features />
      <Newsletter />

      {/* Footer */}
      <footer className="bg-[#2A224C] text-white py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Address Section */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Avion</h4>
              <ul className="space-y-2 text-sm">
                <li>21 New York Street</li>
                <li>New York City</li>
                <li>United States of America</li>
                <li>432 34</li>
              </ul>
            </div>

            {/* Social Links Section */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Social Links</h4>
              <ul className="flex space-x-4">
                <li><Link href="#" className="hover:text-gray-300"><Linkedin /></Link></li>
                <li><Link href="#" className="hover:text-gray-300"><Facebook /></Link></li>
                <li><Link href="#" className="hover:text-gray-300"><Instagram /></Link></li>
                <li><Link href="#" className="hover:text-gray-300"><FaSkype size={24} /></Link></li>
                <li><Link href="#" className="hover:text-gray-300"><Twitter /></Link></li>
                <li><Link href="#" className="hover:text-gray-300"><MdOutlinePinInvoke size={24} /></Link></li>
              </ul>
            </div>

            {/* Menu Section */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Menu</h4>
              <ul className="space-y-2 text-sm">
                <li>New arrivals</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li>All products</li>
              </ul>
            </div>

            {/* Categories Section */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>Crockery</li>
                <li>Furniture</li>
                <li>Homeware</li>
                <li>Plant pots</li>
                <li>Chairs</li>
                <li>Crockery</li>
              </ul>
            </div>

            {/* Our Company Section */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Our Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About us</li>
                <li>Vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
              </ul>
            </div>
          </div>

          <hr className="my-8 border-t border-gray-500" />

          <div className="flex justify-between items-center text-sm">
            <p>Copyright 2022 Avion LTD</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Productlisting;
