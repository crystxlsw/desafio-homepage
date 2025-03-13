import React from "react";
// import {
//     // NavigationMenu,
//     // NavigationMenuContent,
//     //NavigationMenuIndicator,
//     // NavigationMenuItem,
//     // NavigationMenuLink,
//     // NavigationMenuList,
//     // NavigationMenuTrigger,
//     //NavigationMenuViewport,
//   } from "@/components/ui/navigation-menu"

export default function Heading() {
    return (
        <div className="heading">
            <nav className="bg-white shadow-md flex flex-row">
                <div className="text-2xl font-bold text-black-800">
                    SHOP.CO
                </div>
                <div className="text-gray-700 hover:text-gray-900">
                    <a href="#">Shop</a>
                    <a href="#">On Sale</a>
                    <a href="#">New Arrivals</a>
                    <a href="#">Brands</a>
                </div>
            </nav>
            {/* <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>On Sale</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>New Arrivals</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Brands</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu> */}
                <figure><img src="./public/assets/cart-icon.png" alt="" /></figure>
                <figure><img src="./public/assets/search-icon.png" alt="" /></figure>
            
        </div>
    );
}