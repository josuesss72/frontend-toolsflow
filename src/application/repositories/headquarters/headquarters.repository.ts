import { getConfig } from "@/application/config/token";
import {
	FetchAllHeadquarters,
	FetchSuccessHeadquarters,
	PayloadHeadquarters,
} from "@/domain/entities/headquarters/headquarters.entity";
import axios from "axios";

export class HeadquartersRepository {
	apiAuth = "";
	apiUrl = "";
	constructor(private readonly baseUrl: string) {
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
			.then((response) => response.data);
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
			.then((response) => response.data);
	}

	async getAll(companyId: string, token: string) {
		return axios
			.get<FetchAllHeadquarters>(
				`${this.apiUrl}?companyId=${companyId}`,
				getConfig(token)
			)
			.then((response) => response.data);
	}

	async remove(id: string, token: string) {
		return axios
			.delete<FetchSuccessHeadquarters>(
				`${this.apiUrl}/${id}`,
				getConfig(token)
			)
			.then((response) => response.data);
	}
}
