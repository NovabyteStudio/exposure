import React from "react";

export const Footer: React.FC = () => {
	return (
		<>
			<footer className="relative w-full border-t-[1px] border-gray-800 pt-10 pb-6 mt-20">
				<p className="text-center text-[14px] text-gray-400 font-medium">
					Sitio creado por{" "}
					<a
						href="https://www.linkedin.com/in/fedetomassini/"
						className="hover:underline underline-offset-4"
						target="_blank"
					>
						@fedetomassini
					</a>
				</p>
			</footer>
		</>
	);
};
