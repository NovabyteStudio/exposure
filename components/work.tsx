import React from "react";
import { BrainIcon, CircleHelpIcon, FileVideo2Icon, GitCompareIcon, Layers3Icon } from "lucide-react";
// Components \\
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const HowWeWork: React.FC = () => {
	return (
		<Card className="w-full max-w-4xl mt-20 flex flex-col mx-auto border-none bg-transparent">
			<CardHeader className="flex">
				<CardTitle className="inline-flex items-center gap-x-1.5 text-2xl font-bold w-[400px] text-[#f2f2f2] max-md:text-center">
					<Layers3Icon className="mt-0.5" /> ¿Cómo trabajamos?
				</CardTitle>
			</CardHeader>
			<CardContent className="flex sm:flex-row mx-auto flex-col flex-wrap gap-6 sm:gap-5 md:gap-[10px] max-md:text-center">
				<div className="mb-10">
					<p className="text-[#f2f2f2]/50">
						En exposure mediante la implementación de un editor de videos y un csm, vamos a potenciar tu presencia en
						redes con el fin de generar una audiencia 100% orgánica y con sentido de comunidad.
					</p>
				</div>
				<div className="flex flex-col gap-y-6 justify-center mx-auto">
					<div className="inline-flex gap-x-3.5 bg-[#1c1c1c] items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
						<div className="pt-3 rounded-md inline-flex items-center justify-center aspect-square">
							<FileVideo2Icon size={40} className="text-white" />
						</div>
						<div className="flex flex-col w-full pt-3 items-center text-left">
							<h3 className="text-white text-left w-full">Edicion</h3>
							<p className="text-[#f2f2f2]/40 text-left w-full">
								Crea piezas de contenido que se ajusten con tus valores, propositos y personalidad, para crear una
								verdadera marca personal.
							</p>
						</div>
					</div>
					<div className="inline-flex gap-x-3.5 bg-[#1c1c1c] items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
						<div className="pt-3 rounded-md inline-flex items-center justify-center aspect-square">
							<GitCompareIcon size={40} className="text-white" />
						</div>
						<div className="flex flex-col w-full pt-3 items-center text-left">
							<h3 className="text-white text-left w-full">Sistema</h3>
							<p className="text-[#f2f2f2]/40 text-left w-full">
								Un csm que garantiza que todas las piezas se entreguen a tiempo y forma para no perder tiempo en
								revisiones y comunicar ambas partes de manera eficaz.
							</p>
						</div>
					</div>
					<div className="inline-flex gap-x-3.5 bg-[#1c1c1c] items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
						<div className="pt-3 rounded-md inline-flex items-center justify-center aspect-square">
							<BrainIcon size={40} className="text-white" />
						</div>
						<div className="flex flex-col w-full pt-3 items-center text-left">
							<h3 className="text-white text-left w-full">Estratégias y Guionaje</h3>
							<p className="text-[#f2f2f2]/40 text-left w-full">
								Creación de contenido de manera analizada y planificada con el fin de aumentar tus ingresos.
							</p>
						</div>
					</div>
					<div className="inline-flex gap-x-3.5 bg-[#1c1c1c]/40 items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
						<div className="pt-3 rounded-md inline-flex items-center justify-center aspect-square">
							<CircleHelpIcon size={40} className="text-white" />
						</div>
						<div className="flex flex-col w-full pt-3 items-center text-left">
							<h3 className="text-white text-left w-full">Embudos</h3>
							<p className="text-[#f2f2f2]/40 text-left w-full">Próximamente...</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
