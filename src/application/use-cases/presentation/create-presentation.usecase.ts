import PresentationRepository from "@/application/repositories/presentation/presentation.repository";
import { PayloadPresentation } from "@/domain/entities/presentation/presentation.entity";

export default class CreatePresentationUseCase {
	constructor(
		private repository: PresentationRepository,
		private data: PayloadPresentation,
		private token: string
	) {}

	async execute() {
		return await this.repository.create(this.data, this.token);
	}
}
