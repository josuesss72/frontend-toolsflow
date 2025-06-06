import {
	FetchRegister,
	ResponseRegister,
} from "@/domain/entities/auth/register.entity";
/**
 * El adaptador convierte la respuesta cruda del fetch (`FetchEntity`)
 * en un objeto adaptado a la estructura esperada por la aplicación (`ResponseEntity`).
 * Esto permite desacoplar la estructura de la API de la estructura interna de nuestra app.
 *
 * @param fetchRespose - Datos crudos recibidos desde el backend o API externa.
 * @returns Objeto adaptado con los datos necesarios para el dominio.
 */
export const RegisterAdapter = (
	fetchRespose: FetchRegister
): ResponseRegister => {
	return {
		status: fetchRespose.status,
		user: fetchRespose.user,
	};
};
