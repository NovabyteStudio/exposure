import React from "react";
import { BarChart, CalendarClock, Handshake } from "lucide-react";
// Components \\
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const CardServices: React.FC = () => {
	return (
		<Card className="w-full max-w-4xl mt-20 flex flex-col mx-auto border-none bg-transparent">
			<CardHeader className="flex mb-12">
				<CardTitle className="text-2xl font-bold w-[400px] text-[#f2f2f2]">
					¿A quiénes va dirigido nuestro servicio?
				</CardTitle>
			</CardHeader>
			<CardContent className="flex sm:flex-row mx-auto flex-col flex-wrap gap-6 sm:gap-5 md:gap-[30px]">
				<div className="hover:bg-white/15 w-[275px] flex items-center flex-col cursor-pointer shadow-lg shadow-gray-700/50 backdrop-blur-sm backdrop-brightness-95 rounded-lg border border-white/20  p-6 transition-all hover:scale-105 flex-1 basis-[calc(33.33%-1.5rem)]">
					<div className="pt-3 rounded-md flex items-center justify-center aspect-square w-12 mb-4">
						<Handshake size={40} className="text-white" />
					</div>
					<div className="flex pt-3 items-center text-center">
						<p className="text-muted-foreground">Coaches o infoproductores que quieran aumentar sus ventas</p>
					</div>
				</div>
				<div className="hover:bg-white/15 w-[275px] flex items-center flex-col cursor-pointer shadow-lg shadow-gray-700/50 backdrop-blur-sm backdrop-brightness-95 rounded-lg border border-white/20  p-6 transition-all hover:scale-105 flex-1 basis-[calc(33.33%-1.5rem)]">
					<div className="pt-3 rounded-md flex items-center justify-center aspect-square w-12 mb-4">
						<BarChart size={40} className="text-white" />
					</div>
					<div className="flex pt-3 items-center text-center">
						<p className="text-muted-foreground">Personas que quieren escalar su marca personal y aportar valor</p>
					</div>
				</div>
				<div className="hover:bg-white/15 w-[275px] flex items-center flex-col cursor-pointer shadow-lg shadow-gray-700/50 backdrop-blur-sm backdrop-brightness-95 rounded-lg border border-white/20  p-6 transition-all hover:scale-105 flex-1 basis-[calc(33.33%-1.5rem)]">
					<div className="pt-3 rounded-md flex items-center justify-center aspect-square w-12 mb-4">
						<CalendarClock size={40} className="text-white" />
					</div>
					<div className="flex pt-3 items-center text-center">
						<p className="text-muted-foreground">Personas que entienden que los resultados llevan tiempo</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
