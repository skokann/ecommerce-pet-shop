import React from "react";
import Logo from "./Navbar/Logo";
import NavLinks from "./Navbar/NavLinks";
import SearchBar from "./Navbar/SearchBar";
import JoinButton from "./Navbar/JoinButton";

function Navbar() {
	return (
		<div className="flex flex-row w-full items-center gap-20">
			<Logo />
			<NavLinks />
			<div className="ml-auto flex items-center gap-4">
				<SearchBar />
				<JoinButton />
			</div>
		</div>
	);
}

export default Navbar;
