
// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { FetchData } from "@/app/services/api";

// interface IProduct {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   imageUrl: string;
// }

// export default function ProductDisplay() {
//   const [products, setProducts] = useState<IProduct[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await FetchData();
//         setProducts(res);
//       } catch (error) {
//         setError((error as Error).message);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (error) return <div style={{ color: "red", textAlign: "center" }}>Error: {error}</div>;
//   if (products.length === 0) return <div style={{ textAlign: "center" }}>No products available.</div>;

//   return (
//     <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
//       {products.map((product) => (
//         <Link href={`/productdisplay/${product._id}`} key={product._id} style={{ textDecoration: "none", color: "inherit" }}>
//           <div style={{ border: "2px solid #ccc", borderRadius: "8px", padding: "16px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
//             <img src={product.imageUrl || "/default-image.jpg"} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
//             <h2 style={{ margin: "12px 0", fontSize: "1.5rem" }}>{product.name}</h2>
//             <h3 style={{ fontSize: "1.25rem", color: "#333" }}>${product.price}</h3>
//             <p style={{ fontSize: "1rem", color: "#666", marginBottom: "16px" }}>{product.description}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FetchData } from "@/services/api";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";

interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function ProductDisplay() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await FetchData();
        setProducts(res);
      } catch (error) {
        setError((error as Error).message);
      }
    };

    fetchProducts();
  }, []);

  if (error) return <div style={{ color: "red", textAlign: "center" }}>Error: {error}</div>;
  if (products.length === 0) return <div style={{ textAlign: "center" }}>No products available.</div>;

  return (
    <>
    <Header/>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px", padding: "20px" }}>
      {products.map((product) => (
        <div key={product._id} style={{ border: "2px solid #ccc", borderRadius: "8px", padding: "16px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <img
            src={product.imageUrl || "/default-image.jpg"}
            alt={product.name}
            style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
          />
          <h2 style={{ margin: "12px 0", fontSize: "1.5rem" }}>{product.name}</h2>
          <h3 style={{ fontSize: "1.25rem", color: "#333" }}>${product.price}</h3>
          <p style={{ fontSize: "1rem", color: "#666", marginBottom: "16px" }}>{product.description}</p>

          {/* View Details Button */}
          <Button
            onClick={() => router.push(`/productdisplay/${product._id}`)}
            className="w-full mt-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            View Details
          </Button>
        </div>
      ))}
    </div>
    </>
  );
}
