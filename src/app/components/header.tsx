"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // To handle the mobile menu toggle

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle menu visibility on mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-4 md:px-16 bg-white shadow-md">
      <div className="flex items-center w-full max-w-[1286px] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={50}
            height={32}
            className="mr-6"
          />
          <h1 className="font-bold text-[30px]">Furniro</h1>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-[56px] ml-auto text-lg">
          <h2 className="cursor-pointer font-bold"><Link href="/">Home</Link></h2>
          <h2 className="cursor-pointer font-bold"><Link href="/shop">Shop</Link></h2>
          <h2 className="cursor-pointer font-bold"><Link href="/blog">Blog</Link></h2>
          <h2 className="cursor-pointer font-bold"><Link href="/contact">Contact</Link></h2>
        </div>

        {/* Vector Icons */}
        <div className="flex ml-auto gap-[20px]">
          <div className="w-[28px] h-[28px]">
            <Image src="/Person.png" alt="Person"  width={50}
            height={32} />
          </div>
          <div className="w-[28px] h-[28px]">
            <Image src="/Search.png" alt="Search Bar"  width={50}
            height={32} />
          </div>
          <div className="w-[28px] h-[28px]">
            <Image src="/Heart.png" alt="Wishlist"  width={50}
            height={32} />
          </div>
          <div className="w-[28px] h-[28px]">
            <Image src="/Cart.png" alt="Cart"  width={50}
            height={32} />
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center" onClick={toggleMobileMenu}>
          <Image src="/hamburger-icon.jpg" alt="Hamburger Menu"  width={50}
            height={32} className="w-[30px] h-[30px]" />
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`absolute top-0 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 mt-[100px] transition-all duration-300 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <h2 className="cursor-pointer font-bold"><Link href="/">Home</Link></h2>
        <h2 className="cursor-pointer font-bold"><Link href="/shop">Shop</Link></h2>
        <h2 className="cursor-pointer font-bold"><Link href="/blog">Blog</Link></h2>
        <h2 className="cursor-pointer font-bold"><Link href="/contact">Contact</Link></h2>
      </div>
    </div>
  );
}
