import { getConfig } from "@/application/config/token";
import {
	FetchAllHeadquarters,
	FetchHeadquarters,
	FetchSuccessHeadquarters,
	PayloadHeadquarters,
} from "@/domain/entities/headquarters/headquarters.entity";
import axios, { AxiosError } from "axios";
import { NetworkError, UnauthorizedError } from "../common/catchs-errors";

export class HeadquartersRepository {
	apiAuth = "";
	apiUrl = "";
	constructor(private readonly baseUrl: string | undefined) {
		if (!this.baseUrl) throw new Error("Base URL is required");
		this.apiAuth = `${this.baseUrl}/headquarters-auth`;
		this.apiUrl = `${this.baseUrl}/headquarters`;
	}

	async register(data: PayloadHeadquarters, companyId: string, token: string) {
		const { career, number, street, indicative, phone, ...res } = data;
		return await axios
			.post<FetchSuccessHeadquarters>(
				`${this.apiAuth}/register?companyId=${companyId}`,
				{
					...res,
					address: `carrera ${career} #${street}-${number}`,
					phone: `${indicative}${phone}`,
				},
				getConfig(token)
			)
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	async update(data: PayloadHeadquarters, token: string, id: string) {
		const { career, number, street, indicative, phone, ...res } = data;

		// si career, number y street vienen, se actualiza el address
		// si indicative y phone vienen, se actualiza el phone
		// se hace asi por que tenemos que hacer el formato del address y phone
		const dataUpdate = {
			...res,
			...(career && number && street
				? { address: `carrera ${career} #${street}-${number}` }
				: {}),
			...(indicative && phone ? { phone: `${indicative}${phone}` } : {}),
		};
		return axios
			.patch<FetchSuccessHeadquarters>(
				`${this.apiUrl}/${id}`,
				dataUpdate,
				getConfig(token)
			)
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	async getAll(companyId: string, token: string) {
		return axios
			.get<FetchAllHeadquarters>(
				`${this.apiUrl}?companyId=${companyId}`,
				getConfig(token)
			)
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	async getById(id: string, token: string) {
		return axios
			.get<FetchHeadquarters>(`${this.apiUrl}/${id}`, getConfig(token))
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	async remove(id: string, token: string) {
		return axios
			.delete<FetchSuccessHeadquarters>(
				`${this.apiUrl}/${id}`,
				getConfig(token)
			)
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
