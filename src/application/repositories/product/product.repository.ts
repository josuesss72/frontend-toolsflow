import { getConfig } from "@/application/config/token";
import {
	FetchAllProducts,
	FetchProduct,
	FetchSuccessProduct,
	PayloadProduct,
} from "@/domain/entities/product/product.entity";
import axios, { AxiosError } from "axios";
import { NetworkError, UnauthorizedError } from "../common/catchs-errors";

export class ProductRepository {
	apiUrl = "";
	constructor(private readonly baseUrl: string | undefined) {
		if (!this.baseUrl) throw new Error("Base URL is required");
		this.apiUrl = `${this.baseUrl}/product`;
	}

	/**
	 * Obtiene todos los productos de una empresa
	 * @param token el token de autenticacion del usuario
	 * @param companyId el id de la empresa a la que pertenece el producto
	 * @returns todos los productos de la empresa
	 */
	async getAll(token: string, companyId: string) {
		return await axios
			.get<FetchAllProducts>(
				`${this.apiUrl}?companyId=${companyId}`,
				getConfig(token)
			)
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	/**
	 * Crea un nuevo producto en la base de datos
	 * @param data el producto a crear
	 * @param token el token de autenticacion del usuario
	 * @param companyId el id de la empresa a la que pertenece el producto
	 * @returns el producto creado
	 */
	async create(data: PayloadProduct, token: string, companyId: string) {
		return await axios
			.post<FetchSuccessProduct>(
				`${this.apiUrl}?companyId=${companyId}`,
				data,
				getConfig(token)
			)
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	/**
	 * Obtiene un producto existente en la base de datos
	 * @param id el id del producto a obtener
	 * @param token el token de autenticacion del usuario
	 * @param companyId el id de la empresa a la que pertenece el producto
	 * @returns el producto obtenido
	 */
	async getById(id: string, token: string) {
		return await axios
			.get<FetchProduct>(`${this.apiUrl}/${id}`, getConfig(token))
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	/**
	 * Borra un producto existente en la base de datos
	 * @param id el id del producto a eliminar
	 * @param token el token de autenticacion del usuario
	 * @param companyId el id de la empresa a la que pertenece el producto
	 * @returns el producto eliminado
	 */
	async delete(id: string, token: string, companyId: string) {
		return await axios
			.delete<FetchSuccessProduct>(
				`${this.apiUrl}/${id}?companyId=${companyId}`,
				getConfig(token)
			)
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	/**
	 * Actualiza un producto existente en la base de datos
	 * @param id el id del producto a actualizar
	 * @param data el producto a actualizar
	 * @param token el token de autenticacion del usuario
	 * @returns el producto actualizado
	 */
	async update(id: string, data: PayloadProduct, token: string) {
		return await axios
			.put<FetchSuccessProduct>(`${this.apiUrl}/${id}`, data, getConfig(token))
			.then((response) => response.data)
			.catch((error) => {
				this.handleErrors(error);
				throw error;
			});
	}

	private handleErrors(error: AxiosError) {
		console.log(error);
		if (!error.response) {
			throw new NetworkError("No se pudo conectar al servidor");
		}

		if (error.response.status === 401) {
			throw new UnauthorizedError("Credenciales inválidas");
		}
	}
}
