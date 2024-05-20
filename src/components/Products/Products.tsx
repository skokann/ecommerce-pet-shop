import React from "react";
import Image from "next/image";

function Products() {
	return (
		<div className="flex justify-center items-center pt-14 flex-col gap-5 h-full w-full">
			<Image
				src="/jidlo.jpeg"
				alt="Product Image"
				className="hover:scale-110 hover:rotate-3  hover:bg-gray-100 transition-all duration-500 ease-in-out transform-gpu"
				width={100}
				height={100}
			/>
			<h1 className="font-bold text-2xl">Product Title</h1>
			<p className="m-auto">Product Price</p>
		</div>
	);
}

export default Products;
