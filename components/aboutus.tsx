import React from "react";
import { MessageSquareQuoteIcon } from "lucide-react";
// Components \\
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const AboutUs: React.FC = () => {
	return (
		<Card className="w-full max-w-4xl mt-20 flex flex-col mx-auto border-none bg-transparent">
			<CardHeader className="flex mb-10">
				<CardTitle className="inline-flex items-center gap-x-1.5 text-2xl font-bold text-[#f2f2f2] max-md:text-center">
					<MessageSquareQuoteIcon className="mt-1 max-sm:hidden" /> Lo que clientes dicen de nosotros...
				</CardTitle>
			</CardHeader>
			<CardContent className="flex sm:flex-row mx-auto flex-col flex-wrap gap-6 sm:gap-5 md:gap-[14px]">
				<div className="flex flex-col gap-y-6 w-[310px] justify-center mx-auto border border-[#282828] bg-[#1c1c1c] rounded-md drop-shadow-md">
					<div className="px-6 py-4">
						<div className="text-sm text-[#f2f2f2]">
							“Los chicos de exposure llevaron mi contenido y estratégias al siguiente nivel, muy contento con los
							resultados obtenidos."
						</div>
					</div>
					<div className="flex justify-between items-center px-6 py-4">
						<div className="flex space-x-4">
							<div>
								<img
									alt="Ramiro Cubria"
									className="rounded-md"
									height="48"
									src="https://generated.vusercontent.net/placeholder.svg"
									width="48"
								/>
							</div>
							<div>
								<div className="text-base text-[#f2f2f2]">Ramiro Cubria</div>
								<div className="text-sm text-gray-500">CEO & Co-founder de Club De Negocios</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-y-6 w-[310px] justify-center mx-auto border border-[#282828] bg-[#1c1c1c] rounded-md drop-shadow-md">
					<div className="px-6 py-4">
						<div className="text-sm text-[#f2f2f2]">
							“Estoy con ellos desde que arranqué y más contento imposible, $35k usd por mes con mi marca personal.”
						</div>
					</div>
					<div className="flex justify-between items-center px-6 py-4">
						<div className="flex space-x-4">
							<div>
								<img
									alt="Fran Castro"
									className="rounded-md"
									height="48"
									src="https://generated.vusercontent.net/placeholder.svg"
									width="48"
								/>
							</div>
							<div>
								<div className="text-base text-[#f2f2f2]">Fran Castro</div>
								<div className="text-sm text-gray-500">CEO & Founder de Content Booster</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-y-6 w-[310px] justify-center mx-auto border border-[#282828] bg-[#1c1c1c] rounded-md drop-shadow-md">
					<div className="px-6 py-4">
						<div className="text-sm text-[#f2f2f2]">
							“Quiero agradecer enormemente a exposure, me dieron una increíble mano con todo mi contenido, mis
							estrategias y mi identidad en redes.”
						</div>
					</div>
					<div className="flex justify-between items-center px-6 py-4">
						<div className="flex space-x-4">
							<div>
								<img
									alt="Matias Noguera"
									className="rounded-md"
									height="48"
									src="https://generated.vusercontent.net/placeholder.svg"
									width="48"
								/>
							</div>
							<div>
								<div className="text-base text-[#f2f2f2]">Matias Noguera</div>
								<div className="text-sm text-gray-500">CEO & Founder Podboost</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-y-6 w-[310px] justify-center mx-auto border border-[#282828] bg-[#1c1c1c] rounded-md drop-shadow-md">
					<div className="px-6 py-4">
						<div className="text-sm text-[#f2f2f2]">
							“Increíble, muy contento con los resultados obtenidos. Calidad inigualable.”
						</div>
					</div>
					<div className="flex justify-between items-center px-6 py-4">
						<div className="flex space-x-4">
							<div>
								<img
									alt="Gonzalo Waisman"
									className="rounded-md"
									height="48"
									src="https://generated.vusercontent.net/placeholder.svg"
									width="48"
								/>
							</div>
							<div>
								<div className="text-base text-[#f2f2f2]">Gonzalo Waisman</div>
								<div className="text-sm text-gray-500">CEO & Co-founder de Hashi</div>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
