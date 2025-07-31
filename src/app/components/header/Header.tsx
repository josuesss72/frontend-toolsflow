"use client";
import React from "react";
import ButtonCreate from "./components/ButtonCreate";
import Select from "react-select";
import { selectStyle } from "../select-style";

const Header = () => {
	return (
		<header className="flex fixed back_gradient left-16 right-0 justify-between items-center py-4 pr-16">
			<article className="mx-auto">
				<form action="" className="flex gap-2">
					<Select
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
						className="w-[300px] p-0.5 border-[1px] focus:outline-none border-gray-700 rounded-sm bg-black"
					/>
				</form>
			</article>
			<ButtonCreate />
		</header>
	);
};

export default Header;
