import React from "react";
import Cart from "./pages/cart/page";
import Heading from "@/components/ui/heading";
import Footer from "@/components/ui/footer";
import Newsletter from "@/components/ui/newsletter";
import ProductImg from "@/components/ui/productImg";
import Filters from "@/components/ui/filters";
  

function Home() {
    return (
        <div className="App">
            <Cart />
            <Heading />
            <div className="container mx-auto py-8 flex">
                <Filters />
                <ProductImg />
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Home;