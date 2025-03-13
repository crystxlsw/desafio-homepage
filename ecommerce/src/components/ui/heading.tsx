import React from "react";
import Image from "next/image";

export default function Heading() {
  return (
    <div className="bg-white border-b border-black/10">
      <nav className="container py-4 flex justify-between items-center">

        <div className="text-xl font-bold text-gray-800 ml-15">SHOP.CO</div>

        <div className="hidden md:flex space-x-6 gap-2 whitespace-nowrap ml-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">Shop</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">On Sale</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">New Arrivals</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Brands</a>
        </div>
        
        <div className="container mx-auto px-6 py-4">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
        />
      </div>

        <div className="flex items-center space-x-4">
          <div className="relative w-6 h-6">
            <Image
              src="/assets/user-tab.png"
              alt="Search"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-6 h-6">
            <Image
              src="/assets/cart-icon.png"
              alt="Cart"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </nav>

      
    </div>
  );
}