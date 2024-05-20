import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ViewMoreButton = () => {
	return (
		<button
			type="button"
			className="flex h-12 w-44 font-bold items-center ml-auto justify-center px-2 py-2 border-2 border-blue-900 text-blue-900 text-lg  rounded-full hover:bg-blue-900 hover:text-white transition duration-300"
		>
			Ukázat více
			<IoIosArrowForward />
		</button>
	);
};

export default ViewMoreButton;
