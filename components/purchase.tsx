import React from "react";
import Link from "next/link";
import { CheckIcon, CircleFadingPlusIcon, ComponentIcon, CornerRightDownIcon } from "lucide-react";
// Components \\
import { Button } from "@/components/ui/button";
import { YouTube } from "@/components/icons/youtube";
import { Instagram } from "@/components/icons/instagram";

export const Purchase: React.FC = () => {
	return (
		<>
			<div id="purchases" className="w-0 h-0"></div>
			<div className="w-full max-w-4xl mt-20 flex flex-col mx-auto border-none bg-transparent">
				<div className="container px-4 md:px-6">
					<h1 className="inline-flex items-center gap-x-1.5 text-2xl font-bold text-[#f2f2f2] max-md:w-screen max-md:justify-center">
						<i className="fi fi-tr-usd-square"></i> Adquirir servicio <i className="fi fi-tr-level-down-alt"></i>
					</h1>
					<div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
						<div className="flex flex-col justify-between gap-x-3.5 md:w-[275px] max-md:w-[275px] mx-auto bg-[#1c1c1c] items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
							<div>
								<h3 className="inline-flex items-center w-full justify-center gap-x-1.5 text-2xl font-bold text-center">
									<YouTube /> YouTube
								</h3>
								<div className="mt-4 text-center text-[#23c483]">
									<span className="text-4xl font-bold">$484</span>/ m
								</div>
								<ul className="mt-4 space-y-2">
									<li className="flex items-center">
										<CheckIcon className="text-white text-xs rounded-full mr-2 p-1" />1 video de YouTube por semana.
									</li>
									<li className="flex items-center">
										<CheckIcon className="text-white text-xs rounded-full mr-2 p-1" />
										Revisión de calidad.
									</li>
								</ul>
							</div>
							<div className="mt-6">
								<Link href={"https://calendly.com/alexmcarrera/30min"} target="_blank">
									<Button className="w-full bg-[#f2f2f2] text-[#1c1c1c] hover:bg-[#23c483] hover:text-[#f2f2f2] active:scale-95 transition-all ease-in-out">
										Agendar reunión
									</Button>
								</Link>
							</div>
						</div>
						<div className="flex flex-col justify-between gap-x-3.5 md:w-[275px] max-md:w-[275px] mx-auto bg-[#1c1c1c] items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
							<div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-flex w-fit mb-5 justify-center mx-auto">
								Recomendado
							</div>
							<div>
								<h3 className="inline-flex items-center gap-x-1.5 justify-center w-full text-2xl font-bold text-center">
									<ComponentIcon /> Combo
								</h3>
								<div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
									<span className="text-3xl font-bold line-through">$1000</span>/ m
									<div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
										$715<span className="text-base">/ m</span>
									</div>
									<div className="text-base font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
										Precio Especial Miembro EMP
									</div>
								</div>
								<ul className="mt-4 space-y-2">
									<li className="flex items-center">
										<CheckIcon className="text-white text-xs rounded-full mr-2 p-1" />1 video de YouTube por semana.
									</li>
									<li className="flex items-center">
										<CheckIcon className="text-white text-xs rounded-full mr-2 p-1" />3 reels por semana.
									</li>
									<li className="flex items-center text-">
										<CheckIcon className="text-white text-xs rounded-full mr-2 p-1" />
										Revisión de calidad.
									</li>
									<li className="flex items-center text-">
										<CheckIcon className="text-white text-xs rounded-full mr-2 p-1" />
										Asesoramiento creativo.
									</li>
								</ul>
							</div>
							<div className="mt-6">
								<Link href={"https://calendly.com/alexmcarrera/30min"} target="_blank">
									<Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-[#23c483] hover:to-[#23c483] hover:text-[#f2f2f2] active:scale-95 transition-all ease-in-out">
										Agendar reunión
									</Button>
								</Link>
							</div>
						</div>
						<div className="flex flex-col justify-between gap-x-3.5 md:w-[275px] max-md:w-[275px] mx-auto bg-[#1c1c1c] items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
							<div>
								<h3 className="inline-flex items-center w-full justify-center gap-x-1.5 text-2xl font-bold text-center">
									<Instagram /> Instagram
								</h3>
								<div className="mt-4 text-center text-[#23c483]">
									<span className="text-4xl font-bold">$275</span>/ m
								</div>
								<ul className="mt-4 space-y-2">
									<li className="flex items-center">
										<CheckIcon className="text-white text-xs rounded-full mr-2 p-1" />3 reels por semana.
									</li>
									<li className="flex items-center">
										<CheckIcon className="text-white text-xs rounded-full mr-2 p-1" />
										Revisión de calidad.
									</li>
								</ul>
							</div>
							<div className="mt-6">
								<Link href={"https://calendly.com/alexmcarrera/30min"} target="_blank">
									<Button className="w-full bg-[#f2f2f2] text-[#1c1c1c] hover:bg-[#23c483] hover:text-[#f2f2f2] active:scale-95 transition-all ease-in-out">
										Agendar reunión
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
