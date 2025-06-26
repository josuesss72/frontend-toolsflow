import Main from "@/app/components/Main";
import ModalCreateHeadquarters from "./components/modal-create-headquarters/ModalCreateHeadquarters";
import TableHeadquarters from "./components/item-headquarters/TableHeadquarters";

export default function headquartersPage() {
	return (
		<Main>
			<h1>Sucursales</h1>
			<ModalCreateHeadquarters />
			<TableHeadquarters />
		</Main>
	);
}
