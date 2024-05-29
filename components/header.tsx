"use client"
import { links } from "@/lib/data";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 z-10">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </Link>
      </div>
      <div className="hidden md:flex space-x-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.hash}
            className="text-gray-800 hover:text-gray-600"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="hidden md:block py-2 px-4 bg-[#3D63EA] rounded">
        <Link
          href="#contact-us"
          className="text-white text-md hover:text-white border-none"
        >
          Contact us
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-800 focus:outline-none"
          onClick={handleMenuToggle}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.hash}
                className="text-gray-800 hover:text-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="py-2 px-4 bg-[#3D63EA] rounded">
              <Link
                href="#contact-us"
                className="text-white text-md hover:text-white border-none"
                onClick={() => setMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
