import { getConfig } from "@/application/config/token";
import {
	FetchAllPresentation,
	FetchSuccessPresentation,
	PayloadPresentation,
} from "@/domain/entities/presentation/presentation.entity";
import axios from "axios";

export default class PresentationRepository {
	apiUrl: string;
	constructor(private readonly baseURL: string | undefined) {
		if (!this.baseURL) throw new Error("Base URL is required");
		this.apiUrl = `${this.baseURL}/product-presentation`;
	}

	async create(data: PayloadPresentation, token: string) {
		return axios
			.post<FetchSuccessPresentation>(`${this.apiUrl}`, data, getConfig(token))
			.then((response) => response.data);
	}

	async findAll(productId: string, token: string) {
		return axios
			.get<FetchAllPresentation>(
				`${this.apiUrl}?productId=${productId}`,
				getConfig(token)
			)
			.then((response) => response.data);
	}
}
