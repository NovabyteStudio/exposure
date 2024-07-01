import React from "react";
import { BarChart, CalendarClock, Handshake } from "lucide-react";
// Components \\
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const HowWeWork: React.FC = () => {
	return (
		<Card className="w-full max-w-4xl mt-20 flex flex-col mx-auto border-none bg-transparent">
			<CardHeader className="flex mb-8">
				<CardTitle className="text-2xl font-bold w-[400px] text-gray-200">¿Cómo Trabajamos?</CardTitle>
			</CardHeader>
			<CardContent className="flex sm:flex-row mx-auto flex-col flex-wrap gap-6 sm:gap-5 md:gap-[10px]">
				<div className="mb-10">
					<p className="text-muted-foreground">
						En exposure mediante la implementación de un editor de videos y un csm, vamos a potenciar tu presencia en
						redes con el fin de generar una audiencia 100% orgánica y con sentido de comunidad.
					</p>
				</div>
				<div className="flex flex-col gap-y-6 justify-center mx-auto">
					<div className="inline-flex gap-x-3.5 hover:bg-white/15 items-center cursor-pointer shadow-lg shadow-gray-700/50 backdrop-blur-sm backdrop-brightness-95 rounded-lg border border-white/20  p-6 transition-all hover:scale-105 flex-1 basis-[calc(33.33%-1.5rem)]">
						<div className="pt-3 rounded-md inline-flex items-center justify-center aspect-square">
							<Handshake size={40} className="text-white" />
						</div>
						<div className="flex flex-col w-full pt-3 items-center text-left">
							<h3 className="text-white text-left w-full">Edicion</h3>
							<p className="text-muted-foreground text-left w-full">
								Crea piezas de contenido que se ajusten con tus valores, propositos y personalidad, para crear una
								verdadera marca personal.
							</p>
						</div>
					</div>
					<div className="inline-flex gap-x-3.5 hover:bg-white/15 items-center cursor-pointer shadow-lg shadow-gray-700/50 backdrop-blur-sm backdrop-brightness-95 rounded-lg border border-white/20  p-6 transition-all hover:scale-105 flex-1 basis-[calc(33.33%-1.5rem)]">
						<div className="pt-3 rounded-md inline-flex items-center justify-center aspect-square">
							<Handshake size={40} className="text-white" />
						</div>
						<div className="flex flex-col w-full pt-3 items-center text-left">
							<h3 className="text-white text-left w-full">Sistema</h3>
							<p className="text-muted-foreground text-left w-full">
								Un csm que garantiza que todas las piezas se entreguen a tiempo y forma para no perder tiempo en
								revisiones y comunicar ambas partes de manera eficaz.
							</p>
						</div>
					</div>
					<div className="inline-flex gap-x-3.5 hover:bg-white/15 items-center cursor-pointer shadow-lg shadow-gray-700/50 backdrop-blur-sm backdrop-brightness-95 rounded-lg border border-white/20  p-6 transition-all hover:scale-105 flex-1 basis-[calc(33.33%-1.5rem)]">
						<div className="pt-3 rounded-md inline-flex items-center justify-center aspect-square">
							<Handshake size={40} className="text-white" />
						</div>
						<div className="flex flex-col w-full pt-3 items-center text-left">
							<h3 className="text-white text-left w-full">Estratégias y Guionaje</h3>
							<p className="text-muted-foreground text-left w-full">
								Creación de contenido de manera analizada y planificada con el fin de aumentar tus ingresos.
							</p>
						</div>
					</div>
					<div className="inline-flex gap-x-3.5 hover:bg-white/15 items-center cursor-pointer shadow-lg shadow-gray-700/50 backdrop-blur-sm backdrop-brightness-95 rounded-lg border border-white/20  p-6 transition-all hover:scale-105 flex-1 basis-[calc(33.33%-1.5rem)]">
						<div className="pt-3 rounded-md inline-flex items-center justify-center aspect-square">
							<Handshake size={40} className="text-white" />
						</div>
						<div className="flex flex-col w-full pt-3 items-center text-left">
							<h3 className="text-white text-left w-full">Embudos</h3>
							<p className="text-muted-foreground text-left w-full">Próximamente...</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
