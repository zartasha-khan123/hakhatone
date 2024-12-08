// import React from 'react'

// function Product() {
//   return (
//     <>
//       {/* Products Section */}
//       <section className="p-8 bg-gray-100 mt-[80px]">
//         <h3 className="text-[32px] leading-[39.36px] font-bold mb-6">New ceramics</h3>
//         <div className="grid grid-col sm:grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             { title: 'The Dandy chair', price: '£250', img: '/rightmain.png' },
//             { title: 'Rustic Vase Set', price: '£155', img: '/milk.png' },
//             { title: 'The Silky Vase', price: '£125', img: '/second.png' },
//             { title: 'The Silky Vase', price: '£125', img: '/light.png' },

//           ].map((product) => (
//             <div key={product.title} className="bg-white p-4 rounded-lg shadow">
//               <img src={product.img} alt={product.title} width={305} height={375}  />
//               <h4 className="font-bold mb-2">{product.title}</h4>
//               <p className="text-gray-600">{product.price}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }

// export default Product


import React from 'react';
import Image from 'next/image';
function Product() {
  return (
    <>
      {/* Products Section */}
      <section className="p-8 bg-gray-100 mt-[80px]">
        <h3 className="text-[32px] leading-[39.36px] font-bold mb-[33px]">New ceramics</h3>
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
    </>
  );
}

export default Product;

