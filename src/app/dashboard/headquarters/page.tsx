import Main from "@/app/components/Main";
import ModalCreateHeadquarters from "./components/modal-create-headquarters/ModalCreateHeadquarters";
import TableHeadquarters from "./components/item-headquarters/TableHeadquarters";

export default function headquartersPage() {
	return (
		<Main>
			<section className="flex items-center justify-between">
				<h1 className="text-4xl">Sucursales</h1>
				<ModalCreateHeadquarters />
			</section>
			<TableHeadquarters />
		</Main>
	);
}
