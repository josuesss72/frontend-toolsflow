// Importamos los tipos que definen la forma de los datos que esperamos recibir (FetchLogin)
// y el tipo que queremos retornar (ResponseLogin). Esto mantiene tipado fuerte y modularidad.
import { FetchLogin, ResponseLogin } from "@/domain/entities/auth/login.entity";

/**
 * El adaptador convierte la respuesta cruda del fetch (`FetchEntity`)
 * en un objeto adaptado a la estructura esperada por la aplicación (`ResponseEntity`).
 * Esto permite desacoplar la estructura de la API de la estructura interna de nuestra app.
 *
 * @param fetchRespose - Datos crudos recibidos desde el backend o API externa.
 * @returns Objeto adaptado con los datos necesarios para el dominio.
 */
export const LoginAdapter = (fetchRespose: FetchLogin): ResponseLogin => {
	// Se recomienda usar nombres consistentes entre backend y frontend,
	// pero el adapter permite mapearlos si fueran diferentes.
	return {
		status: fetchRespose.status,
		token: fetchRespose.token,
		id: fetchRespose.id,
		role: fetchRespose.role,
		companyId: fetchRespose.companyId,
	};
};
