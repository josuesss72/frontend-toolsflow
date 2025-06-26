import React from "react";
import Sales from "./components/sales/Sales";
import Invoice from "./components/invoice/Invoice";
import Odc from "./components/odc/Odc";
import Client from "./components/client/Client";
import Supplier from "./components/supplier/Supplier";

const Board = () => {
	return (
		<article className="grid grid-cols-8 grid-rows-[auto_1fr_1fr_1fr_1fr] max-w-[1000px] gap-4">
			<h1 className="col-start-1 text-6xl font-semibold font-sans">$0000</h1>
			<article className="row-start-2 row-end-3 col-start-1 col-end-4 cursor-pointer p-4 flex flex-col gap-4 shadow-lg shadow-green-950 border-[1px] border-green-800 bg-[var(--background)] rounded-lg">
				<section className="flex flex-col gap-2">
					<p className="font-sans">Utilidad</p>
					<span className="text-3xl text-green-500">$0000</span>
				</section>
				<section className="flex flex-col gap-2">
					<p className="font-sans">Deudas</p>
					<span className="text-3xl text-red-500">$0000</span>
				</section>
			</article>
			<article className="row-start-3 row-end-4 col-start-1 col-end-4 cursor-pointer p-4 flex flex-col gap-4 shadow-lg shadow-gray-950 justify-between border-[1px] border-gray-700 bg-[var(--background)] rounded-lg">
				<section className="flex flex-col gap-2">
					<p className="font-sans font-semibold text-xl">Inventario</p>
				</section>
				<section className="flex flex-col gap-2 ml-auto">
					<p className="font-sans text-sm">
						Cantidad: <span className="text-base font-semibold">0000</span>
					</p>
				</section>
			</article>
			<Invoice />
			<Sales />
			<Odc />
			<Client />
			<Supplier />
		</article>
	);
};

export default Board;
