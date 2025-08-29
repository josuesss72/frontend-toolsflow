import { getConfig } from "@/application/config/token";
import {
	FetchSuccessInventary,
	PayloadInventary,
} from "@/domain/entities/inventary/inventary.entity";
import axios, { AxiosError } from "axios";
import { NetworkError, UnauthorizedError } from "../common/catchs-errors";

export default class InventaryRepository {
	apiUrl: string;
	constructor(private readonly baseUrl: string) {
		this.apiUrl = `${this.baseUrl}/inventary`;
	}

	async createInventary(token: string, inventary: PayloadInventary) {
		return await axios
			.post<FetchSuccessInventary>(this.apiUrl, inventary, getConfig(token))
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
