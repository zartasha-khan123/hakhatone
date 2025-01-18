// 'use client'
// import React, { useState } from 'react';
// import { CircleUserRound, Truck, X } from "lucide-react";
// import { Facebook, Instagram, Linkedin, Search, ShoppingCart, Twitter, User } from "lucide-react";
// import Link from 'next/link';
// import Image from "next/image";
// import Features from "@/components/features";
// import Footer from '@/components/footer';

// function HomeV1() {
//     const [isVisible] = useState(true);
//     const [quantity, setQuantity] = useState(1);

//     const incrementQuantity = () => {
//         setQuantity(prev => prev + 1);
//     }

//     const decrementQuantity = () => {
//         setQuantity(prev => (prev > 1 ? prev - 1 : 1));
//     }

//     if (!isVisible) return null; // Early return is fine, hooks are still at the top

//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//       setIsOpen(!isOpen);
//     };
//     return (
//         <>
//  <div className="w-full h-12 bg-[#2A254B] text-white flex items-center justify-between px-[136px]">
//           {/* content-1 */}
//           <div className="flex justify-between text-center gap-2  ml-[309px]">
//             Free delivery on all orders over £50 with code easter checkout
//             <div className='text-right'> <Link href="/" className=" font-semibold hover:underline">
//               X
//             </Link></div>
//           </div>
//             </div>

//     <nav className="bg-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-black text-xl font-bold">
//           <Link href="/">Avion</Link>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8">
//           <Link href="/" className="text-black">About Us</Link>
//           <Link href="/about" className="text-black">Contact</Link>
//           <Link href="/services" className="text-black">Blog</Link>
//           {/* <div className='relative w-8 h-8'> <Search className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 '/></div>
//          <div className='relative w-8 h-8'><ShoppingCart className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 '/></div>
//          <div className='relative w-8 h-8'><CircleUserRound  className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 ' /></div>
//                 */}
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <button className="md:hidden text-black" onClick={toggleMenu}>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-600 p-4`}>
//         <Link href="/about" className="block text-white py-2">About Us</Link>
//         <Link href="/contact" className="block text-white py-2">Contact</Link>
//         <Link href="/services" className="block text-white py-2">Blog</Link>

//       </div>
//     </nav>

//             <nav className="w-full max-w-[1440px] h-[132px] bg-white mx-auto">
//                 <div className="relative w-full h-full">
//                     {/* Top Section */}
//                     <div className="absolute left-7 top-[26px]">
//                         <Search className="w-4 h-4 text-[#2A254B]" />
//                     </div>

//                     <h1 className="absolute left-1/2 -translate-x-1/2 top-5 font-clash-display text-2xl text-[#22202E]">
//                         Avion
//                     </h1>

//                     <div className="absolute right-7 top-[26px] flex gap-4">
//                         <ShoppingCart className="w-4 h-4 text-[#2A254B]" />
//                         <User className="w-4 h-4 text-[#2A254B]" />
//                     </div>

//                     {/* Divider */}
//                     <div className="absolute left-[1.94%] right-[1.81%] top-[70px] border-t border-black/10" />

//                     <div className="absolute left-1/2 -translate-x-1/2 top-[90px] flex gap-8">
//                         {[
//                             { name: "Plant pots", link: "/" },
//                             { name: "Ceramics", link: "/homev1" },
//                             { name: "Tables", link: "/productlisting" },
//                             { name: "Chairs", link: "/productsv1" },
//                             { name: "Crockery", link: "/productpage" },
//                             { name: "Tableware", link: "/cart" },
//                             { name: "Cutlery", link: "/" }
//                         ].map((item) => (
//                             <Link
//                                 key={item.name}
//                                 href={item.link}
//                                 className="font-satoshi text-base text-[#726E8D] hover:text-[#2A254B] transition-colors"
//                             >
//                                 {item.name}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </nav>

//             <div>
//                 <Image src='/lamp.png' alt='image' width={1440} height={704} />
//             </div>

//             <Features />

//             {/* Your other JSX code remains the same */}
//             <section className="p-8 bg-gray-100 mt-[80px]">
//                 {/* Your other content */}
//             </section>

//             <Footer />
//         </>
//     );
// }

// export default HomeV1;



// //src\app\homev1\page.tsx
// "use client";
// import React, { useState } from "react";
// import { CircleUserRound, Truck, X } from "lucide-react";
// import {
 
//   Search,
//   ShoppingCart,
//   User,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import Features from "@/components/features";
// import Footer from "@/components/footer";

// function HomeV1() {
//   const [isVisible] = useState(true);
//   const [quantity, setQuantity] = useState(1);

//   const incrementQuantity = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const decrementQuantity = () => {
//     setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
//   };

//   if (!isVisible) return null;
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Top Header */}
//       <div className="w-full h-12 bg-[#2A254B] text-white flex items-center justify-between px-4 md:px-[136px]">
//         <div className="flex justify-between text-center gap-2 ml-auto md:ml-[309px]">
//           Free delivery on all orders over £50 with code EASTER at checkout
//           <div className="text-right">
//             <Link href="/" className="font-semibold hover:underline">
//               X
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="bg-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <div className="text-black text-xl font-bold">
//             <Link href="/">Avion</Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             {["About Us", "Contact", "Blog"].map((item, index) => (
//               <Link
//                 key={index}
//                 href={`/${item.toLowerCase().replace(/\s/g, "")}`}
//                 className="text-black hover:text-gray-600"
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>

//           {/* Hamburger Icon for Mobile */}
//           <button className="md:hidden text-black" onClick={toggleMenu}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//             {isOpen ? 'Close Menu' : 'Open Menu'}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-gray-100 p-4">
//             {["About Us", "Contact", "Blog"].map((item, index) => (
//               <Link
//                 key={index}
//                 href={`/${item.toLowerCase().replace(/\s/g, "")}`}
//                 className="block text-black py-2 hover:text-gray-600"
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//         )}
//       </nav>
         
     
//       <nav className="w-full max-w-[1440px] bg-white mx-auto p-4">
//         <div className="flex justify-between items-center">
//           {/* Search */}
//           <Search className="w-4 h-4 text-[#2A254B]" />

//           {/* Logo */}
//           <h1 className="text-2xl font-clash-display text-[#22202E]">Avion</h1>

//           {/* Icons */}
//           <div className="flex gap-4">
//             <ShoppingCart className="w-4 h-4 text-[#2A254B]" />
//             <User className="w-4 h-4 text-[#2A254B]" />
//           </div>
//         </div>

        
      

// <div className="border-t border-black/10 my-4" />

// <div className="hidden md:flex justify-center gap-8">
//   {[
//     {name:"Plant pots",link:"/"},
//     {name:"Ceramics",link:"/homev1"},
//     {name:"Tables",link:"/productlisting"},
//     {name:"Chairs",link:"/productsv1"},
//     {name:"Crockery",link:"/productpage"},
//     {name:"Tableware",link:"/cart"},
//     {name:"Cutlery",link:"/"},

//   ].map((item) => (
//     <Link
//       key={item.name}
//       href={item.link} 
//       className="font-satoshi text-base text-[#726E8D] hover:text-[#2A254B] transition-colors"
//     >
//       {item.name}
//     </Link>
//   ))}
// </div>

// <button
//   className="md:hidden w-full flex items-center justify-center bg-gray-200 p-2 rounded"
//   onClick={toggleMenu}
// >
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-6 w-6 text-black"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     strokeWidth="2"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M4 6h16M4 12h16M4 18h16"
//     ></path>
//   </svg>
// </button>
// {isOpen && (
//   <div className="md:hidden bg-gray-100 p-4">
//     {[
//         {name:"Plant pots",link:"/"},
//         {name:"Ceramics",link:"/homev1"},
//         {name:"Tables",link:"/productlisting"},
//         {name:"Chairs",link:"/productsv1"},
//         {name:"Crockery",link:"/productpage"},
//         {name:"Tableware",link:"/cart"},
//         {name:"Cutlery",link:"/"},
    
//     ].map((item) => (
//       <Link
//         key={item.name}
//         href={item.link}  // Use the category directly for the mobile menu as well
//         className="block text-black py-2 hover:text-gray-600"
//       >
//         {item.name}
//       </Link>
//     ))}
//   </div>
// )}

//       </nav>

//       {/* Hero Section */}
//       <div>
//         <Image src="/lamp.png" alt="Lamp" width={1440} height={704} />
//       </div>

//       <Features />

//       {/* Content Section */}
//       <section className="p-8 bg-gray-100 mt-[80px]">
//         {/* Add your additional content here */}
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default HomeV1;


"use client";
import React, { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Features from "@/components/features";
import Footer from "@/components/footer";

function HomeV1() {
  const [isVisible, setIsVisible] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false); // Move useState to top

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (!isVisible) return null; // Keep the conditional rendering here

  return (
    <>
      {/* Top Header */}
      <div className="w-full h-12 bg-[#2A254B] text-white flex items-center justify-between px-4 md:px-[136px]">
        <div className="flex justify-between text-center gap-2 ml-auto md:ml-[309px]">
          Free delivery on all orders over £50 with code EASTER at checkout
          <div className="text-right">
            <Link href="/" className="font-semibold hover:underline">
              X
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-black text-xl font-bold">
            <Link href="/">Avion</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["About Us", "Contact", "Blog"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                className="text-black hover:text-gray-600"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Hamburger Icon for Mobile */}
          <button className="md:hidden text-black" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            {isOpen ? "Close Menu" : "Open Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-100 p-4">
            {["About Us", "Contact", "Blog"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                className="block text-black py-2 hover:text-gray-600"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <nav className="w-full max-w-[1440px] bg-white mx-auto p-4">
        <div className="flex justify-between items-center">
          {/* Search */}
          <Search className="w-4 h-4 text-[#2A254B]" />

          {/* Logo */}
          <h1 className="text-2xl font-clash-display text-[#22202E]">Avion</h1>

          {/* Icons */}
          <div className="flex gap-4">
            <ShoppingCart className="w-4 h-4 text-[#2A254B]" />
            <User className="w-4 h-4 text-[#2A254B]" />
          </div>
        </div>

        <div className="border-t border-black/10 my-4" />

        <div className="hidden md:flex justify-center gap-8">
          {[
            { name: "Plant pots", link: "/" },
            { name: "Ceramics", link: "/homev1" },
            { name: "Tables", link: "/productlisting" },
            { name: "Chairs", link: "/productsv1" },
            { name: "Crockery", link: "/productpage" },
            { name: "Tableware", link: "/cart" },
            { name: "Cutlery", link: "/" },
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

        <button
          className="md:hidden w-full flex items-center justify-center bg-gray-200 p-2 rounded"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <div className="md:hidden bg-gray-100 p-4">
            {[
              { name: "Plant pots", link: "/" },
              { name: "Ceramics", link: "/homev1" },
              { name: "Tables", link: "/productlisting" },
              { name: "Chairs", link: "/productsv1" },
              { name: "Crockery", link: "/productpage" },
              { name: "Tableware", link: "/cart" },
              { name: "Cutlery", link: "/" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="block text-black py-2 hover:text-gray-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div>
        <Image src="/lamp.png" alt="Lamp" width={1440} height={704} />
      </div>

      <Features />

      {/* Content Section */}
      <section className="p-8 bg-gray-100 mt-[80px]">
        {/* Add your additional content here */}
      </section>

      <Footer />
    </>
  );
}

export default HomeV1;
