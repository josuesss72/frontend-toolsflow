import { Entity } from "../entity";

export interface PayloadHeadquarters {
	name: string;
	email: string;
	career: string;
	street: string;
	password: string;
	number: string;
	city: string;
	phone: string;
	country: string;
	indicative: string;
}
// export interface FetchHeadquarters extends Entity {
// 	name: string;
// 	email: string;
// 	address: string;
// 	city: string;
// 	country: string;
// 	phone: string;
// 	password: string;
// }

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

export interface FetchAllHeadquarters extends Entity {
	headquarters: Headquarters[];
}

export interface FetchSuccessHeadquarters extends Entity {
	id: string;
}
