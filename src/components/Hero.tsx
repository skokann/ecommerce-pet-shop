import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="w-full h-full pt-10 flex flex-row">
			<div className="w-1/2  flex flex-col justify-center gap-5 ">
				<div className="flex flex-col text-6xl  font-semibold leading-none text-[#002A48]">
					<h1 className="font-bold leading-[4.5rem]">
						Dopřejte svému nejlepšímu příteli to nejlepší!
					</h1>
				</div>
				<p className="text-xl  font-semibold text-[#242B33]">
					Nabízíme široký výběr více než 200 produktů pro vašeho psa, které
					splní všechny jeho potřeby! Od kvalitních granulí, přes interaktivní
					hračky až po pohodlné pelíšky, u nás najdete vše, co váš pes potřebuje
					k šťastnému a zdravému životu.
				</p>
			</div>
			<div className="w-1/2 flex pb-5 px-20 items-end ">
				<Image src="/promo2.png" alt="hero" width={500} height={500} />
			</div>
		</div>
	);
};

export default Hero;
