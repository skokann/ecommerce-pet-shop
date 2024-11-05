import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "@/components/Hero";
import ProductsHome from "./ProductsHome";
function HomeScreen() {
  return (
    <div className="h-screen w-full  py-10">
      <Navbar />
      <Hero />
      <div className="">
        <ProductsHome />
      </div>
    </div>
  );
}

export default HomeScreen;
