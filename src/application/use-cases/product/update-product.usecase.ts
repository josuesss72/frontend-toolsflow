import { ProductRepository } from "@/application/repositories/product/product.repository";
import { PayloadProduct } from "@/domain/entities/product/product.entity";

export class UpdateProductUseCase {
	constructor(private productRepository: ProductRepository) {}

	async execute(id: string, data: PayloadProduct, token: string) {
		return await this.productRepository.update(id, data, token);
	}
}
