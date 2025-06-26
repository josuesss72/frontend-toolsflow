"use client";
import Errors from "@/app/components/errors/Errors";
import Link from "next/link";
import React from "react";
import { useLoginForm } from "./hooks/login-form.hook";

const LoginForm = () => {
	const { handleSubmit, onSubmit, register, errors } = useLoginForm();

	return (
		<form
			action=""
			onSubmit={handleSubmit(onSubmit)}
			className="text-lg flex flex-col gap-2"
		>
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
					type="password"
					className="input_segundary"
					placeholder="Password"
					{...register("password")}
				/>
			</div>
			<button className="btn_segundary mt-4">Enviar</button>
			<Link
				href={"/auth/register"}
				className="mt-2 text-sm underline cursor-pointer mr-auto"
			>
				Registrarse
			</Link>
			<Errors errors={errors} />
		</form>
	);
};

export default LoginForm;
