import { CompanyRepository } from "@/application/repositories/company/company.repository";
import { AreThereCompaniesUseCase } from "@/application/use-cases/company/are-there.usecase";
import { CreateCompanyUseCase } from "@/application/use-cases/company/create.usecase";
import { GetAllCompaniesUseCase } from "@/application/use-cases/company/get-all.usecase";
import { GetCompanyUseCase } from "@/application/use-cases/company/get-company.usecase";

const instancia = new CompanyRepository(process.env.NEXT_PUBLIC_BASE_URL);

export const companyService = {
	getCompany: new GetCompanyUseCase(instancia),
	areThereCompanies: new AreThereCompaniesUseCase(instancia),
	createCompany: new CreateCompanyUseCase(instancia),
	getAllCompanies: new GetAllCompaniesUseCase(instancia),
};
