// 'use client'

// import { FetchData } from '@/services/api'
// import React, { useEffect, useState } from 'react'

// interface IProduct {
//   name: string;
//   price: number;
//   description: string;
//   slug: string;
//   features:string
//   dimensions:number
//   _id:number
//   quantity:number
// }

// function Productlist() {

//     const [product,setProduct] = useState<IProduct[]>([])
//     const [error, setError] = useState<string>()


// useEffect(() => {
//     try {
//         const sanityFetch = async () => {
//             const res = await FetchData()
//             setProduct(res);
//         }
//         sanityFetch();
//     } catch (error) {
//         setError((error as Error).message);
//     }
// }, [])

// if(error){
//     return <div> {error} </div>
// }



//   return (
//     <>
     
// {product.map((item, index: number) => {
//     return (
//         <div key={index}>
//             <h1>{item.name}</h1>
//             <h1>{item.price}</h1>
//             <h1>{item.description}</h1>
//             <h1>{item.slug}</h1>

//         </div>
//     );
// })}
//     </>
//   )
// }

// export default Productlist


// src\components\Productlist.tsx
// 'use client'

// import { FetchData } from '@/services/api'
// import React, { useEffect, useState } from 'react'

// interface IProduct {
//   name: string;
//   price: number;
//   description: string;
//   slug: string;
//   features: string[];
//   dimensions: {
//     height: string;
//     width: string;
//     depth: string;
//   };
//   _id: number;
//   quantity: number;
// }

// function Productlist() {
//   const [product, setProduct] = useState<IProduct[]>([])
//   const [error, setError] = useState<string>()

//   useEffect(() => {
//     const sanityFetch = async () => {
//       try {
//         const res = await FetchData()
//         setProduct(res)
//       } catch (error) {
//         setError((error as Error).message)
//       }
//     }
//     sanityFetch()
//   }, [])

//   if (error) {
//     return <div>{error}</div>
//   }

//   return (
//     <>
//       {product.map((item) => (
//         <div key={item._id}>
//           <h1>{item.name || 'No name available'}</h1>
//           <h2>{item.price || 'Price unavailable'}</h2>
//           <p>{item.description || 'No description'}</p>
//           <h3>{item.slug || 'No slug available'}</h3>

//           {/* Render features as a comma-separated list */}
//           <h4>Features: {item.features?.join(', ') || 'No features available'}</h4>

//           {/* Render dimensions as height, width, and depth */}
//           <p>
//             {item.dimensions
//               ? `Height: ${item.dimensions.height}, Width: ${item.dimensions.width}, Depth: ${item.dimensions.depth}`
//               : 'No dimensions available'}
//           </p>
//         </div>
//       ))}
//     </>
//   )
// }

// export default Productlist

// 'use client'

// import { FetchData } from '@/services/api'
// import React, { useEffect, useState } from 'react'

// interface IProduct {
//   name: string;
//   price: number;
//   description: string;
//   slug: string;
//   features: string[];
//   dimensions: {
//     height: string;
//     width: string;
//     depth: string;
//   };
//   _id: number;  // Make sure _id is a string
//   quantity: number;
//   imageUrl: string;
//   category: string;
// }

// function Productlist() {
//   const [product, setProduct] = useState<IProduct[]>([])
//   const [error, setError] = useState<string>()

//   useEffect(() => {
//     const sanityFetch = async () => {
//       try {
//         const res = await FetchData()
//         setProduct(res)
//       } catch (error) {
//         setError((error as Error).message)
//       }
//     }
//     sanityFetch()
//   }, [])

//   if (error) {
//     return <div>{error}</div>
//   }

//   return (
//     <>
//       {product.map((item) => (
//         <div key={item._id || "no data"}>  {/* Use _id as the key to avoid conflicts */}
//           <h1>{item.name || 'No name available'}</h1>
//           <h2>{item.price || 'Price unavailable'}</h2>
//           <p>{item.description || 'No description'}</p>
//           <h3>{item.slug || 'No slug available'}</h3>
//           <h4>Category: {item.category || 'No category available'}</h4>
//           <h4>Features: {item.features?.join(', ') || 'No features available'}</h4>
//           <p>
//             {item.dimensions
//               ? `Height: ${item.dimensions.height}, Width: ${item.dimensions.width}, Depth: ${item.dimensions.depth}`
//               : 'No dimensions available'}
//           </p>
//           {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
//         </div>
//       ))}
//     </>
//   )
// }

// export default Productlist;




'use client'

import { FetchData } from '@/services/api';
import React, { useEffect, useState } from 'react'

// Define the Product interface based on the structure of your data
interface IProduct {
  name: string;
  price: number;
  description: string;
  slug: string;
  features: string[];
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  _id: string;  // Use string for the unique identifier to avoid issues
  quantity: number;
  imageUrl: string;
  category: { name: string } | string;
}

function Productlist() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [error, setError] = useState<string | null>(null)

  // Fetch data from the server
  useEffect(() => {
    const sanityFetch = async () => {
      try {
        const res = await FetchData()
        setProducts(res)  // Set the fetched data into state
      } catch (error) {
        setError((error as Error).message)  // Handle errors
      }
    }

    sanityFetch()  // Trigger fetch when the component is mounted
  }, [])

  // Handle error display
  if (error) {
    return <div style={{ color: 'red', textAlign: 'center' }}>Error: {error}</div>
  }

  // Handle no products case
  if (products.length === 0) {
    return <div style={{ textAlign: 'center' }}>No products available.</div>
  }

  return (

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', padding: '20px'}}>
      {products.map((item) => (
        <div key={item._id} style={{ border: '2px solid #ccc', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img
            src={item.imageUrl || '/default-image.jpg'}
            alt={item.name}
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
          />
          <h2 style={{ margin: '12px 0', fontSize: '1.5rem' }}>{item.name || 'No name available'}</h2>
          <h3 style={{ fontSize: '1.25rem', color: '#333' }}>${item.price || 'Price unavailable'}</h3>
          <p style={{ fontSize: '1rem', color: '#666', marginBottom: '16px' }}>
            {item.description || 'No description available'}
          </p>

          {/* Features */}
          <h4 style={{ fontSize: '1rem', marginBottom: '8px' }}>Features:</h4>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            {item.features?.length > 0 ? (
              item.features.map((feature, index) => (
                <li key={index} style={{ fontSize: '0.9rem', color: '#555' }}>
                  {feature}
                </li>
              ))
            ) : (
              <li>No features available</li>
            )}
          </ul>

          {/* Dimensions */}
          {item.dimensions && (
            <p style={{ fontSize: '0.9rem', color: '#444' }}>
              {`Height: ${item.dimensions.height}, Width: ${item.dimensions.width}, Depth: ${item.dimensions.depth}`}
            </p>
          )}

          {/* Category */}
          <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>
          <p>Category: {typeof item.category === "object" && item.category.name 
    ?item.category.name 
    : "No category available"}</p>

          </p>

          {/* Quantity */}
          <p style={{ fontSize: '1rem', color: '#888' }}>Stock: {item.quantity || 'Out of stock'}</p>
        </div>
      ))}
    </div>

  )
}

export default Productlist;
