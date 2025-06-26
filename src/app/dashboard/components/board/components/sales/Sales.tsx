import Chart from "@/app/components/charts/Chart";
import React from "react";

const Sales = () => {
	return (
		<article className="row-start-4 row-end-5 col-start-1 col-end-4 cursor-pointer pt-4 pr-2 shadow-lg shadow-gray-950 justify-between border-[1px] border-gray-700 bg-[var(--background)] rounded-lg">
			<div className="grid gap-2 w-full h-full">
				<section>
					<p className="font-sans pl-4 font-semibold text-xl">Ventas</p>
				</section>
				<section className="w-full h-full">
					<Chart />
				</section>
			</div>
		</article>
	);
};

export default Sales;
