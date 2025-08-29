import { z } from "zod";

export const presentationShema = z.object({
	//id: z.string(),
	salePrice: z.string().nonempty(),
	purchasePrice: z.string().nonempty(),
	iva: z.string().nonempty(),
	measureSale: z
		.array(
			z.object({
				value: z.string(),
				label: z.string(),
			})
		)
		.nonempty(),
	//stock: z.string().nonempty(),
	//maxAllowed: z.string().nonempty(),
	//minAllowed: z.string().nonempty(),
	//equivalence: z.string().nonempty(),
	labels: z.array(z.string()).optional(),
	supplier: z.string().optional(),
});

//export type FormDataValueSelect = z.infer<typeof shemaValueSelect>;
export type FormDataPresentation = z.infer<typeof presentationShema>;
