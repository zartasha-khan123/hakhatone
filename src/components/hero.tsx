// import React from 'react'
// import Image from 'next/image'

// function Hero() {
//   return (
//     <>
//     <div className="relative mx-auto max-w-[1440px] px-5 mt-[60px]">
//       <div className="grid lg:grid-cols-2 min-h-[584px]">
//         {/* Left Column */}
//         <div className="bg-[#2A254B] p-14 flex flex-col justify-between">
//           <div className="space-y-10">
//             <h1 className='text-4xl leading-[140%] text-white max-w-[513px] mb-[40px]'>
//               The furniture brand for the future, with timeless designs
//             </h1>
            
//             <button className="inline-flex items-center px-8 py-4 text-white bg-white/15 hover:bg-white/20 transition-colors ">
//               View collection
//             </button>
//           </div>
          
//           <p className="text-lg text-white max-w-[602px] mt-20">
//             A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
//           </p>
//         </div>

//         {/* Right Column */}
//         <div className="relative bg-[#92A9B3] min-h-[584px]">
//           <Image
//             src="/rightmain.png"
//             alt="Modern black chair with wooden legs"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
  
//     </>
//   )
// }

// export default Hero




















// import { client } from '@/sanity/lib/client'
// import { Montserrat } from 'next/font/google'
// import Image from 'next/image'


// // You can replace this with Satoshi if you have access to it
// const montserrat = Montserrat({ subsets: ['latin'] })

//   const Hero = async () => {
   
//   const response = await client.fetch("*[_type == 'hero']{'image': image.asset->url}")
//   console.log(response)
//   return (
//     <div className="relative mx-auto max-w-[1440px] px-5 mt-[30px]">
//       <div className="grid lg:grid-cols-2 min-h-[584px]">
//         {/* Left Column */}
//         <div className="bg-[#2A254B] p-14 flex flex-col justify-between">
//           <div className="space-y-10">
//             <h1 className={`${montserrat.className} text-4xl leading-[140%] text-white max-w-[513px]`}>
//               The furniture brand for the future, with timeless designs
//             </h1>
            
//             <button className="inline-flex items-center px-8 py-4 text-white bg-white/15 hover:bg-white/20 transition-colors">
//               View collection
//             </button>
//           </div>
          
//           <p className="text-lg text-white max-w-[602px] mt-20">
//             A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
//           </p>
//         </div>

//         {/* Right Column */}
//         <div className="relative bg-[#92A9B3] min-h-[584px] ">
//           <Image
//             src={response[0].image}
//             alt="Modern black chair with wooden legs"
//             width={520}
//             height={584}
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero









































// 'use client'
// import { client } from '@/sanity/lib/client';
// import { Montserrat } from 'next/font/google';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// // Import font
// const montserrat = Montserrat({ subsets: ['latin'] });

//  function  Hero () {
//    const [imageUrl, setImageUrl] = useState<string | null>(null);

//    //const response = await client.fetch("*[_type == 'landingpage'][0]{'heroImg':sections[0].heroImg.asset->url,'heroHeading':sections[0].heroHeading,'heroPara':sections[0].heroPara,'heroBtn':sections[0].heroBtn,}");
//   // const{heroImg,heroHeading,heroPara,heroBtn}= await response
//   // console.log(heroImg,heroHeading,heroPara,heroBtn)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await client.fetch("*[_type == 'landingpage'][0]{'heroImg':sections[0].heroImg.asset->url,'heroHeading':sections[0].heroHeading,'heroPara':sections[0].heroPara,'heroBtn':sections[0].heroBtn,}");
//   //       setImageUrl(response[0]?.image || null);

//      const{heroImg,heroHeading,heroPara,heroBtn}= await response
//         console.log(heroImg,heroHeading,heroPara,heroBtn)
//       } catch (error) {
//         console.error('Error fetching hero data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="relative mx-auto max-w-[1440px] px-5 mt-[20px]">
//       <div className="grid lg:grid-cols-2 min-h-[584px]">
//         {/* Left Column */}
//         <div className="bg-[#2A254B] p-14 flex flex-col justify-between">
//           <div className="space-y-10">
//             <h1 className={`${montserrat.className} text-4xl leading-[140%] text-white max-w-[513px]`}>
// {heroHeading} </h1>
//             <button className="inline-flex items-center px-8 py-4 text-white bg-white/15 hover:bg-white/20 transition-colors">
//          {heroBtn}
//             </button>
//           </div>
//           <p className="text-lg text-white max-w-[602px] mt-20">
//          {heroPara}
//           </p>
//         </div>

//         {/* Right Column */}
//         <div className="relative w-full min-h-[584px]">
//           {heroImg ? (
//             <Image
//               src={heroImg}
//               alt="Modern black chair with wooden legs"
//               width={520}
//               height={584}
//               className="object-cover"
//               priority
//             />
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


//src\components\hero.tsx
'use client';
import { client } from '@/sanity/lib/client';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Import font
const montserrat = Montserrat({ subsets: ['latin'] });

function Hero() {
  // Define state variables for the hero section data
  const [heroHeading, setHeroHeading] = useState<string | null>(null);
  const [heroBtn, setHeroBtn] = useState<string | null>(null);
  const [heroPara, setHeroPara] = useState<string | null>(null);
  const [heroImg, setHeroImg] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch(
          `*[_type == 'landingpage'][0]{
            'heroImg': sections[0].heroImg.asset->url,
            'heroHeading': sections[0].heroHeading,
            'heroPara': sections[0].heroPara,
            'heroBtn': sections[0].heroBtn
          }`
        );

        // Update state with the fetched data
        setHeroHeading(response.heroHeading);
        setHeroBtn(response.heroBtn);
        setHeroPara(response.heroPara);
        setHeroImg(response.heroImg);

        console.log(response); // Debugging log to see the data
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative mx-auto max-w-[1440px] px-5 mt-[20px]">
      <div className="grid lg:grid-cols-2 min-h-[584px]">
        {/* Left Column */}
        <div className="bg-[#2A254B] p-14 flex flex-col justify-between">
          <div className="space-y-10">
            <h1 className={`${montserrat.className} text-4xl leading-[140%] text-white max-w-[513px]`}>
              {heroHeading || 'Loading...'}
            </h1>
            <Link href="/productsv1">
            <button className="inline-flex items-center px-8 py-4 text-white bg-white/15 hover:bg-white/20 transition-colors">
              {heroBtn || 'Loading...'}
            </button></Link>
          </div>
          <p className="text-lg text-white max-w-[602px] mt-20">
            {heroPara || 'Loading...'}
          </p>
        </div>

        {/* Right Column */}
        <div className="relative w-full min-h-[584px]">
          {heroImg ? (
            <Image
              src={heroImg}
              alt="Modern black chair with wooden legs"
              width={520}
              height={584}
              className="object-cover"
              priority
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
