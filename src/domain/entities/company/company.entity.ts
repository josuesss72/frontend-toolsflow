import { Response } from "../entity";

export interface Company {
	id: string;
	name: string;
	nit: string;
	address: string;
	city: string;
	phone: string;
	email: string;
}

export interface PayloadCompany {
	name: string;
	email: string;
	nit: string;
	career: string;
	street: string;
	number: string;
	city: string;
	phone: string;
	indicative: string;
}
export interface FetchCompany extends Response {
	id: string;
}

export interface FetchSuccessCompany extends Response {
	company: Company;
}

export interface ResponseCompany extends Response {
	id: string;
}

export interface FetchAllCompanies extends Response {
	companies: Company[] | boolean;
}
