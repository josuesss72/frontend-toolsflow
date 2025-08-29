"use client";
import LogoSmall from "@/app/components/logo/Logo";
import {
	ArrowLeftRight,
	Building2Icon,
	Bus,
	ChartNoAxesCombined,
	House,
	Keyboard,
	NotebookTabs,
	Package,
	ScrollText,
	UserIcon,
	Users,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useAppContext } from "@/app/common/AppProvider";

const links = [
	{ icon: House, label: "Dashboard", href: "/dashboard" },
	{ icon: ChartNoAxesCombined, label: "Reportes", href: "/dashboard" },
	{ icon: ArrowLeftRight, label: "Traspasos", href: "/dashboard" },
	{ icon: Users, label: "Clientes", href: "/dashboard" },
	{ icon: Bus, label: "Provedores", href: "/dashboard" },
	{ icon: NotebookTabs, label: "Cotabilidad", href: "/dashboard" },
	{ icon: Keyboard, label: "Ventas", href: "/dashboard/sales" },
	{ icon: Package, label: "Inventario", href: "/dashboard" },
	{ icon: ScrollText, label: "Facturas", href: "/dashboard" },
];

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user, company } = useAppContext();

	return (
		<nav
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
			className={`shadow-xl z-10 transition-all duration-200 border-t-[1px] border-gray-700 fixed bg-blue-950 h-screen bottom-0 flex flex-col ${
				isOpen ? "w-48" : "w-16"
			} md:w-[20%]`}
		>
			{/* LOGO */}
			<div className="flex flex-col justify-center items-center pt-6">
				<LogoSmall className="text-3xl" />
				<p className="font-light text-xs italic">
					Sistema de gestion de Negocio
				</p>
			</div>

			<article className="flex flex-col bg-[var(--segundary-color)]/25 gap-2 mt-6 p-4">
				<section className="flex items-center gap-2">
					<div className="w-6 h-6 bg-[var(--segundary-color)] rounded-full flex items-center justify-center">
						<UserIcon className="w-3 h-3 text-white" />
					</div>
					<p className="text-xs font-light">{user?.email.toUpperCase()}</p>
				</section>

				<section className="flex items-center gap-2">
					<div className="w-6 h-6 bg-[var(--segundary-color)] rounded-full flex items-center justify-center">
						<Building2Icon className="w-3 h-3 text-white" />
					</div>
					<p className="text-xs font-light">{company?.name.toUpperCase()}</p>
				</section>
			</article>

			{/* LISTA DE ENLACES */}
			<ul className="p-4 flex flex-col gap-4 mt-4">
				{links.map(({ href, icon: Icon, label }, index) => {
					return (
						<li
							key={index}
							className=" transition-colors duration-400 ease-out rounded-sm"
						>
							<Link
								href={href}
								className={`flex items-center h-10 rounded-md transition-all duration-300 
    ${isOpen ? "bg-[var(--muted)] px-4" : "bg-transparent px-2"}
    hover:bg-[var(--hover-color)] md:px-2 md:bg-transparent`}
							>
								<Icon className="w-6 h-6 z-10 shrink-0 md:w-8 md:h-8" />
								<span
									className={`ml-3 overflow-hidden whitespace-nowrap transition-all duration-200 origin-left ${
										isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
									} md:opacity-100 md:scale-100 md:text-2xl `}
								>
									{label}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
