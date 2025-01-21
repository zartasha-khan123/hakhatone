// 'use client'
// import React from 'react';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Label } from '@/components/ui/label';
// import Link from 'next/link';
// import { CircleUserRound, Search, ShoppingCart } from 'lucide-react';
// import Image from 'next/image';
// import Footer from '@/components/footer';

// export default function Productv1() {
//   return (
//     <>
//     <nav className="bg-white p-4 shadow-md flex justify-between ">
//     <div className="container mx-auto flex justify-between items-center">
//       {/* Logo */}
//       <div className="text-black text-3xl font-bold flex items-center text-center">
//       <div className='relative w-8 h-8'> <Search className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 '/></div>
//         <h1 className='text-center'><Link href="/">Avion</Link></h1>
//         <div className='relative w-8 h-8'><ShoppingCart className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 '/></div> 
//          <div className='relative w-8 h-8'><CircleUserRound  className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 ' /></div>
               
//       </div>
//       </div>
//       </nav>
//       <div className='flex items-center justify-center gap-[16px] mt-[20px] '>
//           <nav className="  hidden md:flex items-center gap-8">
//                   <Link
//                     href={"/"}
//                     className="text-[16px] leading-[24px] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black "
//                   >
//                     Plant Pots
//                   </Link>
//                   <Link
//                     href={"/homev1"}
//                     className="text-[16px] leading-[24px] hover:text-gray-600"
//                   >
//                     Ceramics
//                   </Link>
//                   <Link
//                     href={"/productlisting"}
//                     className="text-[16px] leading-[24px] hover:text-gray-600"
//                   >
//                     Tables
//                   </Link>
//                   <Link
//                     href={"/productsv1"}
//                     className="text-[16px] leading-[24px] hover:text-gray-600"
//                   >
//                     Chairs
//                   </Link>

//                   <Link
//                     href={"/cart"}
//                     className="text-[16px] leading-[24px] hover:text-gray-600"
//                   >
//                     Crockery
//                   </Link>

//                   <Link
//                     href={"/productpage"}
//                     className="text-[16px] leading-[24px] hover:text-gray-600"
//                   >
//                     Tableware
//                   </Link>

//                   <Link
//                     href={"/"}
//                     className="text-[16px] leading-[24px] hover:text-gray-600"
//                   >
//                     Cutlery
//                   </Link>
//                   </nav>
//                   </div>
//                <div className='flex items-center justify-center mt-[29px]'>
//                 <Image src='/productimg.png' width={1440} height={209} alt='image main'/>
//                </div>

    
// <div className="flex mt-[20px]">
//   {/* Vertical Navbar */}
//   <aside className="w-[385px] bg-white p-12 ">
//     <div className="flex flex-col gap-12">
//       {/* Product Type Section */}
//       <div className="space-y-5">
//         <h3 className="text-base font-normal text-[#2A254B]" style={{ fontFamily: 'Clash Display' }}>
//           Product type
//         </h3>
//         <div className="space-y-3">
//           <div className="flex items-center space-x-3">
//             <Checkbox id="furniture" />
//             <Label htmlFor="furniture" className="text-base font-normal text-[#2A254B]">
//               Furniture
//             </Label>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Checkbox id="homeware" defaultChecked />
//             <Label htmlFor="homeware" className="text-base font-normal text-[#2A254B]">
//               Homeware
//             </Label>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Checkbox id="sofas" />
//             <Label htmlFor="sofas" className="text-base font-normal text-[#2A254B]">
//               Sofas
//             </Label>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Checkbox id="lighting" />
//             <Label htmlFor="lighting" className="text-base font-normal text-[#2A254B]">
//               Light fittings
//             </Label>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Checkbox id="accessories" />
//             <Label htmlFor="accessories" className="text-base font-normal text-[#2A254B]">
//               Accessories
//             </Label>
//           </div>
//         </div>
//       </div>

//       {/* Price Section */}
//       <div className="space-y-5">
//         <h3 className="text-base font-normal text-[#2A254B]" style={{ fontFamily: 'Clash Display' }}>
//           Price
//         </h3>
//         <div className="space-y-3">
//           <div className="flex items-center space-x-3">
//             <Checkbox id="0-100" />
//             <Label htmlFor="0-100" className="text-base font-normal text-[#2A254B]">
//               0 - 100
//             </Label>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Checkbox id="101-250" />
//             <Label htmlFor="101-250" className="text-base font-normal text-[#2A254B]">
//               101 - 250
//             </Label>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Checkbox id="250plus" />
//             <Label htmlFor="250plus" className="text-base font-normal text-[#2A254B]">
//               250 +
//             </Label>
//           </div>
//         </div>
//       </div>

//       {/* Designer Section */}
//       <div className="space-y-5">
//         <h3 className="text-base font-normal text-[#2A254B]" style={{ fontFamily: 'Clash Display' }}>
//           Designer
//         </h3>
//         <div className="space-y-3">
//           <div className="flex items-center space-x-3">
//             <Checkbox id="robert-smith" />
//             <Label htmlFor="robert-smith" className="text-base font-normal text-[#2A254B]">
//               Robert Smith
//             </Label>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Checkbox id="liam-gallagher" />
//             <Label htmlFor="liam-gallagher" className="text-base font-normal text-[#2A254B]">
//               Liam Gallagher
//             </Label>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Checkbox id="biggie-smalls" />
//             <Label htmlFor="biggie-smalls" className="text-base font-normal text-[#2A254B]">
//               Biggie Smalls
//             </Label>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Checkbox id="thom-yorke" />
//             <Label htmlFor="thom-yorke" className="text-base font-normal text-[#2A254B]">
//               Thom Yorke
//             </Label>
//           </div>
//         </div>
//       </div>
//     </div>
//   </aside>

//   {/* Cards Section */}
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ml-6">
//     {[
//       { title: 'The Dandy chair', price: '£250', img: '/rightmain.png' },
//       { title: 'Rustic Vase Set', price: '£250', img: '/milk.png' },
//       { title: 'The Silky Vase', price: '£250', img: '/3rdcard.png' },
//       { title: 'The Silky Vase', price: '£250', img: '/second.png' },
//       { title: 'The Silky Vase', price: '£250', img: '/light.png' },
//       { title: 'The Silky Vase', price: '£250', img: '/chairlast.png' },
//       { title: 'The Silky Vase', price: '£250', img: '/7card.png' },
//       { title: 'The Silky Vase', price: '£250', img: '/8card.png' },
//       { title: 'The Silky Vase', price: '£250', img: '/9card.png' },
//     ].map((product) => (
//       <div
//         key={product.title}
//         className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105"
//       >
//         <Image
//           src={product.img}
//           alt={product.title}
//           width={305} 
//           height={375} 
//           className="w-full h-[375px] object-cover rounded-md"
//         />
//         <h4 className="font-bold mt-4 mb-2">{product.title}</h4>
//         <p className="text-gray-600">{product.price}</p>
//       </div>
//     ))}
//   </div>
// </div>
// <div className="text-center mt-11 mb-[36px]">
//           <button className="bg-gray-500 hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded shadow-md transition-colors">
//             Load More
//           </button>
//         </div>

//         <Footer/>

//     </>
//   )
// }

// 'use client'
// import React from 'react';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Label } from '@/components/ui/label';
// import Link from 'next/link';
// import { CircleUserRound, Search, ShoppingCart } from 'lucide-react';
// import Image from 'next/image';
// import Footer from '@/components/footer';





// export default function Productv1() {
//   return (
//     <>
//       <nav className="bg-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-black text-3xl font-bold flex items-center space-x-4">
//             <div className="relative w-8 h-8">
//               <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
//             </div>
//             <h1 className="text-center">
//               <Link href="/">Avion</Link>
//             </h1>
//             <div className="relative w-8 h-8">
//               <ShoppingCart className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
//             </div>
//             <div className="relative w-8 h-8">
//               <CircleUserRound className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="flex justify-center mt-4 md:mt-6">
//         <nav className="hidden md:flex items-center gap-8">
//           {[ {name:"Plant pots",link:"/"},
//     {name:"Ceramics",link:"/homev1"},
//     {name:"Tables",link:"/productlisting"},
//     {name:"Chairs",link:"/productsv1"},
//     {name:"Crockery",link:"/productpage"},
//     {name:"Tableware",link:"/cart"},
//     {name:"Cutlery",link:"/"},].map((item) => (
//             <Link
//               key={item.name}
//               href={item.link}
//               className="text-base leading-6 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black hover:text-gray-600"
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       <div className="flex justify-center mt-8">
//         <Image src="/productimg.png" width={1440} height={209} alt="Main Product" />
//       </div>

//       <div className="flex flex-col md:flex-row mt-6">
//         <aside className="w-full md:w-1/4 p-6 bg-white md:shadow-md">
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-xl font-bold text-[#2A254B]">Product type</h3>
//               <div className="space-y-3">
//                 {['Furniture', 'Homeware', 'Sofas', 'Light fittings', 'Accessories'].map((item) => (
//                   <div key={item} className="flex items-center space-x-3">
//                     <Checkbox id={item.toLowerCase()} />
//                     <Label htmlFor={item.toLowerCase()} className="text-base text-[#2A254B]">
//                       {item}
//                     </Label>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-[#2A254B]">Price</h3>
//               <div className="space-y-3">
//                 {['0 - 100', '101 - 250', '250 +'].map((priceRange) => (
//                   <div key={priceRange} className="flex items-center space-x-3">
//                     <Checkbox id={priceRange.replace(/\s/g, '-').toLowerCase()} />
//                     <Label htmlFor={priceRange.replace(/\s/g, '-').toLowerCase()} className="text-base text-[#2A254B]">
//                       {priceRange}
//                     </Label>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-[#2A254B]">Designer</h3>
//               <div className="space-y-3">
//                 {['Robert Smith', 'Liam Gallagher', 'Biggie Smalls', 'Thom Yorke'].map((designer) => (
//                   <div key={designer} className="flex items-center space-x-3">
//                     <Checkbox id={designer.toLowerCase().replace(/\s/g, '-')} />
//                     <Label htmlFor={designer.toLowerCase().replace(/\s/g, '-')} className="text-base text-[#2A254B]">
//                       {designer}
//                     </Label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </aside>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-6">
//           {[
//             { title: 'The Dandy chair', price: '£250', img: '/rightmain.png' },
//             { title: 'Rustic Vase Set', price: '£250', img: '/milk.png' },
//             { title: 'The Silky Vase', price: '£250', img: '/3rdcard.png' },
//             { title: 'The Silky Vase', price: '£250', img: '/second.png' },
//             { title: 'The Silky Vase', price: '£250', img: '/light.png' },
//             { title: 'The Silky Vase', price: '£250', img: '/chairlast.png' },
//             { title: 'The Silky Vase', price: '£250', img: '/7card.png' },
//             { title: 'The Silky Vase', price: '£250', img: '/8card.png' },
//             { title: 'The Silky Vase', price: '£250', img: '/9card.png' },
//           ].map((item:any,index:number) => (
//             <Link href={`/productsv1/id?name=${item.name}&description=${item.title}&price=${item.price}&image=${item.image}`}>
//             <div
//               key={item.title}
//               className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105"
//             >
//               <Image
//                 src={item.img}
//                 alt={item.title}
//                 width={305}
//                 height={375}
//                 className="w-full h-[375px] object-cover rounded-md"
//               />
              
//               <h4 className="font-bold mt-4 mb-2">{item.title}</h4>
//               <p className="text-gray-600">{item.price}</p>
//             </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//     

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// }

//src\app\productsv1\page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Footer from '@/components/footer';
import { CircleUserRound, Heart, Search, ShoppingCart } from 'lucide-react';
import { Description } from '@radix-ui/react-alert-dialog';

export default function Productv1() {
  const products = [
    { title: 'The Dandy chair', price:  '£250', img: '/rightmain.png', description:" A sleek, stylish, and modern seating solution blending comfort with elegance."},
    { title: 'Rustic Vase Set', price:  '£250', img: '/milk.png',description:" A charming collection of earthy, handcrafted vases perfect for adding a touch of natural elegance to any space." },
    { title: 'The Silky Vase', price:  '£250', img: '/3rdcard.png',description:"A sleek and elegant vase with a smooth finish, perfect for showcasing flowers or as a standalone statement piece" },
    { title: 'The Silky Vase', price: '£250', img: '/second.png',description:"A sleek and elegant vase with a smooth finish, perfect for showcasing flowers or as a standalone statement piece" },
   { title: 'The Silky Vase', price: '£250', img: '/light.png',description:"A sleek and elegant vase with a smooth finish, perfect for showcasing flowers or as a standalone statement piece" },
    { title: 'The Silky Vase', price: '£250', img: '/chairlast.png',description:"A sleek and elegant vase with a smooth finish, perfect for showcasing flowers or as a standalone statement piece" },
     { title: 'The Silky Vase', price: '£250', img: '/7card.png',description:" A sleek, stylish, and modern seating solution blending comfort with elegance." },
     { title: 'The Silky Vase', price: '£250', img: '/8card.png',description:" A charming collection of earthy, handcrafted vases perfect for adding a touch of natural elegance to any space."  },
      { title: 'The Silky Vase', price: '£250', img: '/9card.png',description:" A charming collection of earthy, handcrafted vases perfect for adding a touch of natural elegance to any space."  },
    
  ];

     return (
       <>
    <nav className="bg-white p-4 shadow-md">
         <div className="container mx-auto flex justify-between items-center">
           <div className="text-black text-3xl font-bold flex items-center space-x-4">
             <div className="relative w-8 h-8">
               <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
             </div>
             <h1 className="text-center">
               <Link href="/">Avion</Link>
             </h1>
            <div className="relative w-8 h-8">
               <Link href="/cart"><ShoppingCart className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" /></Link>
             </div>
             <div className="relative w-8 h-8">
             <Link href="/login"><CircleUserRound className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" /></Link>
             </div>
             <div className="relative w-8 h-8">
             <Link href="/wishlist"><Heart className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" /></Link>
             </div>
           </div>
         </div>
       </nav>

       <div className="flex justify-center mt-4 md:mt-6">
        <nav className="hidden md:flex items-center gap-8">
           {[ {name:"Plant pots",link:"/"},
    {name:"Ceramics",link:"/homev1"},
    {name:"Tables",link:"/productlisting"},
    {name:"Chairs",link:"/productsv1"},
    {name:"Crockery",link:"/productpage"},
    {name:"Tableware",link:"/cart"},
    {name:"Cutlery",link:"/"},].map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-base leading-6 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black hover:text-gray-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex justify-center mt-8">
        <Image src="/productimg.png" width={1440} height={209} alt="Main Product" />
      </div>

      <div className="flex flex-col md:flex-row mt-6">
        <aside className="w-full md:w-1/4 p-6 bg-white md:shadow-md">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#2A254B]">Product type</h3>
              <div className="space-y-3">
                {['Furniture', 'Homeware', 'Sofas', 'Light fittings', 'Accessories'].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <Checkbox id={item.toLowerCase()} />
                    <Label htmlFor={item.toLowerCase()} className="text-base text-[#2A254B]">
                      {item}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#2A254B]">Price</h3>
              <div className="space-y-3">
                {['0 - 100', '101 - 250', '250 +'].map((priceRange) => (
                  <div key={priceRange} className="flex items-center space-x-3">
                    <Checkbox id={priceRange.replace(/\s/g, '-').toLowerCase()} />
                    <Label htmlFor={priceRange.replace(/\s/g, '-').toLowerCase()} className="text-base text-[#2A254B]">
                      {priceRange}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#2A254B]">Designer</h3>
              <div className="space-y-3">
                {['Robert Smith', 'Liam Gallagher', 'Biggie Smalls', 'Thom Yorke'].map((designer) => (
                  <div key={designer} className="flex items-center space-x-3">
                    <Checkbox id={designer.toLowerCase().replace(/\s/g, '-')} />
                    <Label htmlFor={designer.toLowerCase().replace(/\s/g, '-')} className="text-base text-[#2A254B]">
                      {designer}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product, index) => (
          <Link 
            key={index}
            href={{
              pathname: `/productsv1/${product.title.toLowerCase().replace(/\s/g, '-')}`,
              query: {
                name: product.title,
                description: `Description for ${product.title} ${product.description}`,
                price: product.price,
                image: product.img,
                

                
              },
            }}
          >
            <div className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105">
              <Image
                src={product.img}
                alt={product.title}
                width={305}
                height={375}
                className="w-full h-[375px] object-cover rounded-md"
              />
              <h4 className="font-bold mt-4">{product.title}</h4>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
      </div>

      <div className="text-center mt-8 mb-12">
        <button className="bg-gray-500 hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded shadow-md transition-colors">
           Load More
        </button>
       </div>
       

      {/* Footer */}
      <Footer />
      
    </>
  );
}
