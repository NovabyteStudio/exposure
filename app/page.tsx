"use client";
// Components \\
import { Navbar } from "@/components/navbar";
import { GridBackground } from "@/components/hero";
import { CardServices } from "@/components/services";
import { HowWeWork } from "@/components/work";
import { AboutUs } from "@/components/aboutus";
import { Footer } from "@/components/footer";
import { Purchase } from "@/components/purchase";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<GridBackground />
			<CardServices />
			<HowWeWork />
			<AboutUs />
			<Purchase />
			<Footer />
		</>
	);
}
