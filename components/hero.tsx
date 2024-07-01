import React from "react";
import Link from "next/link";
// Swiper \\
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TechIconsData, { IconData } from "@/lib/icons";

export const GridBackground: React.FC = () => {
	return (
		<section className="w-full gap-6 flex-col mx-auto bg-[#161616] bg-grid-gray-700/[1.1] relative flex items-center text-center justify-center">
			<div className="flex flex-col pt-32 max-sm:pt-14 w-[420px] md:w-[700px] sm:w-[500px] items-center justify-center cursor-default">
				<p className="text-3xl md:text-5xl sm:2xl max-sm:px-20 font-semibold text-white">
					Vamos a llevar tu presencia en redes al siguiente nivel, ahorrándote tiempo y energía para invertirlo en
					aportar valor
				</p>
				<p className="pt-11 flex items-center justify-center w-full max-w-[600px] max-sm:px-10">
					Nos dedicamos a crear y escalar marcas personales desde 0, como lo hemos hecho antes, mediante sistemas de
					contenido estratégicos y estético. Adecuándose al máximo a tus propósitos y a tus necesidades.
				</p>
			</div>
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#161616] [mask-image:radial-gradient(ellipse_at_top,transparent_8%,black)]"></div>
			<div className="flex p-10">
				<Link href="/contact">
					<button className="contact-button">Contáctanos ahora</button>
				</Link>
			</div>
			<div className="bg-transparent rounded-[400px] w-[380px] md:w-[500px] sm:w-[400px] mx-auto overflow-hidden">
				<div className="w-full max-w-[600px]">
					<Swiper
						id="devs-swiper"
						modules={[Autoplay]}
						freeMode={true}
						slidesPerView={3}
						loop={true}
						spaceBetween={60}
						speed={3400}
						direction={"horizontal"}
						autoplay={{
							delay: 800,
							disableOnInteraction: false,
						}}
					>
						{TechIconsData.map((icon: IconData, index: number) => (
							<SwiperSlide key={index} className="cursor-pointer bg-transparent">
								<icon.component />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};
