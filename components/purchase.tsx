import React from "react";
import { CheckIcon, CircleFadingPlusIcon, CornerRightDownIcon } from "lucide-react";
// Components \\
import { Button } from "@/components/ui/button";
import { YouTube } from "@/components/icons/youtube";
import { Instagram } from "@/components/icons/instagram";

export const Purchase: React.FC = () => {
	return (
		<>
			<div className="w-full max-w-4xl mt-20 flex flex-col mx-auto border-none bg-transparent">
				<div className="container px-4 md:px-6">
					<h1 className="inline-flex items-center gap-x-1.5 text-2xl font-bold w-[400px] text-[#f2f2f2] max-md:w-screen max-md:justify-center">
						<CircleFadingPlusIcon className="mt-0.5" /> Adquirir servicio <CornerRightDownIcon className="mt-2" />
					</h1>
					<div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
						<div className="flex flex-col justify-between gap-x-3.5 md:w-[275px] max-md:w-[275px] mx-auto bg-[#1c1c1c] items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
							<div>
								<h3 className="inline-flex items-center gap-x-1.5 text-2xl font-bold text-center">
									<YouTube /> YouTube
								</h3>
								<div className="mt-4 text-center text-zinc-600">
									<span className="text-4xl font-bold">$29</span>
								</div>
								<ul className="mt-4 space-y-2">
									<li className="flex items-center">
										<CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
										1 video YouTube/semana
									</li>
								</ul>
							</div>
							<div className="mt-6">
								<Button className="w-full bg-[#f2f2f2] text-[#1c1c1c] hover:bg-[#23c483] hover:text-[#f2f2f2] transition-colors">Contactar</Button>
							</div>
						</div>
						<div className="flex flex-col justify-between gap-x-3.5 md:w-[275px] max-md:w-[275px] mx-auto bg-[#1c1c1c] items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
							<div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
								Recomendado
							</div>
							<div>
								<h3 className="text-2xl font-bold text-center">Combo</h3>
								<div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
									<span className="text-4xl font-bold">$59</span>/ month
								</div>
								<ul className="mt-4 space-y-2">
									<li className="flex items-center">
										<CheckIcon className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1" />
										YouTube
									</li>
									<li className="flex items-center">
										<CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
										Instagram
									</li>
								</ul>
							</div>
							<div className="mt-6">
								<Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-[#23c483] hover:text-[#f2f2f2]">Contactar</Button>
							</div>
						</div>
						<div className="flex flex-col justify-between gap-x-3.5 md:w-[275px] max-md:w-[275px] mx-auto bg-[#1c1c1c] items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
							<div>
								<h3 className="inline-flex items-center gap-x-1.5 text-2xl font-bold text-center"><Instagram /> Instagram</h3>
								<div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
									<span className="text-4xl font-bold">$29</span>
								</div>
								<ul className="mt-4 space-y-2">
									<li className="flex items-center">
										<CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
										Instagram
									</li>
								</ul>
							</div>
							<div className="mt-6">
								<Button className="w-full bg-[#f2f2f2] text-[#1c1c1c] hover:bg-[#23c483] hover:text-[#f2f2f2] transition-colors">Contactar</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
