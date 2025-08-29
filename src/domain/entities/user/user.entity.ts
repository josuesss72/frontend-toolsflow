import { Response } from "../entity";

export interface User {
	id: string;
	role: string;
	name: string;
	email: string;
	password: string;
	state: string;
	createdAt: string;
	updatedAt: string;
}

export interface FetchSuccessUser extends Response {
	user: User;
}
