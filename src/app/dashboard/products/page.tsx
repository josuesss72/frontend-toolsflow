import Main from "@/app/components/Main";
import TableProducts from "./components/table-products/TableProducts";
import Link from "next/link";
import { BoxIcon } from "lucide-react";

export default function ProductsPage() {
	return (
		<Main>
			<section className="flex items-center justify-between">
				<h1 className="text-4xl flex items-center gap-2">
					<BoxIcon className="w-8 h-8" /> Productos
				</h1>
				<Link
					className="btn_segundary ml-auto"
					href="/dashboard/products/create"
				>
					Nuevo
				</Link>
			</section>
			<TableProducts />
		</Main>
	);
}
