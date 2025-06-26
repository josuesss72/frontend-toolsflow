import { validations } from "@/app/utils/zod/validations";
import { CompanyRepository } from "@/application/repositories/company/company.repository";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { CreateCompanyUseCase } from "@/application/use-cases/company/create.usecase";
import Cookies from "js-cookie";

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

const repository = new CompanyRepository(`${process.env.NEXT_PUBLIC_BASE_URL}`);

export function useFormCompany() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(shema),
  });

  const Submit: SubmitHandler<FormData> = async (data, event) => {
    event?.preventDefault();
    const token = localStorage.getItem("token") || "";
    await new CreateCompanyUseCase(repository, data, token)
      .execute()
      .then((response) => {
        if (response.status.ok) {
          Cookies.set("companyId", response.id, { path: "/" });
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        setError("root", {
          type: "deps",
          message: error.response?.data.message || "Error al iniciar sesión",
        });
      });
  };
  return { register, handleSubmit, errors, Submit, router, isSubmitting };
}
