import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";
import { PayloadHeadquarters } from "@/domain/entities/headquarters/headquarters.entity";

export class UpdateHeadquartersUseCase {
	constructor(private readonly repository: HeadquartersRepository) {}

	async execute(id: string, data: PayloadHeadquarters, token: string) {
		return await this.repository.update(data, token, id);
	}
}
