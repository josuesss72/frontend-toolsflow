import { CompanyRepository } from "@/application/repositories/company/company.repository";

export class AreThereCompaniesUseCase {
  constructor(private readonly repository: CompanyRepository) {}

  async execute(token: string) {
    return await this.repository.areThereCompanies(token);
  }
}
