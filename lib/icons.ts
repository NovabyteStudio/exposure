export interface IconData {
	name: string;
	component: React.FC<any>;
}
import Hashi from "@/components/icons/hashi";
import Decrypto from "@/components/icons/decrypto";
import CDN from "@/components/icons/cdn";
import Alekai from "@/components/icons/alekai";
///////////////////////////////////////////////////////
import EMP from "@/components/icons/next";
import Dfria from "@/components/icons/astro";

const TechIconsData: IconData[] = [
	{ name: "@Hashi", component: Hashi },
	{ name: "@Decrypto", component: Decrypto },
	{ name: "@Club de negocios", component: CDN },
	{ name: "@Alekai", component: Alekai },
	{ name: "@EMP", component: EMP },
	{ name: "@La ducha fria", component: Dfria },
];

export default TechIconsData;
