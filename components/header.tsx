import { links } from "@/lib/data";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 z-10">
      <div>
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
        </Link>
      </div>
      <div className="flex space-x-6">
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
      <div className="py-2 px-4 bg-[#3D63EA] rounded">
        <Link
          href="#contact-us"
          className="text-white text-md hover:text-white border-none"
        >
          Contact us
        </Link>
      </div>
    </nav>
  );
};

export default Header;
