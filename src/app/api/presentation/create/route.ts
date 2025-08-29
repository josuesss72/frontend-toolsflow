import { getCookieStore } from "../../common/get-cookies";
import { NextResponse } from "next/server";
import { presentationService } from "@/app/services/presentation.service";

/**
 * Esta funcion crea una nueva presentacion de producto.
 *
 * La funcion recibe un request con la informacion de la presentacion a crear.
 * La informacion se obtiene de la request y se utiliza para crear una nueva
 * presentacion en la base de datos.
 *
 * La funcion devuelve una respuesta con la presentacion creada.
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

		const response = await presentationService.createPresentation.execute(
			payload,
			token
		);
		return NextResponse.json(response);
	} catch (error) {
		console.error("POST error:", error);
		return NextResponse.json(
			{ message: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
