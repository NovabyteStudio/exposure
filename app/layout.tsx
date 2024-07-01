import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
	title: "Exposure",
	description:
		"Nos dedicamos a crear y escalar marcas personales desde 0, como lo hemos hecho antes, mediante sistemas de contenido estratégicos y estético. Adecuándose al máximo a tus propósitos y a tus necesidades.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body>
				<main className="flex w-full text-white flex-col bg-[#161616]  overflow-x-hidden">{children}</main>
			</body>
		</html>
	);
}
