import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";
import { GetAllHeadquartersUseCase } from "@/application/use-cases/headquarters/get-all-headquarters.usecase";
import { cookies } from "next/headers";

import { DataTable } from "@/app/components/tables/DataTable";
import { columnsHeadquarters } from "./columns";

const repository = new HeadquartersRepository(
	`${process.env.NEXT_PUBLIC_BASE_URL}`
);
// Obtenemos todas las sucursales
async function getAll(companyId: string, token: string) {
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

	const headquarters = (await getAll(companyId, token))?.headquarters || [];
	return <DataTable data={headquarters} columns={columnsHeadquarters} />;
}
