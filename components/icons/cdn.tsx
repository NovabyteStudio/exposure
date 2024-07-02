import React from "react";
import Image from "next/image";

export const CDN: React.FC = () => {
	return (
		<>
			<Image src="/content/slider/cdn.png" width={500} height={500} alt="CDN" />
		</>
	);
};
