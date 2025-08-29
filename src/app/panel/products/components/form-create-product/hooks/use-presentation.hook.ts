import {
	FetchSuccessPresentation,
	PayloadPresentation,
} from "@/domain/entities/presentation/presentation.entity";
import { toast } from "sonner";

export default function usePresentation() {
	/**
	 * Esta funcion crea una presentacion de producto en la base de datos.
	 *
	 * Recibe un objeto con los datos de la presentacion a crear.
	 * La informacion se envia a la API y se devuelve el objeto con el id de la presentacion creada.
	 */
	const createPresentation = async (payloads: PayloadPresentation[]) => {
		const presentations: { id: string }[] = [];
		try {
			for (const payload of payloads) {
				const response = await fetch("/api/presentation/create", {
					method: "POST",
					body: JSON.stringify(payload),
				});
				const data: FetchSuccessPresentation = await response.json();
				if (data.status === 201) {
					presentations.push({ id: data.id });
				} else {
					toast.error("Una presentacion no se puedo crear correctamente");
					break;
				}
			}
			if (presentations.length > 0) {
				return presentations;
			} else {
				return undefined;
			}
		} catch (error) {
			console.error("API_POST error:", error);
			return undefined;
		}
	};

	return {
		createPresentation,
	};
}
