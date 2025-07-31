import InventaryRepository from "@/application/repositories/inventary/inventary.repository";
import { PayloadInventary } from "@/domain/entities/inventary/inventary.entity";

export default class CreateInventaryUseCase {
	constructor(
		private readonly inventaryRepository: InventaryRepository,
		private data: PayloadInventary,
		private token: string
	) {}

	async execute() {
		return await this.inventaryRepository.createInventary(
			this.token,
			this.data
		);
	}
}
