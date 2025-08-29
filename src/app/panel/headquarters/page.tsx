import Link from "next/link";
import TableHeadquarters from "./components/table-headquarters/TableHeadquarters";

export default function headquartersPage() {
	return (
		<main className="mx-auto mt-32">
			<section className="flex items-center justify-between">
				<h1 className="text-4xl">Sucursales</h1>
				<Link
					className="btn_segundary ml-auto"
					href="/panel/headquarters/create"
				>
					Nuevo
				</Link>
			</section>
			<TableHeadquarters />
		</main>
	);
}
