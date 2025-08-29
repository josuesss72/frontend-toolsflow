import Main from "@/app/components/Main";
import FormCreateHeadquarters from "../components/form-create-headquarters/CreateHeadquartersForm";

export default function CreateHeadquartersPage() {
	return (
		<Main>
			<h1 className="text-4xl mb-4">Crear Sucursal</h1>
			<section className="w-full max-w-[600px]">
				<FormCreateHeadquarters />
			</section>
		</Main>
	);
}
