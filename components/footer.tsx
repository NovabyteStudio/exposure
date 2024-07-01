import React from "react";

export const Footer: React.FC = () => {
	return (
		<>
			<footer className="relative w-full border-t-[1px] border-gray-800 p-6 mt-20">
				<p className="text-center text-[12px] text-gray-400 font-medium">
					Sitio web realizado por{" "}
					<a
						href="https://www.linkedin.com/in/fedetomassini/"
						className="hover:underline hover:text-[#23c483] underline-offset-4 transition-colors"
						target="_blank"
					>
						@fedetomassini
					</a>{" "}
					y{" "}
					<a
						href="https://www.linkedin.com/in/facundo-costas-tealdi/"
						className="hover:underline hover:text-[#23c483] underline-offset-4 transition-colors"
						target="_blank"
					>
						@facucostas
					</a>
				</p>
			</footer>
		</>
	);
};
