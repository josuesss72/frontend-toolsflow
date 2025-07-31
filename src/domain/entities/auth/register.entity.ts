import { Response } from "../entity";

export interface FetchRegister extends Response {
	user: {
		id: string;
		email: string;
	};
}

export interface ResponseRegister extends Response {
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
