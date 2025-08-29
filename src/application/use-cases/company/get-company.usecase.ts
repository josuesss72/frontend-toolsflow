import { CompanyRepository } from "@/application/repositories/company/company.repository";

export class GetCompanyUseCase {
	constructor(private companyRepository: CompanyRepository) {}

	async execute(id: string, token: string) {
		return await this.companyRepository.getById(id, token);
	}
}
