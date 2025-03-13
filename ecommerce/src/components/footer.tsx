import React from "react";

export default function Footer() {
    return (
        <div className="w-full flex-1 grid grid-cols-2 md:grid-cols-5 md gap-y-8 border-b border-black/10 pb-8">
            <div className="">
                <p className="text-3xl font-bold md:w-1/3">SHOP.CO</p>
                <p className="text-sm opacity-60">We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>
                <figure><img src="null" alt="" /></figure>
            </div>
            <div className="flex gap-15 ml-50 ">
                <ul className="">
                    <li className="uppercase text-sm font-medium">Company</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Works</li>
                    <li>Career</li>
                </ul>
                <ul className="">
                    <li className="uppercase text-sm font-medium">Help</li>
                    <li>Custumer Support</li>
                    <li>Delivery Details</li>
                    <li>Teams & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
                <ul className="">
                    <li className="uppercase text-sm font-medium">FAQ</li>
                    <li>Account</li>
                    <li>Manage Deliveries</li>
                    <li>Orders</li>
                    <li>Payments </li>
                </ul>
                <ul className="">
                    <li className="uppercase text-sm font-medium">Resources</li>
                    <li>Free eBooks</li>
                    <li>Development Tutorial</li>
                    <li>How to - Blog</li>
                    <li>Youtube Playlist</li>
                </ul>
            </div>
            
        </div>
    );
}