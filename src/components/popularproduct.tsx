
//src\components\popularproduct.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

function Popularproduct() {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`
          *[_type == 'landingpage'][0].sections[2]{
            'productHeading': productHeading,
            'cards': cards[] {
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

  if (!response || !response.cards || response.cards.length === 0) {
    return <div>No data available</div>;
  }

  const { productHeading, cards } = response;

  return (
    <>
      {/* Products Section */}
      <section className="p-6 sm:p-8 bg-gray-100 mt-[80px]">
        <h3 className="text-[28px] sm:text-[32px] leading-[39.36px] font-bold mb-6 sm:mb-[33px] text-center sm:text-left">
          {productHeading}
        </h3>
        <div className="text-[24px] leading-[28px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((product: any, index: number) => (
            <div
              key={product.heading}
              className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105 ${
                index === 0 ? 'col-span-full lg:col-span-2' : ''
              }`}
            >
              <Image
                src={product.image}
                alt={product.heading}
                width={index === 0 ? 630 : 305}
                height={index === 0 ? 375 : 375}
                className={`w-full object-cover rounded-md ${
                  index === 0 ? 'h-[375px]' : 'h-[200px] sm:h-[300px]'
                }`}
              />
              <h4 className="font-bold mt-4 mb-2 text-center">{product.heading}</h4>
              <p className="text-gray-600 text-center">$ {product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
         <Link href="/productsv1"> <button className="bg-[#F9F9F9] hover:bg-gray-300 text-black py-3 px-8 sm:py-4 sm:px-12 text-sm sm:text-base rounded-lg shadow-md transition-colors">
            View Collection
          </button></Link>
        </div>
      </section>
    </>
  );
}

export default Popularproduct;
