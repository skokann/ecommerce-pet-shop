import React from "react";
import ViewMoreButton from "@/components/Products/ViewMoreButton";
import Products from "@/components/Products/Products";
import { supabase } from "@/libs/supabase";

async function ProductsHome() {
  const { data, error } = await supabase.from("products").select("*");
  console.log("data, error", data, error);
  return (
    <div className="h-screen w-full flex flex-col pt-10 gap-3 ">
      <h1 className=" text-2xl">Co je nového?</h1>
      <div className="flex items-center flex-row">
        <p className="text-[#003459] font-bold font-xl">
          Podívejte se na některé z našich produktů
        </p>
        <ViewMoreButton />
      </div>
      <div className="flex pt-5 flex-row">
        <Products data={data as any} />
      </div>
      <div className="flex flex-row"></div>
    </div>
  );
}

export default ProductsHome;
