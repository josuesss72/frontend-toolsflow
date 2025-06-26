"use client";
import {
	ArrowLeftRight,
	Bus,
	ChartNoAxesCombined,
	House,
	Keyboard,
	NotebookTabs,
	Package,
	ScrollText,
	Users,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

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
	return (
		<nav
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
			className={`shadow-xl z-10 shadow-gray-800 transition-all duration-200 fixed bg-[var(--background)] border-r-2 border-gray-800 h-screen flex flex-col ${
				isOpen ? "w-48" : "w-16"
			}`}
		>
			<ul className="p-4 flex flex-col gap-4">
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
    hover:bg-[var(--hover-color)]`}
							>
								<Icon className="w-6 h-6 z-10 shrink-0" />
								<span
									className={`ml-3 overflow-hidden whitespace-nowrap transition-all duration-200 origin-left ${
										isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
									}`}
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
