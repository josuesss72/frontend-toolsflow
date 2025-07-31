import { z } from "zod";

export const presentationShema = z.object({
	uid: z.string().optional(),
	salePrice: z.string().nonempty(),
	purchasePrice: z.string().nonempty(),
	iva: z.string().nonempty(),
	medidas: z
		.array(
			z.object({
				value: z.string(),
				label: z.string(),
			})
		)
		.nonempty(),
	labels: z.array(z.string()).optional(),
	supplier: z.string().optional(),
});

//export type FormDataValueSelect = z.infer<typeof shemaValueSelect>;
export type FormDataPresentation = z.infer<typeof presentationShema>;
