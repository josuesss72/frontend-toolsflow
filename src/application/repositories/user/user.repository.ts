import { getConfig } from "@/application/config/token";
import { FetchSuccessUser } from "@/domain/entities/user/user.entity";
import axios, { AxiosError } from "axios";
import { NetworkError, UnauthorizedError } from "../common/catchs-errors";

export class UserRepository {
	apiUrl = "";
	constructor(private readonly baseUrl: string | undefined) {
		if (!this.baseUrl) throw new Error("Base URL is required");
		this.apiUrl = `${this.baseUrl}/user`;
	}

	async getUserInfo(token: string) {
		return await axios
			.get<FetchSuccessUser>(`${this.apiUrl}/me`, getConfig(token))
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
