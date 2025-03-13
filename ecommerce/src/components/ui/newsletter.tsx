import React from "react";
import Image from "next/image";

export default function Newsletter() {
    return (
        <div className="w-full bg-black text-white rounded-2xl p-6 md:p-12 flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-0 md:w-1/2">Stay up to date about our latest offers</h1>
            <form className="flex flex-col space-y-4 md:flex-col w-full md:w-1/3 md:space-y-0 mt-4 gap-2">
                <div className="flex items-center bg-white rounded-full px-4 h-11">
                    <Image 
                    src="/assets/email-icon.png" alt="email icon" className="mr-3" width={24} height={24}/>
                    <input className="w-full outline-none text-sm text-black p-2" type="email" placeholder="Enter your email address"/>
                </div>
                <button className="w-full h-12 bg-white text-black font-semibold rounded-full text-sm md:flex items-center justify-center" type="submit">Subscribe to newsletter</button>
            </form>
        </div>
    );
}
