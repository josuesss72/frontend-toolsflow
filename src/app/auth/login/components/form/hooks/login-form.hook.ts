import { validations } from "@/app/utils/zod/validations";
import { AuthRepository } from "@/application/repositories/auth/auth.repository";
import { LoginUseCase } from "@/application/use-cases/auth/login.usecase";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Cookies from "js-cookie";
import { CompanyRepository } from "@/application/repositories/company/company.repository";
import { AreThereCompaniesUseCase } from "@/application/use-cases/company/are-there.usecase";

const shema = z.object({
	email: validations.email,
	password: z.string(),
});

type FormData = z.infer<typeof shema>;

export function useLoginForm() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<FormData>({
		resolver: zodResolver(shema),
	});

	const authRepository = new AuthRepository(
		`${process.env.NEXT_PUBLIC_BASE_URL}`
	);

	const companyRepository = new CompanyRepository(
		`${process.env.NEXT_PUBLIC_BASE_URL}`
	);

	async function createOrSelectCompany(token: string) {
		return await new AreThereCompaniesUseCase(companyRepository)
			.execute(token)
			.then((response) => {
				if (response.companies === true) {
					router.push("/company/select");
				} else {
					router.push("/company/create");
				}
			});
	}

	const onSubmit: SubmitHandler<FormData> = async (data, event) => {
		event?.preventDefault();
		try {
			const login = await new LoginUseCase(authRepository, data).execute();

			if (login.status.ok) {
				Cookies.set("userId", login.id, { path: "/" });
				Cookies.set("token", login.token, { path: "/" });
				await createOrSelectCompany(login.token);
			} else {
				setError("root", {
					type: "custom",
					message: "Credenciales inválidas.",
				});
			}
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				const message =
					error.response?.data.message || "Error al iniciar sesión";
				setError("root", {
					type: "server",
					message,
				});
			} else {
				setError("root", {
					type: "unknown",
					message: "Ocurrió un error inesperado",
				});
			}
		}
	};

	return { onSubmit, register, handleSubmit, errors };
}
