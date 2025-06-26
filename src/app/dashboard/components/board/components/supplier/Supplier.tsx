import Image from "next/image";
import React from "react";

const Supplier = () => {
	return (
		<article className="row-start-5 row-end-6 col-start-3 col-end-5 cursor-pointer p-4 flex flex-col shadow-lg shadow-gray-950 justify-between border-[1px] border-gray-700 bg-[var(--background)] rounded-lg">
			<section className="flex flex-col items-center gap-2">
				<Image src={"/usuario.avif"} width={50} height={50} alt="" />
				<p className="text-[10px]">jhosuacode@gmail.com</p>
			</section>
			<section className="text-sm">
				<p className="font-semibold">Nombre</p>
				<p className="text-xs">000-000-000-000</p>
			</section>
			<section className="flex justify-end">
				<p>$0000</p>
			</section>
		</article>
	);
};

export default Supplier;
