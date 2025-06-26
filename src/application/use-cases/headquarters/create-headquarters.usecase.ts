import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";
import { PayloadHeadquarters } from "@/domain/entities/headquarters/headquarters.entity";

export class CreateHeadquartersUseCase {
  constructor(private readonly repository: HeadquartersRepository) {}

  async execute(data: PayloadHeadquarters, companyId: string, token: string) {
    return await this.repository.register(data, companyId, token);
  }
}
