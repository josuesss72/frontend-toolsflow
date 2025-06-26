import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";

export class GetAllHeadquartersUseCase {
	constructor(private readonly repository: HeadquartersRepository) {}

	async execute(companyId: string, token: string) {
		return await this.repository.getAll(companyId, token);
	}
}
