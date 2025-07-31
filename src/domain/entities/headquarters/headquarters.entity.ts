import { Response } from "../entity";

export interface PayloadHeadquarters {
	name?: string;
	email?: string;
	career?: string;
	street?: string;
	password?: string;
	number?: string;
	city?: string;
	phone?: string;
	country?: string;
	indicative?: string;
	state?: string;
}

export interface Headquarters {
	address: string;
	city: string;
	country: string;
	email: string;
	id: string;
	name: string;
	password: string;
	phone: string;
	state: string;
}

export interface FetchAllHeadquarters extends Response {
	headquarters: Headquarters[];
}

export interface FetchSuccessHeadquarters extends Response {
	id: string;
}
