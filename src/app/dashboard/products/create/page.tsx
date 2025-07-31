import Main from "@/app/components/Main";
import CreateProductForm from "../components/form-create-product/CreateProductForm";

export default function CreateProductPage() {
	return (
		<Main>
			<h1>Crear Producto</h1>
			<section className="w-full max-w-[600px]">
				<CreateProductForm />
			</section>
		</Main>
	);
}
