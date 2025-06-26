import { getConfig } from "@/application/config/token";
import {
	FetchAllHeadquarters,
	FetchSuccessHeadquarters,
	PayloadHeadquarters,
} from "@/domain/entities/headquarters/headquarters.entity";
import axios from "axios";

export class HeadquartersRepository {
	apiAuth = "";
	constructor(private readonly apiUrl: string) {
		this.apiAuth = `${apiUrl}/headquarters-auth`;
		this.apiUrl = `${apiUrl}/headquarters`;
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
		return axios
			.patch<FetchSuccessHeadquarters>(
				`${this.apiUrl}/${id}`,
				{
					...res,
					address: `carrera ${career} #${street}-${number}`,
					phone: `${indicative}${phone}`,
				},
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
