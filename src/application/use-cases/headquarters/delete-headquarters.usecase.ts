import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";

export class DeleteHeadquartersUseCase {
	constructor(private readonly repository: HeadquartersRepository) {}

	async execute(id: string, token: string) {
		return await this.repository.remove(id, token);
	}
}
