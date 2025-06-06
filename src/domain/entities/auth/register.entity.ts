import { Entity } from "../entity";

export interface FetchRegister extends Entity {
	user: {
		id: string;
		email: string;
	};
}

export interface ResponseRegister extends Entity {
	user: {
		id: string;
		email: string;
	};
}

export interface PayloadRegister {
	name: string;
	email: string;
	password: string;
}
