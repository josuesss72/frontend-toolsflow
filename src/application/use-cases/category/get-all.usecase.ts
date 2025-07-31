import { CategoryRepository } from "@/application/repositories/category/category.repository";

export class GetAllCategoriesUseCase {
	constructor(private readonly repository: CategoryRepository) {}

	async execute(token: string, companyId: string) {
		return await this.repository.getAllCategories(token, companyId);
	}
}
