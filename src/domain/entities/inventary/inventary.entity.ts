import { Response } from "../entity";

export interface PayloadInventary {
	currentStock: number;
	maxAllowed: number;
	minAllowed: number;
	productPresentationId: string;
	equivalence: number;
}

export interface Inventary {
	id: string;
	currentStock: number;
	maxAllowed: number;
	minAllowed: number;
	equivalence: number;
	totalMeasure: number;
	productPresentationId: string;
	productId: string;
	companyId: string;
	headquartersId: string;
	createdAt: string;
	updatedAt: string;
}

export interface FetchAllInventary extends Response {
	data: Inventary[];
}

export interface FetchSuccessInventary extends Response {
	id: string;
}
