import {
	NetworkError,
	UnauthorizedError,
} from "@/application/repositories/common/catchs-errors";
import { AxiosError } from "axios";
import { toast } from "sonner";

interface ErrorData {
	error: string;
	message: string;
	statusCode: number;
}

export const GlobalError = (error: AxiosError) => {
	const errorData = error.response?.data as ErrorData;
	if (error instanceof NetworkError) {
		toast.error(error.message);
	} else if (error instanceof UnauthorizedError) {
		toast.error(error.message);
	} else {
		toast.error(errorData.message || "Ocurrió un error");
	}
};
