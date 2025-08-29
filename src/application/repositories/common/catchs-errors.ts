export class NetworkError extends Error {
	constructor(message: string = "Error de conexión") {
		super(message);
		this.name = "NetworkError";
	}
}

export class UnauthorizedError extends Error {
	constructor(message: string = "No autorizado") {
		super(message);
		this.name = "UnauthorizedError";
	}
}
