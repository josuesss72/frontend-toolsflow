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
import axios from "axios";

export class AuthRepository {
	apiUrl: string;

	constructor(url: string) {
		this.apiUrl = `${url}/auth`;
	}

	async login(data: PayloadLogin): Promise<ResponseLogin> {
		return await axios
			.post<FetchLogin>(`${this.apiUrl}/login`, data)
			.then((response) => LoginAdapter(response.data));
	}

	async register(data: PayloadRegister): Promise<ResponseRegister> {
		return await axios
			.post<FetchRegister>(`${this.apiUrl}/register`, data)
			.then((response) => RegisterAdapter(response.data));
	}
}
