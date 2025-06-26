"use client";
import Errors from "@/app/components/errors/Errors";
import { AuthRepository } from "@/application/repositories/auth/auth.repository";
import { RegisterUseCase } from "@/application/use-cases/auth/register.usecase";
import { ResponseError } from "@/domain/entities/axios/error.entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const shema = z.object({
	name: z.string().trim().min(1, { message: "El nombre es requerido" }),
	email: z.string().email({ message: "Email invalido" }).toLowerCase().trim(),
	password: z
		.string()
		.min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
		.trim(),
});

type FormData = z.infer<typeof shema>;

const RegisterForm = () => {
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

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			action=""
			className="text-lg flex flex-col gap-2"
		>
			<div className="flex flex-col gap-1.5">
				<input
					type="text"
					placeholder="Nombre"
					className="input_segundary"
					{...register("name")}
				/>
			</div>
			<div className="flex flex-col gap-1.5">
				<input
					type="text"
					placeholder="Email"
					className="input_segundary"
					{...register("email")}
				/>
			</div>
			<div className="flex flex-col gap-1.5">
				<input
					placeholder="Password"
					type="password"
					className="input_segundary"
					{...register("password")}
				/>
			</div>
			<button className="btn_segundary mt-4">Enviar</button>
			<Link
				href={"/auth/login"}
				className="mt-2 text-sm underline cursor-pointer mr-auto"
			>
				ya tienes cuenta?
			</Link>
			<Errors errors={errors} />
		</form>
	);
};

export default RegisterForm;
