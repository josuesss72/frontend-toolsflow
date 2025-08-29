import { LoginAdapter } from "@/domain/adapters/auth/login.adapter";
import { RegisterAdapter } from "@/domain/adapters/auth/register.adapter";
import {
	FetchLogin,
	PayloadLogin,
	ResponseLogin,
} from "@/domain/entities/auth/login.entity";
import {
	FetchRegister,
	PayloadRegister,
	ResponseRegister,
} from "@/domain/entities/auth/register.entity";
import axios, { AxiosError } from "axios";
import { NetworkError, UnauthorizedError } from "../common/catchs-errors";

export class AuthRepository {
	apiUrl: string;

	constructor(baseUrl: string | undefined) {
		this.apiUrl = `${baseUrl}/auth`;
	}

	async login(data: PayloadLogin): Promise<ResponseLogin> {
		return await axios
			.post<FetchLogin>(`${this.apiUrl}/login`, data)
			.then((response) => LoginAdapter(response.data))
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	async register(data: PayloadRegister): Promise<ResponseRegister> {
		return await axios
			.post<FetchRegister>(`${this.apiUrl}/register`, data)
			.then((response) => RegisterAdapter(response.data))
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
