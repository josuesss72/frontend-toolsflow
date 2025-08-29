import LogoSmall from "@/app/components/logo/Logo";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavPanel = () => {
	const ITEM_CLASS =
		"p-4 hover:bg-[var(--hover-color)] cursor-pointer text-lg font-light";
	return (
		<aside className="bg-black">
			<Link href={"/dashboard"} className="flex items-center gap-2 mt-2 ml-2">
				<ArrowLeft className="w-4 h-4" />{" "}
				<p className="text-sm font-light text-gray-300/80">Dashboard</p>
			</Link>
			<header className="flex flex-col justify-center items-center mt-4">
				<LogoSmall className="text-3xl" />
				<p className="font-light text-xs italic">
					Sistema de gestion de Negocio
				</p>

				<h4 className="italic font-bold text-xl mt-2">Panel</h4>
			</header>
			<ul className="flex flex-col mt-4">
				<Link href="/panel/products" className={ITEM_CLASS}>
					Productos
				</Link>
				<Link href="/panel/headquarters" className={ITEM_CLASS}>
					Sucursales
				</Link>
				<li className={ITEM_CLASS}>Clientes</li>
				<li className={ITEM_CLASS}>Proveedores</li>
				<li className={ITEM_CLASS}>Categorias</li>
			</ul>
		</aside>
	);
};

export default NavPanel;
