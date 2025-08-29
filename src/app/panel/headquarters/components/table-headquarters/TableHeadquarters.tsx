import { cookies } from "next/headers";

import { DataTable } from "@/app/components/tables/DataTable";
import { columnsHeadquarters } from "./columns";
import { headquartersService } from "@/app/services/headquarters.service";

// Obtenemos todas las sucursales
async function getAll(companyId: string, token: string) {
	return await headquartersService.getAllHeadquarters.execute(companyId, token);
}

export default async function TableHeadquarters() {
	const cookieStore = await cookies();
	const companyId = cookieStore.get("companyId")?.value || "";
	const token = cookieStore.get("token")?.value || "";

	const headquarters = (await getAll(companyId, token)).headquarters;
	return <DataTable data={headquarters} columns={columnsHeadquarters} />;
}
