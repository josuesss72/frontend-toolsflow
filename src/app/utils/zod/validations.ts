import { z } from "zod";

export const validations = {
	name: z.string().trim().min(1, { message: "El nombre es requerido" }),
	email: z.string().email({ message: "Email invalido" }).toLowerCase().trim(),
	password: z
		.string()
		.min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
		.trim(),
	nomenglature: (maxLength: number) =>
		z
			.string()
			.max(maxLength)
			.regex(/^[a-zA-Z0-9\s]+$/, { message: "No se permiten simbolos" }),
	nit: z.string().regex(/^\d{9}-\d{1}$/, {
		message: "El NIT debe tener el formato 00000000-0",
	}),
	phone: z
		.string()
		.min(10, { message: "El número debe tener al menos 10 dígitos" })
		.regex(/^\d+$/, { message: "El número debe contener solo dígitos" }),
	city: z
		.string()
		.regex(/^[a-zA-Z\s]+$/, { message: "No se permiten simbolos" })
		.trim(),
};
