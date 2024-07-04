import React from "react";
// Swiper \\
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TechIconsData, { IconData } from "@/lib/icons";
import { Tooltip } from "@nextui-org/tooltip";

export const GridBackground: React.FC = () => {
	const scrollToElement = (id: string, duration: number) => {
		const element = document.getElementById(id);
		if (element) {
			const start = window.scrollY;
			const end = element.getBoundingClientRect().top + window.scrollY;
			const startTime = performance.now();

			const scroll = (currentTime: number) => {
				const timeElapsed = currentTime - startTime;
				const progress = Math.min(timeElapsed / duration, 1);
				const ease =
					progress < 0.5
						? 4 * progress * progress * progress
						: (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;

				window.scrollTo(0, start + (end - start) * ease);
				if (timeElapsed < duration) {
					requestAnimationFrame(scroll);
				}
			};

			requestAnimationFrame(scroll);
		}
	};

	return (
		<section className="w-full gap-6 flex-col mx-auto bg-[#161616] bg-grid-gray-700/[1.1] relative flex items-center text-center justify-center">
			<div className="flex flex-col pt-32 max-sm:pt-14 w-[420px] md:w-[700px] sm:w-[500px] items-center justify-center cursor-default">
				<p className="text-4xl md:text-5xl sm:3xl max-sm:px-20 font-semibold text-white">
					Tu contenido al siguiente nivel
				</p>
				<p className="pt-11 flex items-center justify-center w-full max-w-[600px] max-sm:px-20">
					Ayudamos a creadores de contenido a expandir su mensaje en redes sociales. Por medio de la edición de alto impacto y creación de identidad de marca en redes sociales. Nuestro principio es buscar la excelencia en cada pieza de contenido creada.
				</p>
			</div>
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#161616] [mask-image:radial-gradient(ellipse_at_top,transparent_8%,black)]"></div>
			<div className="flex p-10">
				<a onClick={() => scrollToElement("purchases", 2500)}>
					<button className="contact-button">Contáctanos ahora</button>
				</a>
			</div>
			<div className="bg-transparent rounded-[400px] w-[380px] md:w-[500px] sm:w-[400px] mx-auto overflow-hidden">
				<div className="w-full max-w-[600px]">
					<h2 className="text-[18px] mb-2.5 font-bold">¡Confían en nosotros!</h2>
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
							<SwiperSlide key={index} className="cursor-default bg-transparent">
								<Tooltip content={icon.name} placement="bottom" closeDelay={100} className="text-white font-bold bg-[#1c1c1c]/100 px-4 py-2 rounded-full">
									<div>
										<icon.component />
									</div>
								</Tooltip>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};
