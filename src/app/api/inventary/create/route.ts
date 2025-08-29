import { NextResponse } from "next/server";
import { getCookieStore } from "../../common/get-cookies";
import InventaryRepository from "@/application/repositories/inventary/inventary.repository";
import CreateInventaryUseCase from "@/application/use-cases/inventary/create-inventary.usecase";

const repository = new InventaryRepository(
	`${process.env.NEXT_PUBLIC_BASE_URL}`
);

/**
 * Esta funcion crea un nuevo inventario para una sucursal.
 *
 * La funcion recibe un request con la informacion del inventario a crear.
 * La informacion se obtiene de la request y se utiliza para crear un nuevo
 * inventario en la base de datos.
 *
 * La funcion devuelve una respuesta con el inventario creado.
 *
 * Si ocurre un error, se devuelve una respuesta con el error.
 */
export async function POST(req: Request) {
	try {
		const { token } = await getCookieStore();

		const payload = await req.json();

		if (!token) {
			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		}

		const response = await new CreateInventaryUseCase(
			repository,
			payload,
			token
		).execute();
		return NextResponse.json(response);
	} catch (error) {
		console.error("POST error:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
