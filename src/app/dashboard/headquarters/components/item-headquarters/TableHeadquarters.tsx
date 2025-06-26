import Table, { ItemTable, LabelTable } from "@/app/components/tables/Table";
import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";
import { GetAllHeadquartersUseCase } from "@/application/use-cases/headquarters/get-all-headquarters.usecase";
import { cookies } from "next/headers";
import ButtonEdit from "./components/ButtonEdit";
import ButtonDelete from "./components/ButtonDelete";
import ButtonMore from "./components/ButtonMore";

async function getAll(companyId: string, token: string) {
	const repository = new HeadquartersRepository(
		`${process.env.NEXT_PUBLIC_BASE_URL}`
	);
	return await new GetAllHeadquartersUseCase(repository)
		.execute(companyId, token)
		.catch((error) => {
			console.log(error);
		});
}

export default async function TableHeadquarters() {
	const cookieStore = await cookies();
	const companyId = cookieStore.get("companyId")?.value || "";
	const token = cookieStore.get("token")?.value || "";

	const headquarters = (await getAll(companyId, token))?.headquarters;
	return (
		<Table classCols="grid-cols-[repeat(7,1fr)]">
			<LabelTable>
				<span>Sucursal</span>
				<span>Direccion</span>
				<span>Ciudad</span>
				<span>Pais</span>
				<span>Telefono</span>
				<span>Email</span>
				<span>Acciones</span>
			</LabelTable>
			{headquarters?.map((hq) => {
				return (
					<ItemTable key={hq.id}>
						<span>{hq.name}</span>
						<span>{hq.address}</span>
						<span>{hq.city}</span>
						<span>{hq.country}</span>
						<span>{hq.phone}</span>
						<span>{hq.email}</span>
						<span>
							<ButtonEdit hq={hq} />
							<ButtonMore checked={hq.state} />
						</span>
					</ItemTable>
				);
			})}
		</Table>
	);
}
