import { getConfig } from "@/application/config/token";
import {
	FetchAllCompanies,
	FetchCompany,
	FetchSuccessCompany,
	PayloadCompany,
} from "@/domain/entities/company/company.entity";
import axios, { AxiosError } from "axios";
import { NetworkError, UnauthorizedError } from "../common/catchs-errors";

export class CompanyRepository {
	apiUrl: string;

	constructor(baseUrl: string | undefined) {
		this.apiUrl = `${baseUrl}/company`;
	}

	/**
	 * Crea una nueva compañía en el servidor a partir de los datos proporcionados.
	 * @param data - Los datos de la compañía a crear.
	 * @param token - El token de autenticación del usuario.
	 * @returns La compañía creada en el servidor.
	 */
	async create(data: PayloadCompany, token: string) {
		const { name, career, street, number, phone, indicative, ...res } = data;
		return await axios
			.post<FetchCompany>(
				`${this.apiUrl}`,
				{
					name: name,
					address: `carrera ${career} #${street}-${number}`,
					phone: `${indicative}${phone}`,
					...res,
				},
				getConfig(token)
			)
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	/**
	 * Obtiene todas las compañías registradas en el servidor.
	 * @param token - El token de autenticación del usuario.
	 * @returns Todas las compañías registradas en el servidor.
	 */
	async getAll(token: string) {
		return await axios
			.get<FetchAllCompanies>(`${this.apiUrl}`, getConfig(token))
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	/**
	 * Verifica si existen compañías registradas en el servidor.
	 * @param token - El token de autenticación del usuario.
	 * @returns Un booleano indicando si existen compañías registradas en el servidor.
	 */
	async areThereCompanies(token: string) {
		return await axios
			.get<FetchAllCompanies>(`${this.apiUrl}?verify=true`, getConfig(token))
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	/**
	 * Obtiene una compañía registrada en el servidor a partir de su ID.
	 * @param id - El ID de la compañía a obtener.
	 * @param token - El token de autenticación del usuario.
	 * @returns La compañía registrada en el servidor.
	 */
	async getById(id: string, token: string) {
		return await axios
			.get<FetchSuccessCompany>(`${this.apiUrl}/${id}`, getConfig(token))
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	private handleErrors(error: AxiosError) {
		if (!error.response) {
			throw new NetworkError("No se pudo conectar al servidor");
		}

		if (error.response.status === 401) {
			throw new UnauthorizedError("Credenciales inválidas");
		}
	}
}
