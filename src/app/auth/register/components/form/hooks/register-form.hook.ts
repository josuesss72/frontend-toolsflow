import { validations } from "@/app/utils/zod/validations";
import { AuthRepository } from "@/application/repositories/auth/auth.repository";
import { RegisterUseCase } from "@/application/use-cases/auth/register.usecase";
import { ResponseError } from "@/domain/entities/axios/error.entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const shema = z.object({
	name: validations.name,
	email: validations.email,
	password: validations.password,
});

type FormData = z.infer<typeof shema>;

export function useRegisterForm() {
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

	const onSubmit: SubmitHandler<FormData> = async (data, event) => {
		event?.preventDefault();
		await new RegisterUseCase(authRepository, data)
			.execute()
			.then((response) => {
				if (response.status.ok) {
					router.push("/auth/register/success");
				}
			})
			.catch((error: AxiosError<ResponseError>) => {
				setError("root", {
					type: "deps",
					message: error.response?.data.message || "Error al registrar",
				});
			});
	};

	return {
		onSubmit,
		register,
		handleSubmit,
		errors,
	};
}
