import { CompanyRepository } from "@/application/repositories/company/company.repository";
import { GetAllCompaniesUseCase } from "@/application/use-cases/company/get-all.usecase";
import { Company } from "@/domain/entities/company/company.entity";
import { cookies } from "next/headers";
import CompanySelect from "./components/company-select/CompanySelect";

const repository = new CompanyRepository(`${process.env.NEXT_PUBLIC_BASE_URL}`);

async function getAll(token: string) {
	return await new GetAllCompaniesUseCase(repository).execute(token);
}

export default async function selectCompanyPage() {
	const cookieStore = await cookies();
	const companies = (await getAll(cookieStore.get("token")?.value || ""))
		.companies as Company[];
	return (
		<main className="w-screen h-screen flex justify-center items-center">
			<article className="flex flex-col gap-4">
				<h1 className="text-xl">Selecciona la compañia</h1>
				<section className="bg-[var(--background)] p-1.5 rounded-md w-[400px]">
					{companies?.map((company) => {
						return <CompanySelect key={company.id} company={company} />;
					})}
				</section>
			</article>
		</main>
	);
}
