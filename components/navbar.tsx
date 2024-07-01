import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
// Components \\
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export const Navbar: React.FC = () => {
	return (
		<header className="flex items-center justify-around px-4 md:px-6">
			<div className="flex items-center justify-center">
				<Image alt="name" src={"/logo.png"} width={70} height={70} />
				<h3 className="font-bold textLogo">EXPOSURE</h3>
			</div>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon" className="rounded-full ">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="bg-[#1c1c1c]">
					<div className="grid gap-4 p-4 text-white ">
						<div className="">
							<Link
								href="#"
								className="flex items-center text-white hover:underline duration-700 cursor-pointer  justify-between rounded-md  px-3 py-2 text-sm font-medium "
								prefetch={false}
							>
								Home
							</Link>
						</div>
						<div className="">
							<Link
								href="#"
								className="flex items-center justify-between underline duration-700 transition-all rounded-md bg-background px-3 py-2 text-sm font-medium "
								prefetch={false}
							>
								About
							</Link>
						</div>
						<div className="">
							<Link
								href="#"
								className="flex items-center justify-between hover:underline duration-700 rounded-md bg-background px-3 py-2 text-sm font-medium "
								prefetch={false}
							>
								Contact
							</Link>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</header>
	);
};
