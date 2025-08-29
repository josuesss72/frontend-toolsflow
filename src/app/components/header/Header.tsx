"use client";
import React from "react";
import ButtonCreate from "./components/ButtonCreate";
import { selectStyle } from "../select-style";
import { DynamicCreatableSelect } from "@/app/common/imports-libraries-client";
import Notifications from "./components/Notifications";
import Link from "next/link";
import { useAppContext } from "@/app/common/AppProvider";
import ButtonOptionAccount from "./components/ButtonOptionAccount";

const Header = () => {
	const { user } = useAppContext();
	return (
		<header className="flex fixed w-[80%] h-[10%] right-0 shadow-lg bg-[var(--background)] shadow-black/50 justify-between items-center px-16">
			<article className="flex justify-center items-center gap-4 w-full">
				{/* Buscador */}
				<form action="" className="flex gap-2">
					<DynamicCreatableSelect
						styles={selectStyle}
						classNamePrefix="select"
						options={[
							{ value: "all", label: "Todo" },
							{ value: "suppliers", label: "Proveedores" },
							{ value: "clients", label: "Clientes" },
							{ value: "invoices", label: "Facturas" },
						]}
						isClearable
					/>
					<input
						type="text"
						placeholder="Buscar..."
						className="w-[300px] p-0.5 border-[1px] focus:outline-none rounded-sm bg-gray-500 text-black"
					/>
				</form>
				{user?.role === "USER" && (
					<Link
						href={"/panel"}
						className="hover:text-[var(--segundary-color-400)]"
					>
						Panel
					</Link>
				)}
			</article>
			<section className="flex items-center gap-4">
				<ButtonCreate />
				<Notifications />
				<ButtonOptionAccount />
			</section>
		</header>
	);
};

export default Header;
