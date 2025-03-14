import React from "react";
import Image from "next/image";

export default function Filters() {
  return (
    <div className="w-60 pr-4 border rounded p-4 pl-2"> 
      <h2 className="text-xl font-bold pb-4 pl-2 mb-6 border-b border-black/10">Filters</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="200"
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>$0</span>
          <span>$200</span>
        </div>
      </div>

      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Colors</h3>
        <Image src="/assets/colors.png" alt="Colors" width={247} height={147} />
      </div>

      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Size</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Small</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Medium</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Large</span>
          </label>
        </div>
      </div>

    
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Dress Style</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Casual</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Formal</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Sport</span>
          </label>
        </div>
      </div>
    </div>
  );
}