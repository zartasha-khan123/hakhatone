// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"
// import { useState } from "react"
// import { UserButton } from "@clerk/nextjs"

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="bg-background shadow-sm  sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
//           <div className="flex justify-start lg:w-0 lg:flex-1">
//             <Link href="/" className="flex items-center">
//               <span className="sr-only">Your Company</span>
            
//             </Link>
//           </div>
//           <div className="-mr-2 -my-2 md:hidden">
//             <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen}>
//               <span className="sr-only">Open menu</span>
//               {isMenuOpen ? (
//                 <X className="h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="h-6 w-6" aria-hidden="true" />
//               )}
//             </Button>
//           </div>
         
//         </div>
//       </div>

//       {/* Mobile menu, show/hide based on menu state. */}
//       {isMenuOpen && (
//         <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
//           <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-background divide-y-2 divide-gray-50">
//             <div className="pt-5 pb-6 px-5">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <svg className="h-8 w-auto" fill="none" viewBox="0 0 35 32" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       fill="currentColor"
//                       d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"
//                     />
//                     <path
//                       fill="currentColor"
//                       d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"
//                     />
//                   </svg>
//                 </div>
//                 <div className="-mr-2">
//                   <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
//                     <span className="sr-only">Close menu</span>
//                     <X className="h-6 w-6" aria-hidden="true" />
//                   </Button>
//                 </div>
//               </div>
            
//             </div>
//             <div className="py-6 px-5 space-y-6">
//               <div>
              
//                 <p className="mt-6 text-center text-base font-medium text-gray-500">
//                   Existing customer?{" "}
               
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//       )}
//                 <UserButton showName />

//     </header>
//   )
// }




"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              AVION
            </Link>
          </div>

          {/* Desktop Navigation & UserButton */}
          <div className="hidden md:flex items-center space-x-6">
            <UserButton showName />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 w-64 p-4 bg-background shadow-lg md:hidden">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Menu</span>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="space-y-4">
            <UserButton showName />
          </nav>
        </div>
      )}
    </header>
  );
}
