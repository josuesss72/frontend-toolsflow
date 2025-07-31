import { CategoryRepository } from "@/application/repositories/category/category.repository";
import { PayloadCategory } from "@/domain/entities/category/category.entity";

export class CreateCategoryUseCase {
	constructor(
		private readonly categoryRepository: CategoryRepository,
		private readonly data: PayloadCategory,
		private readonly token: string,
		private readonly companyId: string
	) {}

	async execute() {
		return await this.categoryRepository.createCategory(
			this.token,
			this.companyId,
			this.data
		);
	}
}
