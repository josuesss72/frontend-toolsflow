import { Response } from "../entity";

export interface Category {
	id: string;
	name: string;
}

export interface PayloadCategory {
	name: string;
}

export interface FetchAllCategories extends Response {
	categories: Category[];
}

export interface FetchSuccessCategory extends Response {
	id: string;
}
