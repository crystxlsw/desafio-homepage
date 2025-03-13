import React from "react";
import Cart from "./pages/cart/page";
import Heading from "@/components/ui/heading";
import Footer from "@/components/ui/footer";
import Newsletter from "@/components/ui/newsletter";
  

function Home() {
    return (
        <div className="App">
            <Cart />
            <Heading />
            <Newsletter />
            <Footer />
        </div>
    );
}