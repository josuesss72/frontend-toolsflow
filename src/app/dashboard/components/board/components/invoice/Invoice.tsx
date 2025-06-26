import React from "react";

const Invoice = () => {
	return (
		<article className="row-start-3 row-end-4 col-start-4 col-end-6 cursor-pointer p-4 flex flex-col gap-4 shadow-lg shadow-gray-950 justify-between border-[1px] border-gray-700 bg-[var(--background)] rounded-lg">
			<section className="flex flex-col gap-2">
				<p className="font-sans font-semibold text-xl">Facturas</p>
			</section>
		</article>
	);
};

export default Invoice;
