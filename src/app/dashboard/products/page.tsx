import Table, { ItemTable, LabelTable } from "@/app/components/tables/Table";
import ModalCreate from "@/app/components/modals/ModalCreate";
import CreateProductForm from "./components/form-create-product/CreateProductForm";
import Main from "@/app/components/Main";

export default function ProductsPage() {
	return (
		<Main>
			<h1>Productos</h1>
			<ModalCreate
				classNameBtn="btn_segundary ml-auto"
				text="Rellena bien todos los campos para tener una mejor organizacion"
				title="Nuevo Producto"
				textBtn="Nuevo"
			>
				<CreateProductForm />
			</ModalCreate>
			<Table classCols="grid-cols-[repeat(8,1fr)]">
				<LabelTable>
					<span>Producto</span>
					<span>Codigo</span>
					<span>Categoria</span>
					<span>Ganacia</span>
					<span>Marca</span>
					<span>Prc Venta</span>
					<span>Prc Compra</span>
					<span>Acciones</span>
				</LabelTable>
				<ItemTable>
					<span>Cemento</span>
					<span>CONS0001</span>
					<span>Construccion</span>
					<span>6000</span>
					<span>Ultracen</span>
					<span>36000</span>
					<span>30000</span>
					<span>CONS0001</span>
				</ItemTable>
			</Table>
		</Main>
	);
}
