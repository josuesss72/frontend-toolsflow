"use client";
import Errors from "@/app/components/errors/Errors";
import Link from "next/link";
import React from "react";
import { useLoginForm } from "./hooks/login-form.hook";
import Spinner from "@/app/components/spinners/Spinner";
import { motion } from "framer-motion";

const LoginForm = () => {
	const { handleSubmit, onSubmit, register, errors, isLoading } =
		useLoginForm();

	return (
		<motion.article
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			className={`w-[400px] z-10 flex flex-col gap-4`}
		>
			<section className="flex gap-1 justify-center">
				<h1 className={`text-4xl font-bold text-blue-500/80`}>Gesnigo</h1>
			</section>

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
				<button className="btn_segundary mt-4">
					{isLoading ? <Spinner /> : "Iniciar sesión"}
				</button>
				<Link
					href={"/auth/register"}
					className="mt-2 text-sm underline cursor-pointer mr-auto"
				>
					Registrarse
				</Link>
				<Errors errors={errors} />
			</form>
		</motion.article>
	);
};

export default LoginForm;
