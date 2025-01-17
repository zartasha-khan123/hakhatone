// // 'use client'
// // import React from 'react'
// // import { useState } from 'react';
// // import Link from 'next/link';
// // import { CircleUserRound, Search, ShoppingCart } from 'lucide-react';
// // import Image from 'next/image';
// // import Footer from '@/components/footer';


// // function Productpage() {
  
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (  <>
// //     <div className="w-full h-12 bg-[#2A254B] text-white flex items-center justify-between px-[136px]">
// //           {/* content-1 */}
// //           <div className="flex justify-between text-center gap-2  ml-[309px]">
// //             Free delivery on all orders over £50 with code easter checkout 
// //             <div className='text-right'> <Link href="/" className=" font-semibold hover:underline">
// //               X
// //             </Link></div>
// //           </div>
// //             </div>
          
       
          
// //     <nav className="bg-white p-4 shadow-md">
// //       <div className="container mx-auto flex justify-between items-center">
// //         {/* Logo */}
// //         <div className="text-black text-xl font-bold">
// //           <Link href="/">Avion</Link>
// //         </div>

// //         {/* Desktop Menu */}
// //         <div className="hidden md:flex space-x-8">
// //           <Link href="/" className="text-black">About Us</Link>
// //           <Link href="/about" className="text-black">Contact</Link>
// //           <Link href="/services" className="text-black">Blog</Link>
// //           <div className='relative w-8 h-8'> <Search className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 '/></div>
// //          <div className='relative w-8 h-8'><ShoppingCart className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 '/></div> 
// //          <div className='relative w-8 h-8'><CircleUserRound  className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 ' /></div>
               
// //         </div>

// //         {/* Hamburger Icon for Mobile */}
// //         <button className="md:hidden text-black" onClick={toggleMenu}>
// //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
// //             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
// //           </svg>
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-600 p-4`}>
// //         <Link href="/about" className="block text-white py-2">About Us</Link>
// //         <Link href="/contact" className="block text-white py-2">Contact</Link>
// //         <Link href="/services" className="block text-white py-2">Blog</Link>

// //       </div>
// //     </nav>
// //     <div className='flex items-center justify-center gap-[16px] mt-[20px] '>
// //           <nav className="  hidden md:flex items-center gap-8">
// //                   <Link
// //                     href={"/"}
// //                     className="text-[16px] leading-[24px] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black "
// //                   >
// //                     Plant Pots
// //                   </Link>
// //                   <Link
// //                     href={"/"}
// //                     className="text-[16px] leading-[24px] hover:text-gray-600"
// //                   >
// //                     Ceramics
// //                   </Link>
// //                   <Link
// //                     href={"/homev1"}
// //                     className="text-[16px] leading-[24px] hover:text-gray-600"
// //                   >
// //                     Tables
// //                   </Link>
// //                   <Link
// //                     href={"/productlisting"}
// //                     className="text-[16px] leading-[24px] hover:text-gray-600"
// //                   >
// //                     Chairs
// //                   </Link>

// //                   <Link
// //                     href={"/productsv1"}
// //                     className="text-[16px] leading-[24px] hover:text-gray-600"
// //                   >
// //                     Crockery
// //                   </Link>

// //                   <Link
// //                     href={"/cart"}
// //                     className="text-[16px] leading-[24px] hover:text-gray-600"
// //                   >
// //                     Tableware
// //                   </Link>

// //                   <Link
// //                     href={"/"}
// //                     className="text-[16px] leading-[24px] hover:text-gray-600"
// //                   >
// //                     Cutlery
// //                   </Link>
// //                   </nav>
// //                   </div>

// //                   <div>
// //                     <div className="flex flex-col items-center justify-center mt-[80px] font-serif text-[#2A254B] width-[704px]">
// //                         <h1 className='text-[50px] leading-[70px]'>A brand built on the love of craftmanship,
// //                         <br/> quality and outstanding customer service</h1>

// //                     </div>
// //                   </div>

// //          <section className=" mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-8 p-8 ">
// //         <div className="flex flex-col justify-center">
// //           <h2 className="text-[24px] text-black leading-[33.6px] md:text-5xl font-sans mb-4">
// //           From a studio in London to a global brand with
// //           over 400 outlets
// //           </h2>
// //           <p className="mb-6 text-gray-800 text-[16px] leading-[21.5px] mt-[25px]">
// //           When we started Avion, the idea was simple. Make high quality furniture affordable and available 
// //           for the mass market. <br/><br/><br/>
// //           Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design 
// //           so our Chelsea boutique become the hotbed for the London interior design community.
// //           </p>
          
// //         </div>
// //         <div>
// //           <Image
// //             src="/rightpink.png"
// //             alt="pink Chair"
// //             width={720} height={603}
// //             className="w-full h-auto object-cover rounded-lg"/>
          
// //         </div>
// //         <div className="text-left mt-10">
// //           <button className="bg-[#F9F9F9] hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded-lg shadow-md transition-colors">
// //             Get in touch
// //           </button>
// //         </div>
// //       </section>

// //       <section className=" mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
// //       <div>
// //           <Image
// //             src="/imagepink.png"
// //             alt="Modern Chair"
// //             width={720}
// //             height={603}
// //           />
// //           </div>
        
// //         <div className="flex flex-col justify-center">
// //           <h2 className=" text-[#2A254B] text-[32px] leading-[44.8px] md:text-5xl font-sans mb-4">
// //           Our service isnt just personal, its actually
// //           hyper personally exquisite
// //           </h2>
         
// //           <p className="mt-[30px] text-[#2A254B]">
// //           When we started Avion, the idea was simple. Make high quality furniture affordable and available 
// //           for the mass market. <br/><br/><br/>
// //           Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design 
// //           so our Chelsea boutique become the hotbed for the London interior design community.
// //           </p>
// //           <div className="text-left mt-[176px]">
// //           <button className="bg-[#F9F9F9] hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded shadow-md transition-colors">
// // Get in touch          </button>
// //         </div>
// //         </div>
      
// //       </section>

// //       <div className="p-8 mt-[60px]">
// //         <h3 className=" text-[40px] leading-[33.6px] text-xl font-bold mb-[80px] text-center">What makes our brand different</h3>
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
// //           {[
// //             {
// //               title: 'Next day as standard',
// //               desc: 'Order before 3pm and get your order the next day as standard.',
// //               src:'/delivery.png',
// //             },
// //             {
// //               title: 'Made by true artisans',
// //               desc: 'Handmade crafted goods made with real passion and craftsmanship.',
// //               src:'/check.png',
// //             },
// //             {
// //               title: 'Unbeatable prices',
// //               desc: 'For our materials and quality you won $apos t find better prices anywhere.',
// //               src:'/purchase.png',
// //             },
// //             {
// //               title: 'Recycled packaging',
// //               desc: 'We use 100% recycled packaging to ensure our footprint is manageable.',
// //               src:'/spot.png',
// //             },


// //           ].map((feature) => (
// //             <div key={feature.title} className="text-center">
// //              <Image src={feature.src} alt={feature.title} width={24} height={24}/>
// //               <h4 className="font-bold text-lg mb-2 ">{feature.title}</h4>
// //               <p className="text-gray-600">{feature.desc}</p>
// //             </div>


// //           ))}
// //         </div>
// //         </div>

// // <section className="relative mt-12 max-w-[1440px] mx-auto h-[444px] mb-0">
// //   <Image
// //     src="/orange.png"
// //     alt="Background Image"
// //     layout="fill"
// //     objectFit="cover"
// //     className="rounded-lg"
// //   />

// //   <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6">
// //     <br/>
// //     <br/>
// //     <br/>
// //     <br/>
// //     <br/>
// //     <br/>
// //     <div className="flex items-center w-3/4 max-w-md mt-6">
// //       <input
// //         type="email"
// //         placeholder="Enter your email"
// //         className="flex-1 p-3 text-gray-800 rounded-l- shadow-md focus:outline-none focus:ring-2 focus:ring-[#2A254B]"
// //       />
// //       <button className="px-6 py-3 text-white bg-[#2A254B] rounded-r-lg hover:bg-blue-600">
// //         Sign up
// //       </button>
// //     </div>
// //   </div>
// // </section>



// //       <Footer/>
// //     </>
// //   );
// // };


    


// // export default Productpage



// 'use client'
// import React, { useState } from 'react'
// import Link from 'next/link'
// import { CircleUserRound, Search, ShoppingCart } from 'lucide-react'
// import Image from 'next/image'
// import Footer from '@/components/footer'

// function Productpage() {
  
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <>
//       {/* Top Notification Bar */}
//       <div className="w-full h-12 bg-[#2A254B] text-white flex items-center justify-between px-4 md:px-[136px]">
//         <div className="flex justify-between text-center gap-2">
//           Free delivery on all orders over £50 with code easter checkout 
//           <div className='text-right'>
//             <Link href="/" className="font-semibold hover:underline">
//               X
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Navbar */}
//       <nav className="bg-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <div className="text-black text-xl font-bold">
//             <Link href="/">Avion</Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             <Link href="/" className="text-black">About Us</Link>
//             <Link href="/about" className="text-black">Contact</Link>
//             <Link href="/services" className="text-black">Blog</Link>
//             <div className="relative w-8 h-8">
//               <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
//             </div>
//             <div className="relative w-8 h-8">
//               <ShoppingCart className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
//             </div>
//             <div className="relative w-8 h-8">
//               <CircleUserRound className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
//             </div>
//           </div>

//           {/* Hamburger Icon for Mobile */}
//           <button className="md:hidden text-black" onClick={toggleMenu}>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black text-white p-4`}>
//           <Link href="/productlisting" className="block text-white py-2">About Us</Link>
//           <Link href="/cart" className="block text-white py-2">Contact</Link>
//           <Link href="/homev1" className="block text-white py-2">Blog</Link>
//         </div>
//       </nav>

//       {/* Category Navigation */}
//       <div className="flex items-center justify-center gap-[16px] mt-[20px] bg-black">
//         <nav className="hidden md:flex items-center gap-8">
//           {['Plant Pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery'].map((category, index) => (
//             <Link key={index} href={`/${category.toLowerCase().replace(' ', '')}`} className="text-[16px] leading-[24px] hover:text-gray-600 relative">
//               {category}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div>
//         <div className="flex flex-col items-center justify-center mt-[80px] font-serif text-[#2A254B] text-center">
//           <h1 className="text-[50px] leading-[70px]">A brand built on the love of craftsmanship, quality and outstanding customer service</h1>
//         </div>
//       </div>

//       {/* Section 1 */}
//       <section className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
//         <div className="flex flex-col justify-center">
//           <h2 className="text-[24px] text-black leading-[33.6px] md:text-5xl font-sans mb-4">
//             From a studio in London to a global brand with over 400 outlets
//           </h2>
//           <p className="mb-6 text-gray-800 text-[16px] leading-[21.5px] mt-[25px]">
//             When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
//             Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
//           </p>
//         </div>
//         <div>
//           <Image src="/rightpink.png" alt="pink Chair" width={720} height={603} className="w-full h-auto object-cover rounded-lg" />
//         </div>
//         <div className="text-left mt-10">
//           <button className="bg-[#F9F9F9] hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded-lg shadow-md transition-colors">
//             Get in touch
//           </button>
//         </div>
//       </section>

//       {/* Section 2 */}
//       <section className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
//         <div>
//           <Image src="/imagepink.png" alt="Modern Chair" width={720} height={603} />
//         </div>
//         <div className="flex flex-col justify-center">
//           <h2 className="text-[#2A254B] text-[32px] leading-[44.8px] md:text-5xl font-sans mb-4">
//             Our service isn't just personal, it's actually hyper-personally exquisite
//           </h2>
//           <p className="mt-[30px] text-[#2A254B]">
//             When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
//             Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
//           </p>
//           <div className="text-left mt-[176px]">
//             <button className="bg-[#F9F9F9] hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded shadow-md transition-colors">
//               Get in touch
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <div className="p-8 mt-[60px]">
//         <h3 className="text-[40px] leading-[33.6px] text-xl font-bold mb-[80px] text-center">What makes our brand different</h3>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {[
//             {
//               title: 'Next day as standard',
//               desc: 'Order before 3pm and get your order the next day as standard.',
//               src: '/delivery.png',
//             },
//             {
//               title: 'Made by true artisans',
//               desc: 'Handmade crafted goods made with real passion and craftsmanship.',
//               src: '/check.png',
//             },
//             {
//               title: 'Unbeatable prices',
//               desc: 'For our materials and quality you won’t find better prices anywhere.',
//               src: '/purchase.png',
//             },
//             {
//               title: 'Recycled packaging',
//               desc: 'We use 100% recycled packaging to ensure our footprint is manageable.',
//               src: '/spot.png',
//             },
//           ].map((feature) => (
//             <div key={feature.title} className="text-center">
//               <Image src={feature.src} alt={feature.title} width={24} height={24} />
//               <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
//               <p className="text-gray-600">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Email Signup */}
//       <section className="relative mt-12 max-w-[1440px] mx-auto h-[444px] mb-0">
//         <Image src="/orange.png" alt="Background Image" layout="fill" objectFit="cover" className="rounded-lg" />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6">
//           <div className="flex items-center w-3/4 max-w-md mt-6">
//             <input type="email" placeholder="Enter your email" className="flex-1 p-3 text-gray-800 rounded-l- shadow-md focus:outline-none focus:ring-2 focus:ring-[#2A254B]" />
//             <button className="px-6 py-3 text-white bg-[#2A254B] rounded-r-lg hover:bg-blue-600">
//               Sign up
//             </button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   )
// }

// export default Productpage


//src\app\productpage\page.tsx
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { CircleUserRound, Search, ShoppingCart, X } from 'lucide-react'
import Image from 'next/image'
import Footer from '@/components/footer'

function Productpage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (   <>
      {/* Top Notification Bar */}
      <div className="w-full h-12 bg-[#2A254B] text-white flex items-center justify-between px-[136px]">
          {/* content-1 */}
          <div className="flex justify-between text-center gap-2  ml-[309px]">
            Free delivery on all orders over £50 with code easter checkout 
            <div className='text-right '> <Link href="/cart" className=" font-semibold hover:underline">
              X
            </Link></div>
          </div>
            </div>
    

      {/* Navbar */}
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-black text-xl font-bold">
            <Link href="/">Avion</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-black">About Us</Link>
            <Link href="/contactus" className="text-black">Contact</Link>
            <Link href="/productsv1" className="text-black">Blog</Link>
            <div className="relative w-8 h-8">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <div className="relative w-8 h-8">
              <ShoppingCart className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <div className="relative w-8 h-8">
              <CircleUserRound className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button className="md:hidden text-black" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
         <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-600 p-4`}>
          <Link href="/about" className="block text-white py-2">About Us</Link>
          <Link href="/contact" className="block text-white py-2">Contact</Link>
          <Link href="/services" className="block text-white py-2">Blog</Link>
        </div>
      </nav>

     
      <nav className="h-20 w-full bg-white px-6 lg:px-20 flex items-center justify-center relative text-center">

         <button
          className="lg:hidden text-2xl text-[#22202E] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <div className="w-6 h-1 bg-[#22202E] mb-2"></div>}

        </button>

        {/* Navigation Links */}
        <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} absolute lg:static top-20 left-1/2 transform -translate-x-1/2 lg:translate-x-0 bg-white w-full lg:w-auto lg:flex-row flex-col items-center gap-6 lg:gap-8 text-center`}>
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
              className="font-satoshi text-base text-[#726E8D] hover:text-[#2A254B] transition-colors text-center"
            >
              {item.name}
            </Link>
          ))}
        </div>
        </nav>

      {/* Main Content */}
      <div>
        <div className="flex flex-col items-center justify-center mt-[80px] font-serif text-[#2A254B] text-center">
          <h1 className="text-[50px] leading-[70px]">A brand built on the love of craftsmanship, quality and outstanding customer service</h1>
        </div>
      </div>

      {/* Section 1 */}
      <section className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-[24px] text-black leading-[33.6px] md:text-5xl font-sans mb-4">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="mb-6 text-gray-800 text-[16px] leading-[21.5px] mt-[25px]">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
        </div>
        <div>
          <Image src="/rightpink.png" alt="pink Chair" width={720} height={603} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="text-left mt-10">
          <button className="bg-[#F9F9F9] hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded-lg shadow-md transition-colors">
            Get in touch
          </button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div>
          <Image src="/imagepink.png" alt="Modern Chair" width={720} height={603} />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-[#2A254B] text-[32px] leading-[44.8px] md:text-5xl font-sans mb-4">
            Our service isn&apos;t just personal, it&apos;s actually hyper-personally exquisite
          </h2>
          <p className="mt-[30px] text-[#2A254B]">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <div className="text-left mt-[176px]">
            <button className="bg-[#F9F9F9] hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded shadow-md transition-colors">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="p-8 mt-[60px]">
        <h3 className="text-[40px] leading-[33.6px] text-xl font-bold mb-[80px] text-center">What makes our brand different</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[{
            title: 'Next day as standard',
            desc: 'Order before 3pm and get your order the next day as standard.',
            src: '/delivery.png',
          },
          {
            title: 'Made by true artisans',
            desc: 'Handmade crafted goods made with real passion and craftsmanship.',
            src: '/check.png',
          },
          {
            title: 'Unbeatable prices',
            desc: 'For our materials and quality you won’t find better prices anywhere.',
            src: '/purchase.png',
          },
          {
            title: 'Recycled packaging',
            desc: 'We use 100% recycled packaging to ensure our footprint is manageable.',
            src: '/spot.png',
          }].map((feature) => (
            <div key={feature.title} className="text-center">
              <Image src={feature.src} alt={feature.title} width={24} height={24} />
              <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

  
<section className="w-full bg-gray-100 py-12">
  <div className="relative mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] h-[300px] sm:h-[350px] md:h-[444px] rounded-lg overflow-hidden">
    {/* Background Image */}
    <Image
      src="/orange.png"
      alt="Background Image"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      className="rounded-lg"
    />

     <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 space-y-4 mt-[50px]">
     

      <div className="flex flex-col  sm:flex-row items-center w-full max-w-sm mt-[80px] space-y-3 sm:space-y-0 sm:space-x-2">
        
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 text-gray-800 rounded-md sm:rounded-l-md sm:rounded-r-none shadow-md focus:outline-none focus:ring-2 focus:ring-[#2A254B] w-full"
        />

        <button className="w-full sm:w-auto px-6 py-3 text-white bg-[#2A254B] rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-blue-600 transition-all">
          Sign up
        </button>
      </div>
      </div>
    </div>
</section>
      <Footer />
      </>
 )
 }

export default Productpage
