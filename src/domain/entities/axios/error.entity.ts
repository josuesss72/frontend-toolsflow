export interface ResponseError {
	message: string;
	response?: {
		data: {
			error: string;
			statusCode: number;
			message: string;
		};
	};
}
