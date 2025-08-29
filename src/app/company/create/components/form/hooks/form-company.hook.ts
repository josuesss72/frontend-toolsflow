import { validations } from "@/app/utils/zod/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import Cookies from "js-cookie";
import { companyService } from "@/app/services/company.service";

const shema = z.object({
	name: z.string().trim(),
	email: validations.email,
	nit: validations.nit,
	career: validations.nomenglature(3),
	street: validations.nomenglature(4),
	number: validations.nomenglature(4),
	city: validations.city,
	phone: validations.phone,
	indicative: z.string(),
});

type FormData = z.infer<typeof shema>;

export function useFormCompany() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(shema),
	});

	const Submit: SubmitHandler<FormData> = async (data, event) => {
		event?.preventDefault();
		const token = Cookies.get("token") || "";
		await companyService.createCompany.execute(data, token).then((response) => {
			if (response.status.ok) {
				Cookies.set("companyId", response.id, { path: "/" });
				router.push("/dashboard");
			}
		});
	};
	return { register, handleSubmit, errors, Submit, router, isSubmitting };
}
