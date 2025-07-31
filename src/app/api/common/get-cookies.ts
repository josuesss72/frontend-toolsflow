import { cookies } from "next/headers";

export const getCookieStore = async () => {
	const cookieStore = await cookies();
	const companyId = cookieStore.get("companyId")?.value;
	const token = cookieStore.get("token")?.value;

	if (!companyId || !token) {
		throw new Error("No se encontraron cookies");
	}

	return { companyId, token };
};
