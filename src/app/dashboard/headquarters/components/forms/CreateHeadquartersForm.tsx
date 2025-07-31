"use client";
import React from "react";
import { useCreateHeadquarters } from "./hooks/create-headquarters.hook";
import Errors from "@/app/components/errors/Errors";

const CreateHeadquartersForm = () => {
	const { register, handleSubmit, submit, errors, isSubmitting } =
		useCreateHeadquarters();
	return (
		<form
			onSubmit={handleSubmit(submit)}
			action=""
			className="flex flex-col gap-2 w-fit h-fit"
		>
			<input
				type="text"
				placeholder="Nombre"
				className="input_segundary w-full"
				{...register("name")}
			/>
			<div className="flex gap-2">
				<input
					type="text"
					placeholder="Carrera"
					className="input_segundary w-full"
					{...register("career")}
				/>
				<input
					type="text"
					placeholder="Calle"
					className="input_segundary w-full"
					{...register("street")}
				/>
				<input
					type="text"
					placeholder="Numero"
					className="input_segundary w-full"
					{...register("number")}
				/>
			</div>
			<div className="flex gap-2">
				<input
					type="text"
					placeholder="Ciudad"
					className="input_segundary w-full"
					{...register("city")}
				/>
				<input
					type="text"
					placeholder="Pais"
					className="input_segundary w-full"
					{...register("country")}
				/>
			</div>

			<input
				type="text"
				placeholder="Email"
				className="input_segundary w-full"
				{...register("email")}
			/>
			<input
				type="password"
				placeholder="Password"
				className="input_segundary w-full"
				{...register("password")}
			/>
			<div className="flex gap-2">
				<select className="input_segundary" {...register("indicative")}>
					<option value="+57">+57</option>
				</select>
				<input
					type="number"
					placeholder="0000000000"
					className="input_segundary w-full"
					{...register("phone")}
				/>
			</div>

			<button disabled={isSubmitting} className="btn_segundary mt-4">
				{isSubmitting ? "Loading..." : "Crear"}
			</button>
			<Errors errors={errors} />
		</form>
	);
};

export default CreateHeadquartersForm;
