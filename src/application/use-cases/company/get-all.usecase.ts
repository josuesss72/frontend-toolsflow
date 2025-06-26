import { CompanyRepository } from "@/application/repositories/company/company.repository";

export class GetAllCompaniesUseCase {
  constructor(private readonly repository: CompanyRepository) {}

  async execute(token: string) {
    return await this.repository.getAll(token);
  }
}
