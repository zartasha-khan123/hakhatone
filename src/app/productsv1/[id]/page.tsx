// import { Button } from "@/components/ui/button"
// import { ShoppingCart } from 'lucide-react'
// import Image from 'next/image'
// import Link from "next/link"

// export default async function ProductCardDetails({searchParams} : {searchParams: Promise<{
//   name: string,
//   description: string,
//   price: number,
//   image: string
// }>}) 

// {

//   const {name, description, price, image} = await searchParams

//   return (
//     <div className="min-h-screen bg-white p-6 mt-[100px]">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
//           {/* Product Image */}
//           <div className="relative aspect-square rounded-lg bg-[#F5F5F5] p-8">
//             <Image
//               src={image}
//               alt="The candy chair"
//               className="h-full w-full object-contain"
//               width={600}
//               height={600}
//             />
//           </div>

//           {/* Product Details */}
//           <div className="flex flex-col justify-center space-y-6 pt-6 text-black lg:pt-0">
//             <h1 className="font-poppins text-4xl font-medium leading-tight md:text-5xl">
//               {name}
//             </h1>

//             <p className="max-w-xl text-base leading-relaxed">
//               {description}
//             </p>

//             <div className="space-y-4">
//               <p className="font-poppins text-3xl font-medium md:text-4xl">₹ {price.toLocaleString()}.00</p>
//               <div className="mt-10">
//              <Link href={`/cart?name=${name}&price=${price}&image=${image}&description=${description}`}> 
//                 <Button className="h-12 rounded-full px-8" size="lg">
//                   <ShoppingCart className="mr-2 h-5 w-5" />
//                   Add To Cart
//                 </Button>
//                </Link> 
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


//src\app\productsv1\[id]\page.tsx
// import { Button } from '@/components/ui/button';
// import { ShoppingCart } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function ProductCardDetails({ searchParams }: { searchParams: Record<string, string> }) {
//   const { name, description, price, image } = searchParams;


  
//   return (
//     <div className="min-h-screen bg-white p-6 mt-[100px]">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
//           {/* Product Image */}
//           <div className="relative aspect-square rounded-lg bg-[#F5F5F5] p-8">
//             <Image
//               src={image}
//               alt={name}
//               className="h-full w-full object-contain"
//               width={600}
//               height={600}
//             />
//           </div>

//           {/* Product Details */}
//           <div className="flex flex-col justify-center space-y-6 pt-6 text-black lg:pt-0">
//             <h1 className="text-4xl font-medium leading-tight">{name}</h1>
//             <p className="max-w-xl text-base leading-relaxed">{description}</p>
//             <div className="space-y-4">
//               <p className="text-3xl font-medium">£{price}</p>
//               <Link
//                 href={{
//                   pathname: '/cart1',
//                   query: { name, price, image, description },
//                 }}
//               >
//                 <Button className="h-12 rounded-full px-8">
//                   <ShoppingCart className="mr-2 h-5 w-5" />
//                   Add To Cart
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import PostCreator from "@/components/reviews";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { _isSanityDocumentTypeDefinition } from "sanity";

interface ProductCardDetailsProps {
  searchParams: {
    name?: string;
    description?: string;
    price?: string;
    image?: string;
    _id?:string
  };
}

export default function ProductCardDetails({
  searchParams
}: ProductCardDetailsProps) {
  const { name, description, price, image,_id } = searchParams;

  const [blogId, setBlogId] = useState<string>("");

  useEffect(() => {
    // Fetch or set the _id dynamically
    setBlogId("dynamic_id_from_server_or_logic");
  }, [])

  // Default fallback values (if any property is missing)
  const fallbackName = "Product Name";
  const fallbackDescription = "No description available.";
  const fallbackPrice = "0.00";
  const fallbackImage = "/rightmain.png"; // Replace with a valid placeholder image path

  return (
    <>
    <div className="min-h-screen bg-white p-6 mt-[100px]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg bg-[#F5F5F5] p-8">
            <Image
              src={image || fallbackImage}
              alt={name || fallbackName}
              className="h-full w-full object-contain"
              width={600}
              height={600}
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center space-y-6 pt-6 text-black lg:pt-0">
            <h1 className="text-4xl font-medium leading-tight">
              {name || fallbackName}
            </h1>
            <p className="max-w-xl text-base leading-relaxed">
              {description || fallbackDescription}
            </p>
            <div className="space-y-4">
              <p className="text-3xl font-medium">£{price || fallbackPrice}</p>
              <Link
                href={{
                  pathname: `/cart` ,
                  query: { name, price, image, description, _id },
                }}
              >
                <Button className="h-12 rounded-full px-8">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add To Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <h2 className="text-2xl font-bold mt-12 mb-4">comments</h2>
    <PostCreator blog_id={_id || "default_id"} />

    </>
  );
}
