import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ExpoSure",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<main className="flex w-full text-white flex-col bg-[#06080D]  overflow-x-hidden">{children}</main>
			</body>
		</html>
	);
}
