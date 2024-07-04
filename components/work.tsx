import React from "react";
import Link from "next/link";
// Components \\
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const HowWeWork: React.FC = () => {
	return (
		<Card className="w-full max-w-4xl mt-20 flex flex-col mx-auto border-none bg-transparent">
			<CardHeader className="flex">
				<CardTitle className="inline-flex items-center gap-x-1.5 text-2xl font-bold text-[#f2f2f2] max-md:text-center max-md:justify-center">
					<i className="fi fi-tr-layer-plus"></i> ¿Cómo trabajamos?
				</CardTitle>
			</CardHeader>
			<CardContent className="flex sm:flex-row mx-auto flex-col flex-wrap gap-6 sm:gap-5 md:gap-[10px] max-md:text-center">
				<div className="mb-10">
					<p className="text-[#f2f2f2]/50">
						En exposure mediante la implementación de un editor de videos y un CSM (Customer Success Manager), vamos a potenciar tu presencia en
						redes con el fin de generar una audiencia 100% orgánica y con sentido de comunidad.
					</p>
				</div>
				<div className="flex flex-col gap-y-6 justify-center mx-auto">
					<div className="inline-flex gap-x-3.5 bg-[#1c1c1c] items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
						<div className="rounded-md inline-flex items-center justify-center aspect-square">
							<i className="fi fi-tr-play-microphone"></i>
						</div>
						<div className="flex flex-col w-full pt-3 items-center text-left">
							<h3 className="text-white text-left w-full">Edición</h3>
							<p className="text-[#f2f2f2]/40 text-left w-full">
								Crea piezas de contenido que se ajusten con tus valores, propósitos y personalidad, para crear una
								verdadera marca personal.
							</p>
						</div>
					</div>
					<div className="inline-flex gap-x-3.5 bg-[#1c1c1c] items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
						<div className="rounded-md inline-flex items-center justify-center aspect-square">
							<i className="fi fi-tr-code-compare"></i>
						</div>
						<div className="flex flex-col w-full pt-3 items-center text-left">
							<h3 className="text-white text-left w-full">Sistema</h3>
							<p className="text-[#f2f2f2]/40 text-left w-full">
								Un CSM (Customer Success Manager) que garantiza que todas las piezas se entreguen a tiempo y forma para no perder tiempo en
								revisiones y comunicar ambas partes de manera eficaz.
							</p>
						</div>
					</div>
					<div className="inline-flex gap-x-3.5 bg-[#1c1c1c] items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
						<div className="rounded-md inline-flex items-center justify-center aspect-square">
							<i className="fi fi-tr-mind-share"></i>
						</div>
						<div className="flex flex-col w-full pt-3 items-center text-left">
							<h3 className="text-white text-left w-full">Estrategias y Guionaje</h3>
							<p className="text-[#f2f2f2]/40 text-left w-full">
								Creación de contenido de manera analizada y planificada con el fin de aumentar tus ingresos.
							</p>
						</div>
					</div>
					<div className="inline-flex gap-x-3.5 bg-[#1c1c1c]/40 items-center cursor-pointer rounded-lg border border-[#1c1c1c] drop-shadow-md p-6 transition-all flex-1">
						<div className="rounded-md inline-flex items-center justify-center aspect-square">
							<i className="fi fi-tr-map-marker-question"></i>
						</div>
						<div className="flex flex-col w-full pt-3 items-center text-left">
							<h3 className="text-white text-left w-full">Embudos</h3>
							<p className="text-[#f2f2f2]/40 text-left w-full">Próximamente...</p>
						</div>
					</div>
					<div className="flex justify-center pt-5 -mb-5">
						<Link className="examples-button" href={"https://www.playbook.com/s/bernabeveron/vecR1vrbzfaJHgtsNrZ4tEUR"} target="_blank">
							<button className="font-bold">¡Mira ejemplos aquí!</button>
						</Link>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
