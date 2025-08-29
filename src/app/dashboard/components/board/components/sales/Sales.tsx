import Chart from "@/app/components/charts/Chart";
import React from "react";
import { styleBoard } from "../../styles";

const Sales = () => {
	return (
		<article
			className={`row-start-3 row-end-5 col-start-1 col-end-5 cursor-pointer ${styleBoard.CARD}`}
		>
			<div className="grid gap-2 w-full h-full">
				<section>
					<p className="font-sans pl-4 font-semibold text-xl text-white">
						Ventas
					</p>
				</section>
				<section className="w-full h-full">
					<Chart />
				</section>
			</div>
		</article>
	);
};

export default Sales;
