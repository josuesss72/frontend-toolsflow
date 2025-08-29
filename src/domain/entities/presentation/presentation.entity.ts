import { Inventary } from "../inventary/inventary.entity";
import { Supplier } from "../supplier/supplier.entity";

export interface Presentation {
	id: string;
	measureSale: string[];
	salePrice: number;
	purchasePrice: number;
	priceWithIva: number;
	revenue: number;
	iva: number;
	state: string;
	labels: string[];
	createdAt: string;
	updatedAt: string;
	supplier: Supplier;
	productId: string;
	inventaries: Inventary[];
	StockOfAllInventaries: number;
}

export interface PayloadPresentation {
	salePrice: number;
	purchasePrice: number;
	iva: number;
	measureSale: string[];
	supplierId?: string;
	labels: string[];
}

export interface FetchSuccessPresentation extends Response {
	id: string;
}

export interface FetchAllPresentation extends Response {
	presentations: Presentation[];
}

export interface FetchPresentation extends Response {
	presentation: Presentation;
}
