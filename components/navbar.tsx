import React from "react";
import Image from "next/image";

export const Navbar: React.FC = () => {
	return (
		<header className="flex items-center justify-start px-4 md:px-6 max-md:px-0 max-md:w-full">
			<div className="flex items-center justify-center max-md:w-full max-md:justify-start cursor-default">
				<Image alt="exposure" src={"/logo.png"} width={70} height={70} />
				<h3 className="font-bold textLogo">EXPOSURE</h3>
			</div>
		</header>
	);
};
