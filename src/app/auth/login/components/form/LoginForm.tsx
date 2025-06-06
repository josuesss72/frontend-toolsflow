"use client";
import Errors from "@/app/components/errors/Errors";
import { AuthRepository } from "@/application/repositories/auth/auth.repository";
import { LoginUseCase } from "@/application/use-cases/auth/login.usecase";
import { ResponseError } from "@/domain/entities/axios/error.entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const shema = z.object({
	email: z.string().email({ message: "Email inválido" }),
	password: z.string(),
});

type FormData = z.infer<typeof shema>;

const LoginForm = () => {
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
		await new LoginUseCase(authRepository, data)
			.execute()
			.then((response) => {
				if (response.status.ok) {
					localStorage.setItem("token", response.token);
					localStorage.setItem("userId", response.id);
					console.log(response);
				}
			})
			.catch((error: AxiosError<ResponseError>) => {
				setError("root", {
					type: "deps",
					message: error.response?.data.message || "Error al iniciar sesión",
				});
			});
	};

	return (
		<form
			action=""
			onSubmit={handleSubmit(onSubmit)}
			className="text-lg flex flex-col gap-2"
		>
			<div className="flex flex-col gap-1.5">
				<p className="text-[var(--text-color-primary-400)]">gmail</p>
				<input type="text" className="input_primary" {...register("email")} />
			</div>
			<div className="flex flex-col gap-1.5">
				<p className="text-[var(--text-color-primary-400)]">password</p>
				<input
					type="password"
					className="input_primary"
					{...register("password")}
				/>
			</div>
			<button className="btn_primary">Enviar</button>
			<Link
				href={"/auth/register"}
				className="mt-2 text-sm underline cursor-pointer"
			>
				Registrame
			</Link>
			<Errors errors={errors} />
		</form>
	);
};

export default LoginForm;
