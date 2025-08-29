import { usePresentationStore } from "@/app/zustand/product-presentations-store";
import useProduct from "./use-product.hook";
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOpenModalStore } from "@/app/zustand/open-modal";
import {
	FormDataProduct,
	productShema,
} from "@/app/utils/zod/shemas/product.shema";
import { useRouter } from "next/navigation";

/**
 * Hook que maneja la creación de un nuevo producto
 * - Valida los datos del formulario con zod
 * - Guarda las presentaciones en el estado global con usePresentationStore
 * - Llama a la función createProduct del hook useProduct para crear el producto
 * - Limpia el array de presentaciones
 * - Abre el modal para crear presentaciones
 * @returns un objeto con las funciones para manejar el formulario
 */
export default function useFormProduct() {
	// React Hook Form
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		setError,
	} = useForm<FormDataProduct>({
		resolver: zodResolver(productShema),
		defaultValues: {
			category: undefined,
		},
	});
	const { createProduct } = useProduct(setError);
	const { setIsOpen } = useOpenModalStore();
	const { presentations, clearPresentations } = usePresentationStore();
	const router = useRouter();

	/**
	 * Función que se encarga de crear un nuevo producto
	 * Valida que se haya creado al menos una presentación
	 * Llama a la función createProduct pasando los datos del formulario y el token y el id de la empresa
	 * Limpia el array de presentaciones
	 * @param data - Información del formulario
	 * @param event - Evento del formulario
	 */
	const submit: SubmitHandler<FormDataProduct> = async (data, event) => {
		event?.preventDefault();
		// Obtener el token y el id de la empresa
		const token = Cookies.get("token") || "";
		const companyId = Cookies.get("companyId") || "";

		if (presentations.length === 0) {
			toast.warning("Debes crear al menos una presentación");
			return;
		}
		const product = await createProduct(data, token, companyId, presentations);
		if (!product) {
			toast.error("Error al crear el producto");
			return;
		}

		toast.success("Producto creado exitosamente");
		clearPresentations();
		router.push("/panel/products");
	};

	const handleOpenModal = () => {
		setIsOpen("create", true);
	};

	return {
		submit,
		register,
		handleSubmit,
		control,
		errors,
		handleOpenModal,
	};
}
