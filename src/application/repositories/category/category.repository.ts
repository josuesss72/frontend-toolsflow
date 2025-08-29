import { getConfig } from "@/application/config/token";
import {
	FetchAllCategories,
	FetchSuccessCategory,
	PayloadCategory,
} from "@/domain/entities/category/category.entity";
import axios, { AxiosError } from "axios";
import { NetworkError, UnauthorizedError } from "../common/catchs-errors";

export class CategoryRepository {
	url = "";
	constructor(private readonly baseUrl: string) {
		this.url = `${this.baseUrl}/category`;
	}

	/**
	 * Este metodo hace una peticion GET a la url
	 * /category y devuelve un objeto FetchAllCategories
	 * que contiene un array de categorias
	 */
	async getAllCategories(token: string, companyId: string) {
		return await axios
			.get<FetchAllCategories>(
				`${this.url}?companyId=${companyId}`,
				getConfig(token)
			)
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	/**
	 * Este metodo hace una peticion POST a la url
	 * /category y devuelve un objeto FetchSuccessCategory
	 * que contiene el id de la categoria creada
	 */
	async createCategory(
		token: string,
		companyId: string,
		data: PayloadCategory
	) {
		return await axios
			.post<FetchSuccessCategory>(
				`${this.url}?companyId=${companyId}`,
				data,
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
