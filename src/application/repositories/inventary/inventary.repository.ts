import { getConfig } from "@/application/config/token";
import {
	FetchSuccessInventary,
	PayloadInventary,
} from "@/domain/entities/inventary/inventary.entity";
import axios from "axios";

export default class InventaryRepository {
	apiUrl: string;
	constructor(private readonly baseUrl: string) {
		this.apiUrl = `${this.baseUrl}/inventary`;
	}

	async createInventary(token: string, inventary: PayloadInventary) {
		return await axios
			.post<FetchSuccessInventary>(this.apiUrl, inventary, getConfig(token))
			.then((response) => response.data);
	}
}
