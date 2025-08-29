import FormCreateProduct from "../components/form-create-product/FormCreateProduct";

export default function CreateProductPage() {
	return (
		<main className="flex justify-center items-center">
			<div className="">
				<h1 className="text-4xl mb-4">Crear Producto</h1>
				<section className="">
					<FormCreateProduct />
				</section>
			</div>
		</main>
	);
}
