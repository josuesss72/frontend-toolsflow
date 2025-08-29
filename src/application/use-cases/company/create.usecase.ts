import { CompanyRepository } from "@/application/repositories/company/company.repository";
import { PayloadCompany } from "@/domain/entities/company/company.entity";

export class CreateCompanyUseCase {
	constructor(private readonly repository: CompanyRepository) {}

	async execute(data: PayloadCompany, token: string) {
		return await this.repository.create(data, token);
	}
}
