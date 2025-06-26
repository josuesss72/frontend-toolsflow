import { z } from "zod";
import { validations } from "../validations";

export const headquartersShema = z.object({
	name: z.string(),
	career: validations.nomenglature(3),
	street: validations.nomenglature(4),
	number: validations.nomenglature(4),
	city: validations.city,
	country: validations.city,
	indicative: z.string(),
	phone: validations.phone,
	email: validations.email,
	password: validations.password,
});

export const editHeadquartersShema = z.object({
	name: z.string(),
	career: validations.nomenglature(3),
	street: validations.nomenglature(4),
	number: validations.nomenglature(4),
	city: validations.city,
	country: validations.city,
	indicative: z.string(),
	phone: validations.phone,
});

export type HeadquartersFormData = z.infer<typeof headquartersShema>;
export type EditHeadquartersFormData = z.infer<typeof editHeadquartersShema>;
