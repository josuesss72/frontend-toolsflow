import { HeadquartersRepository } from "@/application/repositories/headquarters/headquarters.repository";

export class GetHeadquartersUseCase {
	constructor(
		private readonly headquartersRepository: HeadquartersRepository
	) {}

	async execute(id: string, token: string) {
		return this.headquartersRepository.getById(id, token);
	}
}
