// /components/Products.tsx
import React from "react";
import Image from "next/image";

// Definuj typ pro jeden produkt
type Product = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

// Přidej typ pro data - pole produktů
interface ProductsProps {
  data: Product[] | undefined;
}

function Products({ data }: ProductsProps) {
  console.log(data);

  return (
    <div className="flex justify-center text-center items-center pt-14 flex-row gap-10 h-full w-full">
      {data && data.length > 0 ? (
        data.map((product) => {
          console.log("Product Price:", product.price); // Zaloguje cenu každého produktu
          return (
            <div key={product.id} className="flex flex-col gap-2 items-center">
              <Image
                src={product.image_url}
                alt={product.name}
                className="hover:scale-110 hover:rotate-3 transition-all duration-500 ease-in-out transform-gpu"
                width={100}
                height={100}
              />
              <h1 className="font-bold text-2xl">{product.name}</h1>
              <p className="m-auto">{product.price} Kč</p>
              <button>do košíku</button>
            </div>
          );
        })
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default Products;
