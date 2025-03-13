import React from "react";
import Image from "next/image";

const products = [
  {
    title: "Gradient Graphic T-shirt",
    rating: "★★★ 3.5/5",
    price: "145",
    image: "/assets/gradient-t-shirt.png",
  },
  {
    title: "Polo with Tipping Details",
    rating: "★★★★ 4.5/5",
    price: "180",
    image: "/assets/polo-w-tipping.png",
  },
  {
    title: "Black Striped T-shirt",
    rating: "★★★★ 5.0/5",
    price: "120",
    originalPrice: "150",
    discount: "30%",
    image: "/assets/black-stripped.png",
  },
  {
    title: "Skinny Fit Jeans",
    rating: "★★★ 3.5/5",
    price: "240",
    originalPrice: "260",
    discount: "20%",
    image: "/assets/skinny-jeans.png",
  },
  {
    title: "Checkered Shirt",
    rating: "★★★★ 4.5/5",
    price: "180",
    image: "/assets/checkered-shirt.png",
  },
  {
    title: "Sleeve Striped T-shirt",
    rating: "★★★★ 4.5/5",
    price: "130",
    originalPrice: "160",
    discount: "30%",
    image: "/assets/sleeve-stripped.png",
  },
  {
    title: "Vertical Striped Shirt",
    rating: "★★★★ 5.0/5",
    price: "212",
    originalPrice: "232",
    discount: "20%",
    image: "/assets/vertical-green-stripped.png",
  },
  {
    title: "Courage Graphic T-shirt",
    rating: "★★★★ 4.0/5",
    price: "145",
    image: "/assets/courage-t-shirt.png",
  },
  {
    title: "Loose Fit Bermuda Shorts",
    rating: "★★★ 3.0/5",
    price: "80",
    image: "/assets/loose-bermuda.png",
  },
];

export default function ProductImg() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-6">
      {products.map((product, index) => (
        <div key={index} className="  p-4 hover:shadow-lg transition-shadow">
          <div className="relative w-full h-60 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h3 className="text-lg font-semibold ">{product.title}</h3>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">{product.rating}</span>
          </div>
          <div className="mt-1">
            <span className="text-xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
            {product.discount && (
              <span className="ml-2 text-sm text-red-500">{product.discount}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}