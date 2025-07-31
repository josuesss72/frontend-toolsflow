import { getConfig } from "@/application/config/token";
import {
	FetchSuccessPresentation,
	PayloadPresentation,
} from "@/domain/entities/presentation/presentation.entity";
import axios from "axios";

export default class PresentationRepository {
	apiUrl: string;
	constructor(baseURL: string) {
		this.apiUrl = `${baseURL}/product-presentation`;
	}

	async create(data: PayloadPresentation, token: string) {
		return axios
			.post<FetchSuccessPresentation>(`${this.apiUrl}`, data, getConfig(token))
			.then((response) => response.data);
	}
}
