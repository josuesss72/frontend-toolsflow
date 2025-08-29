import { ProductRepository } from "@/application/repositories/product/product.repository";

export class GetProductUseCase {
	constructor(private readonly respository: ProductRepository) {}

	async execute(id: string, token: string) {
		return await this.respository.getById(id, token);
	}
}
