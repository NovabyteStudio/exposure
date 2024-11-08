export interface IconData {
	name: string;
	component: React.FC<any>;
}
import { Hashi } from "@/components/icons/hashi";
import { Decrypto } from "@/components/icons/decrypto";
import { CDN } from "@/components/icons/cdn";
import { Alekai } from "@/components/icons/alekai";
import { EMP } from "@/components/icons/emp";
import { DFria } from "@/components/icons/dfria";

const TechIconsData: IconData[] = [
	{ name: "@Hashi", component: Hashi },
	{ name: "@Decrypto", component: Decrypto },
	{ name: "@Club de Negocios", component: CDN },
	{ name: "@Alekai", component: Alekai },
	{ name: "@EMP", component: EMP },
	{ name: "@La Ducha Fría", component: DFria },
];

export default TechIconsData;
