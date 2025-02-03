
// "use client";

// import PostCreator from "@/components/reviews";
// import { Button } from "@/components/ui/button";
// import { ShoppingCart } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { _isSanityDocumentTypeDefinition } from "sanity";

// interface ProductCardDetailsProps {
//   searchParams: {
//     name?: string;
//     description?: string;
//     price?: number;
//     image?: string;
//     _id?:string
//   };
// }

// export default function ProductCardDetails({
//   searchParams
// }: ProductCardDetailsProps) {
//   const { name, description, price, image,_id } = searchParams;

//   const [blogId, setBlogId] = useState<string>("");

//   useEffect(() => {
//     // Fetch or set the _id dynamically
//     setBlogId("dynamic_id_from_server_or_logic");
//   }, [])

//   // Default fallback values (if any property is missing)
//   const fallbackName = "Product Name";
//   const fallbackDescription = "No description available.";
//   const fallbackPrice = "0.00";
//   const fallbackImage = "/rightmain.png"; // Replace with a valid placeholder image path

//   return (
//     <>
//     <div className="min-h-screen bg-white p-6 mt-[100px]">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
//           {/* Product Image */}
//           <div className="relative aspect-square rounded-lg bg-[#F5F5F5] p-8">
//             <Image
//               src={image || fallbackImage}
//               alt={name || fallbackName}
//               className="h-full w-full object-contain"
//               width={600}
//               height={600}
//             />
//           </div>

//           {/* Product Details */}
//           <div className="flex flex-col justify-center space-y-6 pt-6 text-black lg:pt-0">
//             <h1 className="text-4xl font-medium leading-tight">
//               {name || fallbackName}
//             </h1>
//             <p className="max-w-xl text-base leading-relaxed">
//               {description || fallbackDescription}
//             </p>
//             <div className="space-y-4">
//               <p className="text-3xl font-medium">{price || fallbackPrice}</p>
//               <Link
//                 href={{
//                   pathname: `/cart` ,
//                   query: { name, price, image, description, _id },
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
//     <hr/>
//     <h2 className="text-2xl font-bold mt-12 mb-4">comments</h2>
//     <PostCreator blog_id={_id || "default_id"} />

//     </>
//   );
// }




"use client";

import Header from "@/components/header";
import PostCreator from "@/components/reviews";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, CheckCircle, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProductCardDetailsProps {
  searchParams: {
    name?: string;
    description?: string;
    price?: number;
    image?: string;
    _id?: string;
    rating?: number;
    stock?: number;
  };
}

const relatedProducts = [
  {
    id: 1,
    name: "The Rustic Vase",
    price: 89.99,
    image: "/chairlast.png",
    description: "High-quality decent simple old look chairs.",
  },
  {
    id: 2,
    name: "The Dandy chair",
    price: 129.99,
    image: "/rightmain.png",
    description: "blue color simple chair.",
  },
  {
    id: 3,
    name: "comfort look chair",
    price: 49.99,
    image: "/simplechair.png",
    description: "Ergonomic fancy customizable fashion look.",
  },
];

export default function ProductCardDetails({ searchParams }: ProductCardDetailsProps) {
  const { name, description, price, image, _id, rating, stock } = searchParams;
  
  const [blogId, setBlogId] = useState<string>(_id || "default_id");

  useEffect(() => {
    if (!_id) {
      setBlogId("dynamic_id_from_server_or_logic");
    }
  }, [_id]);

  // Fallback Data
  const fallbackData = {
    name: "Premium Product",
    description: "This is a high-quality product with excellent durability and performance.",
    price: "99.99",
    image: "/rightmain.png", // Ensure this is a valid placeholder image
    rating: 4.5,
    stock: 15, // Default stock value
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 p-6 mt-[80px]">
      <div className="mx-auto max-w-7xl bg-white shadow-lg rounded-lg p-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg bg-[#F5F5F5] p-8 flex items-center justify-center">
            <Image
              src={image || fallbackData.image}
              alt={name || fallbackData.name}
              className="h-full w-full object-contain rounded-lg shadow-md"
              width={600}
              height={600}
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center space-y-6 pt-6 text-black lg:pt-0">
            {/* Product Name */}
            <h1 className="text-4xl font-bold">{name || fallbackData.name}</h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className={`h-5 w-5 ${index < (rating || fallbackData.rating) ? "fill-yellow-500" : "stroke-gray-400"}`} />
              ))}
              <span className="text-gray-700 text-lg">({rating || fallbackData.rating})</span>
            </div>

            {/* Description */}
            <p className="max-w-xl text-lg leading-relaxed text-gray-700">{description || fallbackData.description}</p>

            {/* Price & Availability */}
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">
                ${!isNaN(Number(price)) ? Number(price).toFixed(2) : Number(fallbackData.price).toFixed(2)}
              </p>
              <p className={`text-lg font-semibold flex items-center ${stock && stock > 0 ? "text-green-600" : "text-red-600"}`}>
                {stock && stock > 0 ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-1" /> In Stock ({stock} left)
                  </>
                ) : (
                  "Out of Stock"
                )}
              </p>
            </div>

            {/* Shipping Info */}
            <div className="flex items-center text-gray-600">
              <Truck className="h-5 w-5 mr-2" />
              <p>Free shipping within 3-5 business days</p>
            </div>

            {/* Add to Cart Button */}
            <Link href={{ pathname: `/cart`, query: { name, price, image, description, _id } }}>
              <Button className="h-12 rounded-full px-8 bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-md flex items-center justify-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add To Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4">You may also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
              {/* Fixed Image Size for Related Products */}
              <div className="relative w-full h-[250px] flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="intrinsic"
                  width={250}  // Fixed width
                  height={250} // Fixed height
                  className="rounded-lg object-contain" // Keep the aspect ratio intact
                />
              </div>

              <h3 className="mt-8 text-lg font-semibold">{product.name}</h3>
              <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>

              {/* Redirect to product details page */}
              <Link
                href={{
                  pathname: `/productsv1/${product.id}`,
                  query: {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    description: product.description,
                  },
                }}
              >
                <Button className="w-full mt-2 bg-gray-700 hover:bg-gray-800">
                  View Details
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Comments Section */}
      <hr className="my-12" />
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <PostCreator blog_id={blogId} />
    </div>
    </>
  );
}
