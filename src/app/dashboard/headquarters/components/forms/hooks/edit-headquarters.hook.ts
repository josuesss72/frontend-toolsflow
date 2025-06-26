import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
	EditHeadquartersFormData,
	editHeadquartersShema,
} from "@/app/utils/zod/shemas/headquarters.shema";
import {
	Headquarters,
	PayloadHeadquarters,
} from "@/domain/entities/headquarters/headquarters.entity";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";
import { UpdateHeadquartersUseCase } from "@/application/use-cases/headquarters/update-headquarters.usecase";
import { useRouter } from "next/navigation";
import { useOpenModalStore } from "@/app/zustand/open-modal";
import { AxiosError } from "axios";

const parseAddress = (address: string | undefined) => {
	if (!address) return { career: "", street: "", number: "" };
	const [_, career, addressPart] = address.split(" ");
	const [streetPart, number] = addressPart.slice(1).split("-");
	return {
		career,
		street: streetPart,
		number,
	};
};

const headquartersRepository = new HeadquartersRepository(
	`${process.env.NEXT_PUBLIC_BASE_URL}`
);

export function useEditHeadquarters() {
	const router = useRouter();
	const [headquarters, setHeadquarters] = useState<Headquarters | null>(null);
	const { setIsOpen } = useOpenModalStore();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		setError,
		setValue,
		reset,
	} = useForm<EditHeadquartersFormData>({
		defaultValues: {
			name: "",
			city: "",
			country: "",
			phone: "",
			career: "",
			street: "",
			number: "",
		},
		resolver: zodResolver(editHeadquartersShema),
	});

	useEffect(() => {
		const cookieData = Cookies.get("headquarters");
		if (!cookieData) return;
		const hq: Headquarters = JSON.parse(cookieData);
		setHeadquarters(hq);

		const { career, street, number } = parseAddress(hq.address);

		reset({
			name: hq.name,
			city: hq.city,
			country: hq.country,
			phone: hq.phone.slice(3),
			career,
			street,
			number,
			indicative: hq.phone.slice(0, 3),
		});
	}, []);

	const submit: SubmitHandler<EditHeadquartersFormData> = async (
		data,
		event
	) => {
		event?.preventDefault();
		const token = Cookies.get("token") || "";
		try {
			const fetch = await new UpdateHeadquartersUseCase(
				headquartersRepository
			).execute(headquarters?.id || "", data as PayloadHeadquarters, token);

			if (fetch.status.ok) {
				router.refresh();
				setIsOpen("edit", false);
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				const message =
					error.response?.data.message || "Error al editar Sucursal";
				setError("root", {
					type: "server",
					message,
				});
			} else {
				setError("root", {
					type: "unknown",
					message: "Ocurrió un error inesperado",
				});
			}
		}
	};

	return { register, handleSubmit, errors, isSubmitting, submit, setValue };
}
