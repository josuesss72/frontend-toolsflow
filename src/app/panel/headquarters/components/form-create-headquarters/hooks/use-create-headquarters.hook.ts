import { useOpenModalStore } from "@/app/zustand/open-modal";
import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";
import { CreateHeadquartersUseCase } from "@/application/use-cases/headquarters/create-headquarters.usecase";
import { ResponseError } from "@/domain/entities/axios/error.entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import {
	HeadquartersFormData,
	headquartersShema,
} from "@/app/utils/zod/shemas/headquarters.shema";

export function useCreateHeadquarters() {
	const { setIsOpen } = useOpenModalStore();
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
	} = useForm<HeadquartersFormData>({
		resolver: zodResolver(headquartersShema),
	});

	const headquartersRepository = new HeadquartersRepository(
		`${process.env.NEXT_PUBLIC_BASE_URL}`
	);

	const submit: SubmitHandler<HeadquartersFormData> = async (data, event) => {
		event?.preventDefault();
		const token = Cookies.get("token") || "";
		const companyId = Cookies.get("companyId") || "";
		await new CreateHeadquartersUseCase(headquartersRepository)
			.execute(data, companyId, token)
			.then((response) => {
				if (response.status.ok) {
					setIsOpen("create", false);
					router.push("/panel/headquarters");
				}
			})
			.catch((error: AxiosError<ResponseError>) => {
				setError("root", {
					type: "deps",
					message:
						error.response?.data.message || "Error al crear nueva sucursal",
				});
			});
	};

	return { register, handleSubmit, errors, isSubmitting, submit };
}
