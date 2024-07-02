import React from "react";
import { CopyrightIcon } from "lucide-react";

export const Footer: React.FC = () => {
	return (
		<>
			<footer className="relative w-full border-t border-[#f2f2f2]/10 p-6 mt-20">
				<p className="inline-flex items-center justify-center gap-x-1 w-full text-center text-[12px] text-[#f2f2f2]/50 font-medium">
					<CopyrightIcon size={12} /> Sitio web realizado por{" "}
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
