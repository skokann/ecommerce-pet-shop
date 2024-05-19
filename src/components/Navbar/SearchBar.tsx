import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
	return (
		<div className="w-[280px] bg-white rounded-[46px] h-[45px] flex items-center px-4 shadow-sm">
			<CiSearch className="h-[25px] w-[25px]" />
			<input
				name="search"
				className="w-full pl-2 h-[45px] bg-transparent focus:outline-none"
				placeholder="Tady můžeš čmuchat!"
			/>
		</div>
	);
}
