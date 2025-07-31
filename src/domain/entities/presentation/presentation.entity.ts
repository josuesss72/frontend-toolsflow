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
