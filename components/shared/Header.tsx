// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/Button";
// import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
// import { ShoppingCart } from "lucide-react"; // npm install lucide-react
// import Image from "next/image";
// export const Header = () => {
//   const { isSignedIn } = useUser();

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
//       <div className="max-w-8xl mx-auto px-6 h-20 flex items-center justify-between">
//         {/* 1. Logo (Using the Figma color) */}
//         <Link
//           href="/"
//           className="text-2xl font-black text-[#B5C92A] tracking-tighter"
//         >
//           <Image
//             src="/logo-roodmates.png"
//             alt="ROODMATES Logo"
//             width={190}
//             height={190}
//           />
//         </Link>

//         {/* 2. Navigation (Hidden on mobile, visible on desktop) */}
//         <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-700">
//           <Link href="/" className="text-[#84A221]">
//             Home
//           </Link>
//           <Link href="/about" className="hover:text-[#84A221] transition">
//             About
//           </Link>
//           <Link href="/menu" className="hover:text-[#84A221] transition">
//             Menu
//           </Link>
//           <Link href="#plans" className="hover:text-[#84A221] transition">
//             Subscription Plan
//           </Link>
//           <Link href="/contact" className="hover:text-[#84A221] transition">
//             Contact
//           </Link>
//         </nav>

//         {/* 3. Actions (Cart + Auth) */}
//         <div className="flex items-center gap-6">
//           {/* Cart Indicator from Figma */}
//           {/* <div className="flex items-center gap-1 text-sm font-bold text-gray-700 cursor-pointer hover:text-[#84A221]">
//             <ShoppingCart size={18} />
//             <span>Cart(0)</span>
//           </div> */}

//           {!isSignedIn && (
//             <div className="flex items-center gap-3">
//               <SignInButton mode="modal">
//                 <Button
//                   variant="primary"
//                   className="bg-[#B5C92A] hover:bg-[#a4b826] border-none rounded-md px-5 py-2 flex items-center gap-2"
//                 >
//                   Login
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-log-in"
//                   >
//                     <path d="m10 17 5-5-5-5" />
//                     <path d="M15 12H3" />
//                     <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
//                   </svg>
//                 </Button>
//               </SignInButton>

//               <Link href="/sign-up">
//                 <Button
//                   variant="secondary"
//                   className="border-none rounded-md px-5 py-2 flex items-center gap-2 "
//                 >
//                   Sign up
//                 </Button>
                
//               </Link>
//             </div>
//           )}

//           {isSignedIn && (
//             <div className="flex items-center gap-4">
//               <Link
//                 href="/dashboard"
//                 className="text-sm font-bold text-gray-600"
//               >
//                 My Plan
//               </Link>
//               <UserButton
//                 appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import { Menu, X, LogIn } from "lucide-react"; // Added LogIn icon for consistency
import Image from "next/image";

export const Header = () => {
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-roodmates.png"
            alt="ROODMATES Logo"
            width={150}
            height={150}
            className="sm:w-[180px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-700">
          <Link href="/" className="text-[#84A221]">Home</Link>
          <Link href="/about" className="hover:text-[#84A221] transition">About</Link>
          <Link href="/menu" className="hover:text-[#84A221] transition">Menu</Link>
          <Link href="#plans" className="hover:text-[#84A221] transition">Subscription Plan</Link>
          <Link href="/contact" className="hover:text-[#84A221] transition">Contact</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          {!isSignedIn && (
            <div className="flex items-center gap-3">
              <SignInButton mode="modal">
                <Button
                  variant="primary"
                  className="bg-[#B5C92A] text-white hover:bg-[#a4b826] border-none rounded-md px-5 py-2 flex items-center gap-2"
                >
                  Login
                  <LogIn size={20} />
                </Button>
              </SignInButton>

              <Link href="/sign-up">
                <Button
                  variant="secondary"
                  className="border-none rounded-md px-5 py-2"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          )}

          {isSignedIn && (
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="text-sm font-bold text-gray-600">
                My Plan
              </Link>
              <UserButton />
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden" 
          onClick={closeMenu}
        />
      )}

      {/* Mobile Side Drawer (Left to Right) */}
      <div className={`
        fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-40 lg:hidden
        transform transition-transform duration-300 ease-in-out pt-10 px-6
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="mb-10">
            <Link href="/">
          <Image
            src="/logo-roodmates.png"
            alt="ROODMATES Logo"
            width={150}
            height={150}
            className="sm:w-[180px]"
          />
        </Link>
            </div>
        
        <nav className="flex flex-col gap-6 text-[16px] font-semibold text-gray-700">
          <Link href="/" onClick={closeMenu} className="hover:text-[#84A221]">Home</Link>
          <Link href="/about" onClick={closeMenu} className="hover:text-[#84A221]">About</Link>
          <Link href="/menu" onClick={closeMenu} className="hover:text-[#84A221]">Menu</Link>
          <Link href="#plans" onClick={closeMenu} className="hover:text-[#84A221]">Subscription Plan</Link>
          <Link href="/contact" onClick={closeMenu} className="hover:text-[#84A221]">Contact</Link>
          
          <div className="h-[1px] bg-gray-100 my-2" />

          {!isSignedIn ? (
            <div className="flex flex-col gap-3">
              <SignInButton mode="modal">
                <Button
                  variant="primary"
                  className="bg-[#B5C92A] hover:bg-[#a4b826] border-none rounded-md w-full py-2 text-lg flex items-center justify-center gap-2"
                >
                  Login <LogIn size={20} />
                </Button>
              </SignInButton>

              <Link href="/sign-up" onClick={closeMenu}>
                <Button
                  variant="secondary"
                  className="border border-gray-200 rounded-md w-full py-2 text-lg"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <Link href="/dashboard" onClick={closeMenu} className="font-bold">My Plan</Link>
              <UserButton />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};