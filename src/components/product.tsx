// import React from 'react';
// import Image from 'next/image';
// import { client } from '@/sanity/lib/client';
// async function Product() {
//   const response = await client.fetch("*[_type == 'landingpage'][0].sections[1]{'productHeading':productHeading, 'cards':cards[]{'image':image.asset->url,'heading':heading,'price':price} }")
//   return (
//     <>
//       {/* Products Section */}
//       <section className="p-8 bg-gray-100 mt-[80px]">
//         <h3 className="text-[32px] leading-[39.36px] font-bold mb-[33px]">{response.productHeading}</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {response.cards.map((index:number) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105"
//             >
//               <Image
//                 src={response.image}
//                 alt={response.heading}
//                 width={305} 
//                 height={375} 
//                 className="w-full h-[375px] object-cover rounded-md"
//               />
//               <h4 className="font-bold mt-4 mb-2">{response.heading}</h4>
//               <p className="text-gray-600">{response.price}</p>
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
//   );
// }

// export default Product;










// 'use client'
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

// const Product = () => {
//   const [response, setResponse] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("*[_type == 'landingpage'][0].sections[1]{'productHeading':productHeading, 'cards':cards[]{'image':image.asset->url,'heading':heading,'price':price} }"); // Replace with your API endpoint
//         const data = await res.json();
//         setResponse(data);

//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!response) {
//     return <div>No data available</div>;
//   }

//   return (
//     <>
//       {/* Products Section */}
//       <section className="p-8 bg-gray-100 mt-[80px]">
//         <h3 className="text-[32px] leading-[39.36px] font-bold mb-[33px]">{response.productHeading}</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {response.cards.map((card: any, index: number) => (
//             <div
//               key={index}
//               className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105"
//             >
//               <Image
//                 src={card.image}
//                 alt={card.heading}
//                 width={305} 
//                 height={375} 
//                 className="w-full h-[375px] object-cover rounded-md"
//               />
//               <h4 className="font-bold mt-4 mb-2">{card.heading}</h4>
//               <p className="text-gray-600">{card.price}</p>
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
//   );
// };

// export default Product;


//src\components\product.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client'; // Adjust the import based on your folder structure
import Link from 'next/link';

const Product = () => {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`
          *[_type == 'landingpage'][0].sections[1]{
            'productHeading': productHeading,
            'cards': cards[]{
              'image': image.asset->url,
              'heading': heading,
              'price': price
            }
          }
        `);
        setResponse(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!response) {
    return <div>No data available</div>;
  }

  return (
    <section className="p-8 bg-gray-100 mt-[80px]">
      <h3 className="text-[32px] leading-[39.36px] font-bold mb-[33px]">{response.productHeading}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {response.cards.map((card: any, index: number) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow transform transition-transform hover:scale-105"
          >
            <Image
              src={card.image}
              alt={card.heading}
              width={305}
              height={375}
              className="w-full h-[375px] object-cover rounded-md"
            />
            <h4 className="font-bold mt-4 mb-2">{card.heading}</h4>
            <p className="text-gray-600">${card.price}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/productsv1">
        <button className="bg-[#F9F9F9] hover:bg-gray-500 text-black py-4 px-12 text-sm md:text-base rounded-lg">
          View Collection
        </button></Link>
      </div>
    </section>
  );
};

export default Product;
