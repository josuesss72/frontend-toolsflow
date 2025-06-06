import { Entity } from "../entity";

export interface FetchLogin extends Entity {
	token: string;
	id: string;
}

export interface ResponseLogin extends Entity {
	token: string;
	id: string;
}

export interface PayloadLogin {
	email: string;
	password: string;
}
