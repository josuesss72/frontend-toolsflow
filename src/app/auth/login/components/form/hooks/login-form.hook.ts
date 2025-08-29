import { validations } from "@/app/utils/zod/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Cookies from "js-cookie";
import { useState } from "react";
import { authService } from "@/app/services/auth.service";
import { companyService } from "@/app/services/company.service";
import { GlobalError } from "@/app/common/global-error";

const shema = z.object({
	email: validations.email,
	password: z.string(),
});

type FormData = z.infer<typeof shema>;

export function useLoginForm() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(shema),
	});

	/**
	 * Esta función se encarga de redirigir a la pantalla correspondiente según el rol del usuario.
	 * Si el rol es 'USER', verifica si el usuario tiene una empresa asociada.
	 * Si tiene una empresa asociada, se redirige a la pantalla de selección de empresa,
	 * de lo contrario se redirige a la pantalla de creación de empresa.
	 * Si el rol es 'HQ' y se proporciona un 'companyId', se guarda el 'companyId' en cookies y se redirige a la pantalla de dashboard.
	 *
	 * @param token - El token del usuario
	 * @param rol - El rol del usuario
	 * @param companyId - El id de la empresa asociada al usuario (opcional)
	 */
	async function redirectBasedOnRole(
		token: string,
		rol: string,
		companyId?: string
	) {
		if (rol === "USER") {
			await companyService.areThereCompanies
				.execute(token)
				.then((response) => {
					if (response.companies === true) {
						router.push("/company/select");
					} else {
						router.push("/company/create");
					}
				})
				.catch((error) => {
					GlobalError(error);
				});
		}

		if (rol === "HQ" && companyId) {
			Cookies.set("companyId", companyId, { path: "/" });
			router.push(`/dashboard`);
		}
	}

	/**
	 * Esta función se encarga de manejar el formulario de inicio de sesión.
	 * Cuando se envía el formulario, se verifica si las credenciales son válidas.
	 * Si lo son, se guarda el token y el id del usuario en cookies y se redirige a la pantalla de selección de empresa.
	 * Si no lo son, se muestra un error en el formulario.
	 */
	const onSubmit: SubmitHandler<FormData> = async (data, event) => {
		setIsLoading(true); // Se establece el estado de carga
		event?.preventDefault();
		try {
			const login = await authService.login.execute(data);
			//Se guardan los datos del usuario en cookies
			Cookies.set("userId", login.id, { path: "/" });
			Cookies.set("token", login.token, { path: "/" });
			Cookies.set("role", login.role, { path: "/" });
			await redirectBasedOnRole(login.token, login.role, login.companyId);
		} catch (error) {
			GlobalError(error as AxiosError);
		}
		setIsLoading(false); // Se establece el estado de carga
	};

	return { onSubmit, register, handleSubmit, errors, isLoading };
}
