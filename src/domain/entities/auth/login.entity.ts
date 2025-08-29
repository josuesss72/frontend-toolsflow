import { Response } from "../entity";

export interface FetchLogin extends Response {
	token: string;
	id: string;
	role: string;
	companyId?: string;
}

export interface ResponseLogin extends Response {
	token: string;
	id: string;
	role: string;
	companyId?: string;
}

export interface PayloadLogin {
	email: string;
	password: string;
}
