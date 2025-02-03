

// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { FetchData } from "@/app/services/api";
// import Link from "next/link";
// import { ShoppingCart } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface IProduct {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   imageUrl: string;
//   features: string[];
//   dimensions: {
//     height: string;
//     width: string;
//     depth: string;
//   };
//   category: string;
//   quantity: number;
// }

// export default function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState<IProduct | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const allProducts = await FetchData();
//         const foundProduct = allProducts.find((item: IProduct) => item._id === id);
//         if (foundProduct) {
//           setProduct(foundProduct);
//         } else {
//           setError("Product not found");
//         }
//       } catch (error) {
//         setError((error as Error).message);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (error) return <div style={{ color: "red", textAlign: "center" }}>Error: {error}</div>;
//   if (!product) return <div style={{ textAlign: "center" }}>Loading...</div>;

//   return (
//     <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
//       <img src={product.imageUrl || "/default-image.jpg"} alt={product.name} style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "8px" }} />
//       <h1 style={{ fontSize: "2rem", margin: "20px 0" }}>{product.name}</h1>
//       <h2 style={{ fontSize: "1.5rem", color: "#333" }}>${product.price}</h2>
//       <p style={{ fontSize: "1.2rem", marginBottom: "16px" }}>{product.description}</p>

//       <h3>Features:</h3>
//       <ul>
//         {product.features.map((feature, index) => (
//           <li key={index}>{feature}</li>
//         ))}
//       </ul>

//       <p>Dimensions: {product.dimensions.height} x {product.dimensions.width} x {product.dimensions.depth}</p>
//       <p>Category: {product.category}</p>
//       <p>Stock: {product.quantity}</p>
//       <Link
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
//     </div>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { FetchData } from "@/services/api";
// import Link from "next/link";
// import { ShoppingCart } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/header";

// interface IProduct {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   imageUrl: string;
//   features: string[];
//   dimensions: {
//     height: string;
//     width: string;
//     depth: string;
//   };
//   category: string;
//   quantity: number;
// }

// export default function ProductDetails() {
//   const { id } = useParams();
//   const router = useRouter();
//   const [product, setProduct] = useState<IProduct | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const allProducts = await FetchData();
//         const foundProduct = allProducts.find((item: IProduct) => item._id === id);
//         if (foundProduct) {
//           setProduct(foundProduct);
//         } else {
//           setError("Product not found");
//         }
//       } catch (error) {
//         setError((error as Error).message);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   // Function to add item to cart (using localStorage)
//   const addToCart = () => {
//     if (!product) return;
    
//     const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
//     cartItems.push(product);
//     localStorage.setItem("cart", JSON.stringify(cartItems));

//     // Redirect to Cart Page
//     router.push("/cart");
//   };

//   if (error) return <div style={{ color: "red", textAlign: "center" }}>Error: {error}</div>;
//   if (!product) return <div style={{ textAlign: "center" }}>Loading...</div>;

//   return (
//     <>
//     <Header/>
//     <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
//       <img 
//         src={product.imageUrl || "/default-image.jpg"} 
//         alt={product.name} 
//         style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "8px" }} 
//       />
//       <h1 style={{ fontSize: "2rem", margin: "20px 0" }}>{product.name}</h1>
//       <h2 style={{ fontSize: "1.5rem", color: "#333" }}>${product.price}</h2>
//       <p style={{ fontSize: "1.2rem", marginBottom: "16px" }}>{product.description}</p>

//       <h3>Features:</h3>
//       <ul>
//         {product.features.map((feature, index) => (
//           <li key={index}>{feature}</li>
//         ))}
//       </ul>

//       <p>Dimensions: {product.dimensions.height} x {product.dimensions.width} x {product.dimensions.depth}</p>
//       <p>Category: {product.category}</p>
//       <p>Stock: {product.quantity}</p>

//       {/* Add to Cart Button */}
//       <Button onClick={addToCart} className="h-12 rounded-full px-8">
//         <ShoppingCart className="mr-2 h-5 w-5" />
//         Add To Cart
//       </Button>
//     </div>
//     </>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FetchData } from "@/services/api";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";

interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  features: string[];
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  category: string;
  quantity: number;
}

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const allProducts = await FetchData();
        const foundProduct = allProducts.find((item: IProduct) => item._id === id);
        if (!foundProduct) {
          setError("Product not found");
        }
        setProduct(foundProduct || null);
      } catch (error) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (!product) return;

    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.setItem("cart", JSON.stringify([...cartItems, product]));
    router.push("/cart");
  };

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <img
          src={product?.imageUrl || "/default-image.jpg"}
          alt={product?.name}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />

        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900">{product?.name}</h1>
          <p className="text-xl text-gray-700 mt-2">${product?.price}</p>
          <p className="text-gray-600 mt-4">{product?.description}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Features:</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            {product?.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4 text-gray-600">
          <p><strong>Dimensions:</strong> {product?.dimensions.height} x {product?.dimensions.width} x {product?.dimensions.depth}</p>
          <p><strong>Category:</strong> {product?.category}</p>
          <p><strong>Stock:</strong> {product?.quantity}</p>
        </div>

        <Button onClick={addToCart} className="mt-6 flex items-center gap-2 px-6 py-3 text-lg font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
          <ShoppingCart className="h-5 w-5" /> Add To Cart
        </Button>
      </div>
    </>
  );
}
