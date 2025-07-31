import { z } from "zod";

export const productShema = z.object({
	name: z.string().nonempty({ message: "El nombre es requerido" }),
	code: z.string().nonempty({ message: "El código es requerido" }),
	category: z
		.object({
			value: z.string(),
			label: z.string(),
		})
		.optional(),
});

export type FormDataProduct = z.infer<typeof productShema>;
