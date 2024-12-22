// import React from 'react'
// import Image from 'next/image'

// function Popularproduct() {
//   return (
//     <>
//        {/* Products Section */}
//        <section className="p-8 bg-gray-100 mt-[80px]">
//         <h3 className="text-[32px] leading-[39.36px] font-bold mb-[33px]">New ceramics</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {[
//             { title: 'The Poplar suede sofa', price: '£980', img: '/sofa.png' },
//             { title: 'The Dandy chair', price: '£250', img: '/rightmain.png' },
//             { title: 'The Dandy chair', price: '£250', img: '/chairlast.png' },
//           ].map((product) => (
//             <div
//               key={product.title}
//               className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105"
//             >
//               <Image
//                 src={product.img}
//                 alt={product.title}
//                 width={305} height={375} 
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
//     </>
//   )
// }

// export default Popularproduct


// import React from 'react';
// import Image from 'next/image';

// function Popularproduct() {
//   return (
//     <>
//       {/* Products Section */}
//       <section className="p-6 sm:p-8 bg-gray-100 mt-[80px]">
//         <h3 className="text-[28px] sm:text-[32px] leading-[39.36px] font-bold mb-6 sm:mb-[33px] text-center sm:text-left">
//           New ceramics
//         </h3>
//         <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {[
//             { title: 'The Poplar suede sofa', price: '£980', img: '/sofa.png' },
//             { title: 'The Dandy chair', price: '£250', img: '/rightmain.png' },
//             { title: 'The Dandy chair', price: '£250', img: '/chairlast.png' },
//           ].map((product) => (
//             <div
//               key={product.title}
//               className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105"
//             >
//               <Image
//                 src={product.img}
//                 alt={product.title}
//                 width={305}
//                 height={375}
//                 className="w-full h-[200px] sm:h-[300px] object-cover rounded-md"
//               />
//               <h4 className="font-bold mt-4 mb-2 text-center">{product.title}</h4>
//               <p className="text-gray-600 text-center">{product.price}</p>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <button className="bg-[#F9F9F9] hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded-lg shadow-md transition-colors">
//             View Collection
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Popularproduct;



import React from 'react';
import Image from 'next/image';

function Popularproduct() {
  const products = [

    { title: 'The Poplar suede sofa', price: '£980', img: '/sofas.png' },
    { title: 'The Dandy chair', price: '£250', img: '/rightmain.png' },
    { title: 'The Dandy chair', price: '£250', img: '/chairlast.png' },
  ];

  
  return (
           <>
      {/* Products Section */}
      <section className="p-6 sm:p-8 bg-gray-100 mt-[80px]">
        <h3 className="text-[28px] sm:text-[32px] leading-[39.36px] font-bold mb-6 sm:mb-[33px] text-center sm:text-left">
          Our Popular Products
        </h3>
        <div className=" text-[24px] leading-[28px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105 ${
                index === 0 ? 'col-span-full lg:col-span-2' : ''
              }`}
            >
              <Image
                src={product.img}
                alt={product.title}
                width={index === 0 ? 630 : 305}
                height={index === 0 ? 375 : 375}
                className={`w-full object-cover rounded-md ${
                  index === 0 ? 'h-[375px]' : 'h-[200px] sm:h-[300px]'
                }`}
              />
              <h4 className="font-bold mt-4 mb-2 text-center">{product.title}</h4>
              <p className="text-gray-600 text-center">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-[#F9F9F9] hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded-lg shadow-md transition-colors">
            View Collection
          </button>
        </div>
      </section>
    </>
  );
}

export default Popularproduct;
