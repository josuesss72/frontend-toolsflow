import { AxiosError } from "axios";
import { ResponseError } from "@/domain/entities/axios/error.entity";
import { UseFormSetError } from "react-hook-form";
import { FormDataProduct } from "@/app/utils/zod/shemas/product.shema";
import { FormDataPresentation } from "@/app/utils/zod/shemas/presentation.shema";
import { productService } from "@/app/services/product.service";

type SetError = UseFormSetError<{
	name: string;
	code: string;
	category?:
		| {
				value: string;
				label: string;
		  }
		| undefined;
}>;

/**
 * Hook que contiene la lógica para crear un nuevo producto
 * @param setError función para mostrar errores en el formulario
 * @returns objeto con la función para crear un nuevo producto
 */
export default function useProduct(setError: SetError) {
	/**
	 * Crea un nuevo producto en la base de datos, si la petición falla
	 * se llama al método setError con el mensaje de error
	 * @param data Formulario con los datos del producto
	 * @param token Token para autenticar la petición
	 * @param companyId Id de la empresa a la que pertenece el producto
	 */
	const createProduct = async (
		data: FormDataProduct,
		token: string,
		companyId: string,
		presentations: FormDataPresentation[]
	) => {
		const categoryId = data.category ? { categoryId: data.category.value } : {};
		const presentationsAdapter = adapterPayloadPresentations(presentations);
		return await productService.createProduct
			.execute(
				{
					name: data.name,
					...categoryId,
					code: data.code,
					presentations: presentationsAdapter,
				},
				token,
				companyId
			)
			.then((response) => {
				return response;
			})
			.catch((error: AxiosError<ResponseError>) => {
				setError("name", {
					type: "manual",
					message:
						error.response?.data.message || "Error al crear nuevo producto",
				});
				return undefined;
			});
	};

	/**
	 * Función que se encarga de adaptar el payload de presentaciones
	 * para que sea compatible con la API de creación de presentaciones
	 * @param payload - Presentaciones a adaptar
	 * @returns Un array de objetos con la información necesaria para crear
	 * las presentaciones
	 */
	const adapterPayloadPresentations = (payload: FormDataPresentation[]) => {
		return payload.map((presentation) => ({
			salePrice: Number(presentation.salePrice),
			purchasePrice: Number(presentation.purchasePrice),
			iva: Number(presentation.iva),
			measureSale: presentation.measureSale.map((measure) => measure.value),
			supplier: presentation.supplier,
			labels: presentation.labels?.map((label) => label) || [],
		}));
	};

	return {
		createProduct,
	};
}
