import { Response } from "../entity";
import {
	PayloadPresentation,
	Presentation,
} from "../presentation/presentation.entity";

export interface PayloadProduct {
	name: string;
	categoryId?: string;
	code: string;
	presentations: PayloadPresentation[];
}

export interface Product {
	id: string;
	name: string;
	category: {
		id: string;
		name: string;
	};
	code: string;
	state: string;
	totalStock: number;
	presentations: Presentation[];
	createdAt: string;
	updatedAt: string;
}

export interface FetchAllProducts extends Response {
	products: Product[];
}

export interface FetchSuccessProduct extends Response {
	id: string;
}

export interface FetchProduct extends Response {
	product: Product;
}
