export interface Supplier {
	id: string;
	createdAt: string;
	updatedAt: string;
	userId: string;
	companyId: string;
	nit: string;
	email: string | null;
	companyName: string;
	typePerson: string;
	taxRegimen: string;
	personName: string;
	iphoneNumber: string | null;
	direction: string | null;
	city: string | null;
	departament: string | null;
	deleveryTime: string | null;
	paymentMethod: string;
}
