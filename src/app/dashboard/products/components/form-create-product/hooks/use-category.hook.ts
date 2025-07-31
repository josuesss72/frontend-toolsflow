import {
	FetchAllCategories,
	FetchSuccessCategory,
} from "@/domain/entities/category/category.entity";
import { useState } from "react";

export default function useCategory() {
	const [categories, setCategories] = useState<
		{ value: string; label: string }[]
	>([]);
	/**
	 * Funcion para obtener todas las categorias
	 * hace una peticion GET a la ruta /api/categories/all
	 * y setea el estado de categories con los valores
	 * de las categorias devueltas en la respuesta
	 */
	const getAllCategories = async () => {
		const fetchCategories = await fetch("/api/categories/all");
		const response: FetchAllCategories = await fetchCategories.json();
		if (response.status.ok) {
			setCategories(
				response.categories.map((category) => ({
					value: category.id,
					label: category.name,
				}))
			);
		}
	};

	/**
	 * Funcion para crear una categoria
	 * Hace una peticion POST a la ruta /api/categories/create
	 * con el nombre de la categoria y devuelve el id de la categoria creada
	 * si la categoria se creó correctamente actualiza el estado de categories
	 * con la nueva categoria
	 * @param {string} name nombre de la categoria a crear
	 */
	const createCategory = async (name: string) => {
		const response = await fetch("/api/categories/create", {
			method: "POST",
			body: JSON.stringify({ name }),
		});
		const data: FetchSuccessCategory = await response.json();
		if (data.status.ok) {
			getAllCategories();
		}
		return data;
	};

	return {
		categories,
		getAllCategories,
		createCategory,
	};
}
