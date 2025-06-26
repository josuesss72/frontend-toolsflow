"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const shema = z.object({
	name: z.string().nonempty(),
	desc: z.string(),
	code: z.string().nonempty(),
	category: z.string(),
	brand: z.string(),
	purchasePrice: z.string().nonempty(),
	salePrice: z.string().nonempty(),
});

type FormData = z.infer<typeof shema>;

const CreateProductForm = () => {
	const { handleSubmit, register } = useForm<FormData>({
		resolver: zodResolver(shema),
	});

	const submit: SubmitHandler<FormData> = (data, event) => {
		event?.preventDefault();
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className="flex flex-col gap-2"
			action=""
		>
			<div className="flex gap-2">
				<input
					type="text"
					placeholder="Nombre"
					className="input_segundary w-full"
					{...register("name")}
				/>
				<input
					type="text"
					placeholder="codigo"
					className="input_segundary"
					{...register("code")}
				/>
			</div>
			<input
				type="text"
				placeholder="Descripción"
				className="input_segundary"
				{...register("desc")}
			/>
			<div className="flex gap-2">
				<input
					type="text"
					placeholder="Marca"
					className="input_segundary w-full"
					{...register("brand")}
				/>
				<select
					id="category"
					className="bg-black p-1 rounded-sm"
					{...register("category")}
				>
					<option value="category">Categoria</option>
				</select>
			</div>
			<div className="flex gap-2">
				<input
					type="number"
					placeholder="Precio de compra"
					className="input_segundary w-full"
					{...register("purchasePrice")}
				/>
				<input
					type="number"
					placeholder="Precio de venta"
					className="input_segundary"
					{...register("salePrice")}
				/>
			</div>
			<button className="btn_segundary mt-4">Crear</button>
		</form>
	);
};

export default CreateProductForm;
