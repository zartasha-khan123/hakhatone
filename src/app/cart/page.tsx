// import React from 'react'
// import Image from 'next/image'
// import { Minus, Plus } from 'lucide-react'
// import Header from '@/components/header'
// import Footer from '@/components/footer'

// function Cart() {
//   return (
//     <>
//       <Header/>

//     <div className="w-full bg-[#F9F9F9] p-16">
//       <h1 className="text-4xl font-normal text-[#2A254B] mb-12">Your shopping cart</h1>
      
//       <div className="flex justify-between mb-8 text-sm font-normal text-[#2A254B]">
//         <span>Product</span>
//         <span className="mr-48">Quantity</span>
//         <span>Total</span>
//       </div>
      
//       <hr className="border-[#EBE8F4] mb-8" />
      
//       {/* Product One */}
//       <div className="flex justify-between items-center mb-8">
//         <div className="flex gap-6">
//           <Image src="/second.png" alt="Graystone vase" width={109} height={134} className="object-cover" />
//           <div>
//             <h4 className="text-xl font-normal text-[#2A254B] mb-2">Graystone vase</h4>
//             <p className="text-sm text-[#2A254B] mb-2">A timeless ceramic vase with a tri color grey glaze.</p>
//             <span className="text-base text-[#2A254B]">£85</span>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 bg-[#F9F9F9] px-4 py-3 mr-36">
//           <Minus className="text-[#EBE8F4] cursor-pointer" />
//           <span className="text-base text-[#2A254B]">1</span>
//           <Plus className="text-[#EBE8F4] cursor-pointer" />
//         </div>
//         <span className="text-lg text-[#2A254B]">£85</span>
//       </div>
      
//       {/* Product Two */}
//       <div className="flex justify-between items-center mb-8">
//         <div className="flex gap-6">
//           <Image src="/plant.png" alt="Basic white vase" width={109} height={134} className="object-cover" />
//           <div>
//             <h4 className="text-xl font-normal text-[#2A254B] mb-2">Basic white vase</h4>
//             <p className="text-sm text-[#2A254B] mb-2">Beautiful and simple this is one for the classics</p>
//             <span className="text-base text-[#2A254B]">£125</span>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 bg-[#F9F9F9] px-4 py-3 mr-36">
//           <Minus className="text-[#EBE8F4] cursor-pointer" />
//           <span className="text-base text-[#2A254B]">1</span>
//           <Plus className="text-[#EBE8F4] cursor-pointer" />
//         </div>
//         <span className="text-lg text-[#2A254B]">£125</span>
//       </div>
      
//       <hr className="border-[#EBE8F4] mb-8" />
      
//       <div className="flex flex-col items-end">
//         <div className="flex gap-4 items-center mb-3">
//           <span className="text-xl text-[#4E4D93]">Subtotal</span>
//           <span className="text-2xl text-[#2A254B]">£210</span>
//         </div>
//         <p className="text-sm text-[#4E4D93] mb-6">Taxes and shipping are calculated at checkout</p>
//         <button className="bg-[#2A254B] text-white px-8 py-4">Go to checkout</button>
//       </div>
//     </div>
  

// <Footer/>

//     </>
//   )
// }

// export default Cart
