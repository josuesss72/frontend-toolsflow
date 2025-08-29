import TableProducts from "./components/table-products/TableProducts";
import Link from "next/link";
import { BoxIcon } from "lucide-react";

export default function ProductsPage() {
	return (
		<main className="mx-auto mt-32 min-w-[850px]">
			<section className="flex items-center justify-between">
				<h1 className="text-4xl flex items-center gap-2">
					<BoxIcon className="w-8 h-8" /> Productos
				</h1>
				<Link className="btn_segundary ml-auto" href="/panel/products/create">
					Nuevo
				</Link>
			</section>
			<TableProducts />
		</main>
	);
}
