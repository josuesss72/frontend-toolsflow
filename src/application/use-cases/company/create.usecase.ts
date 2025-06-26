import { CompanyRepository } from "@/application/repositories/company/company.repository";
import { PayloadCompany } from "@/domain/entities/company/company.entity";

export class CreateCompanyUseCase {
  constructor(
    private readonly repository: CompanyRepository,
    private data: PayloadCompany,
    private token: string
  ) {}

  async execute() {
    return await this.repository.create(this.data, this.token);
  }
}
